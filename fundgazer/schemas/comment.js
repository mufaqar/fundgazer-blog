import { defineField, defineType } from 'sanity';

export const comment = defineType({
  name: 'comment',
  type: 'document',
  title: 'Comment',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
    defineField({
      name: 'approved',
      type: 'boolean',
      title: 'Approved',
    }),
    defineField({
      name: 'email',
      type: 'string',
      title: 'Email',
    }),
    defineField({
      name: 'comment',
      type: 'string',
      title: 'Comment',
    }),
    defineField({
      name: 'blog',
      type: 'reference',
      to: [{ type: 'blog' }],
    }),
  ],
});
