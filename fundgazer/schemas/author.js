export default {
  name: 'author',
  type: 'document',
  title: 'Author',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'linkedinurl',
      type: 'string',
      title: 'Linkedin Url',
    },
    {
      title: 'Author Profile',
      name: 'authorprofile',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
  ],
};
