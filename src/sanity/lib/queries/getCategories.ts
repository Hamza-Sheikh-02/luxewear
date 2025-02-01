import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getCategories = async () => {
  const categoryQuery = defineQuery(
    `*[_type == "category"] | order(name asc)`
  );

  try {
    const categories = await sanityFetch({ query: categoryQuery });
    return categories.data || [];
  } catch (error) {
    console.error(`Error fetching categories: ${error}`);
    return [];
  }
};
