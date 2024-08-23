import { defineField, defineType } from 'sanity';

export const tags = defineType({
  name: 'tags',
  type: 'document',
  title: 'Tags',
  fields: [
    defineField({
      name: 'tag',
      type: 'string',
      title: 'Tag',
    }),
  ],
});
