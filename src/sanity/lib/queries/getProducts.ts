import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getProducts = async () => {
  const productQuery = defineQuery(`*[_type == "product"] | order(name asc)`);

  try {
    const products = await sanityFetch({ query: productQuery });
    return products.data || [];
  } catch (error) {
    console.error(`Error fetching products: ${error}`);
    return [];
  }
};
