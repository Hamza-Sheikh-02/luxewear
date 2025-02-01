import { defineType, defineField, defineArrayMember } from "sanity";
import { TrolleyIcon } from "@sanity/icons";

export const orderType = defineType({
  name: "order",
  title: "Order",
  type: "document",
  icon: TrolleyIcon,
  fields: [
    defineField({
      name: "orderNumber",
      title: "Order Number",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "stripeCheckoutSessionId",
      title: "Stripe Checkout Session ID",
      type: "string",
    }),

    defineField({
      name: "stripeCustomerId",
      title: "Stripe Customer ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "clerkUserId",
      title: "Clerk User ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "cutomerName",
      title: "Customer Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "customerEmail",
      title: "Customer Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),

    defineField({
      name: "stripePaymentIntentId",
      title: "Stripe Payment Intent ID",
      type: "string",
    }),

    defineField({
      name: "products",
      title: "Products",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "product",
              title: "productBought",
              type: "reference",
              to: [{ type: "product" }],
            }),

            defineField({
              name: "quantity",
              title: "Quantity",
              type: "number",
            }),
          ],
          preview: {
            select: {
              title: "product.name",
              quantity: "quantity",
              image: "product.image",
              price: "product.price",
              currency: "product.currency",
            },
            prepare(select) {
              return {
                title: `${select.title} x ${select.price}`,
                subtitle: `${select.price * select.quantity}`,
                media: select.image,
              };
            },
          },
        }),
      ],
    }),

    defineField({
      name: "total",
      title: "Total",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "currency",
      title: "Currency",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "discountAmount",
      title: "Discount Amount",
      type: "number",
    }),

    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Paid", value: "paid" },
          { title: "Shipped", value: "shipped" },
          { title: "Delivered", value: "delivered" },
          { title: "Canceled", value: "canceled" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "orderDate",
      title: "Order Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      name: "customerName",
      amount: "total",
      currency: "currency",
      orderId: "orderNumber",
      email: "customerEmail",
    },
    prepare(select) {
      const orderIdSnippet = select.orderId
        ? `${select.orderId.slice(0, 5)}...${select.orderId.slice(-5)}`
        : "N/A";
      return {
        title: `${select.name || "Unknown"} (${orderIdSnippet})`,
        subtitle: `${select.amount || 0} ${select.currency || "USD"}, ${select.email || "N/A"}`,
        media: TrolleyIcon,
      };
    },
  },
});
