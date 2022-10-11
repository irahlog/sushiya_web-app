export default {
  name: 'menuItems',
  title: 'Menu Items',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of Menu Item',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      validation: (Rule) => Rule.max(500),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price of the dish in USD',
      validation: (Rule) => Rule.precision(2).positive().required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of the Dish',
    },
    {
      name: 'associatedModifiers',
      type: 'array',
      title: 'Associated Modifiers',
      of: [{ type: 'reference', to: [{ type: 'menuItemModifiers' }] }],
    },
    {
      name: 'availability',
      title: 'Availability',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'Currently Available', value: 'currently-available' },
          { title: 'Not Available', value: 'not-available' },
        ],
        layout: 'radio',
      },
    },
    {
      name: 'featuredItem',
      initialValue: false,
      type: 'boolean',
      description:
        'If selected, this menu item will be listed in the featured row',
    },
  ],
  options: {
    hotspot: true,
  },
};
