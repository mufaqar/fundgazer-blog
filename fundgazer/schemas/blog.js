import { defineField, defineType } from 'sanity';

export const blog = defineType({
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    }),
    defineField({
      name: 'metatitle',
      type: 'string',
      title: 'Meta Title',
    }),
    defineField({
      name: 'metadescription',
      type: 'text',
      title: 'Meta Description',
    }),
    defineField({
      title: 'Meta Tags',
      name: 'metatags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      title: 'Feature Image',
      name: 'featureImage',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        defineField({
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
        }),
        defineField({
          // Editing this field will be hidden behind an "Edit"-button
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        }),
      ],
    }),
    defineField({
      title: 'Excerpt',
      name: 'excerpt',
      type: 'text',
    }),
    defineField({
      title: 'Release date',
      name: 'releaseDate',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today',
      },
    }),
    defineField({
      name: 'author',
      type: 'object',
      fields: [
        defineField({
          title: 'Author',
          name: 'author',
          type: 'reference',
          to: [{ type: 'author' }],
        }),
      ],
    }),
    defineField({
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tags' }],
        },
      ],
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        defineField({
          type: 'image',
          fields: [
            defineField({
              type: 'text',
              name: 'alt',
              title: 'Alternative text',
              description: `Some of your visitors cannot see images, 
                be they blind, color-blind, low-sighted; 
                alternative text is of great help for those 
                people that can rely on it to have a good idea of 
                what\'s on your page.`,
              options: {
                isHighlighted: true,
              },
            }),
          ],
        }),
      ],
    }),
  ],
});
