import { defineType, defineField } from "sanity";

export default defineType({
  name: "shop",
  title: "shop",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "title",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "price",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
