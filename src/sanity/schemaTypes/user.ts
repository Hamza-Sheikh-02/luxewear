import { defineType, defineField } from "sanity";

const user = defineType({
  name: "user",
  title: "User",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "reviews",
      title: "Reviews",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "product",
              title: "Product",
              type: "reference",
              to: [{ type: "product" }],
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "rating",
              title: "Rating",
              type: "number",
              validation: (Rule) => Rule.required().min(1).max(5),
            }),
            defineField({
              name: "comment",
              title: "Comment",
              type: "text",
            }),
            defineField({
              name: "reviewDate",
              title: "Review Date",
              type: "datetime",
              initialValue: () => new Date().toISOString(),
            }),
          ],
        },
      ],
    }),
  ],
});

export default user;
