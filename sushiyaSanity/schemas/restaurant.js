export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Restaurant name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short description',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'about_us',
      type: 'string',
      title: 'About Us',
      // validation: (Rule) => Rule.max(200),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of the Restaurant',
    },
    {
      name: 'lat',
      type: 'number',
      title: 'Latitude of the Restaurant',
    },
    {
      name: 'long',
      type: 'number',
      title: 'Longitude of the Restaurant',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Restaurant address',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Enter a Rating from (1-5 Stars)',
      validation: (Rule) => Rule.required().min(1).max(5).integer(),
    },
    {
      name: 'type',
      title: 'Category',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{ type: 'restaurantCategory' }],
    },
    {
      name: 'associatedMenuItemCategories',
      type: 'array',
      title: 'Menu Section',
      of: [{ type: 'reference', to: [{ type: 'menuItemSection' }] }],
    },
    {
      title: 'Opening Hours',
      name: 'openingHours',
      type: 'array',
      of: [{ type: 'dayAndTime' }],
    },
  ],
};
