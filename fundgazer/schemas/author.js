import { defineField, defineType } from 'sanity';

export const author = defineType({
  name: 'author',
  type: 'document',
  title: 'Author',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
    defineField({
      name: 'linkedinurl',
      type: 'string',
      title: 'Linkedin Url',
    }),
    defineField({
      title: 'Author Profile',
      name: 'authorprofile',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
    }),
  ],
});
