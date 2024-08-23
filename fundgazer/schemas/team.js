import { defineField, defineType } from 'sanity';

export const team = defineType({
  name: 'team',
  type: 'document',
  title: 'Team',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
    defineField({
      name: 'position',
      type: 'string',
      title: 'Position',
    }),
    defineField({
      title: 'Feature Image',
      name: 'featureImage',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
    }),
  ],
});
