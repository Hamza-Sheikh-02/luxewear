import { defineType, defineField } from "sanity";

const product = defineType({
  name: "products",
  title: "Products",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "T-Shirt", value: "tshirt" },
          { title: "Short", value: "short" },
          { title: "Jeans", value: "jeans" },
          { title: "Hoddie", value: "hoodie" },
          { title: "Shirt", value: "shirt" },
        ],
      },
    }),
    defineField({
      name: "discountPercent",
      title: "Discount Percent",
      type: "number",
    }),
    defineField({
      name: "isNew",
      type: "boolean",
      title: "New",
    }),
    defineField({
      name: "isTopSelling",
      type: "boolean",
      title: "Top Selling",
    }),
    // defineField({
    //   name: "reviews",
    //   title: "Reviews",
    //   type: "array",
    //   of: [{ type: "review" }],
    //   validation: (Rule) => Rule.min(1).max(5),
    // }),
    defineField({
      name: "colors",
      title: "Colors",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "sizes",
      title: "Sizes",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});

export default product;
