import { defineType, defineField } from "sanity";
import { PackageIcon } from "@sanity/icons";

export const productType = defineType({
  name: "product",
  title: "Product",
  type: "document",
  icon: PackageIcon,
  fields: [
    defineField({
      name: "productId",
      title: "Product ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "review",
      title: "Review Stars",
      type: "number",
      validation: (Rule) => Rule.required().min(1).max(5),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "discountPercent",
      title: "Discount Percent",
      type: "number",
      validation: (Rule) => Rule.min(0).max(100),
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
    defineField({
      name: "colors",
      title: "Colors",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Blue", value: "blue" },
          { title: "Red", value: "red" },
          { title: "Black", value: "black" },
          { title: "White", value: "white" },
          { title: "Yellow", value: "yellow" },
          { title: "Green", value: "green" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sizes",
      title: "Sizes",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "S", value: "s" },
          { title: "M", value: "m" },
          { title: "L", value: "l" },
          { title: "XL", value: "xl" },
          { title: "XXL", value: "xxl" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      price: "price",
      media: "image",
    },
    prepare(select) {
      return {
        title: select.title,
        price: `$${select.price}`,
        media: select.media,
      };
    },
  },
});
