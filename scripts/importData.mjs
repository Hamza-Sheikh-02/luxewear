import "dotenv/config";
import { createClient } from "@sanity/client";
import fetch from "node-fetch";
import { Buffer } from "node:buffer";

const requiredEnvVars = [
  "NEXT_PUBLIC_SANITY_PROJECT_ID",
  "NEXT_PUBLIC_SANITY_DATASET",
  "SANITY_API_TOKEN",
];
const missingEnvVars = requiredEnvVars.filter((key) => !process.env[key]);

if (missingEnvVars.length > 0) {
  console.error(`Missing required environment variables: ${missingEnvVars.join(", ")}`);
  process.exit(1);
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: "2025-01-13",
  token: process.env.SANITY_API_TOKEN,
});

async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);
    const response = await fetch(imageUrl);
    if (!response.ok) throw new Error(`Failed to fetch image: ${response.statusText}`);
    const buffer = await response.arrayBuffer();
    const bufferImage = Buffer.from(buffer);
    const asset = await client.assets.upload("image", bufferImage, {
      filename: imageUrl.split("/").pop(),
    });
    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error(`Failed to upload image (${imageUrl}):`, error.message);
    return null;
  }
}

async function uploadProduct(product) {
  try {
    console.log(`Processing product: ${product.name}`);
    const imageId = await uploadImageToSanity(product.imageUrl);

    if (!imageId) {
      console.warn(`Skipping product (${product.name}) due to image upload failure.`);
      return;
    }

    const document = {
      _type: "products",
      name: product.name,
      description: product.description,
      price: product.price,
      image: {
        _type: "image",
        asset: { _ref: imageId },
      },
      category: product.category,
      discountPercent: product.discountPercent || 0,
      isNew: product.isNew || false,
      colors: product.colors || [],
      sizes: product.sizes || [],
    };

    const createdProduct = await client.create(document);
    console.log(`Product uploaded successfully: ${createdProduct._id}`);
  } catch (error) {
    console.error(`Error uploading product (${product.name}):`, error.message);
  }
}

async function importProducts() {
  try {
    console.log("Fetching product data...");
    const response = await fetch("https://template1-neon-nu.vercel.app/api/products");
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const products = await response.json();
    console.log(`Fetched ${products.length} products.`);

    for (const product of products) {
      await uploadProduct(product);
    }

    console.log("All products imported successfully!");
  } catch (error) {
    console.error("Error during product import:", error.message);
  }
}

importProducts();
