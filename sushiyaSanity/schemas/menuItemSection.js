export default {
  name: 'menuItemSection',
  title: 'Menu Item Section',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Section name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'section_description',
      description: 'optional',
      type: 'string',
      title: 'Section description',
      validation: (Rule) => Rule.max(500),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of Section',
    },
    {
      name: 'associatedMenuItems',
      type: 'array',
      title: 'Associated Menu Items',
      of: [{ type: 'reference', to: [{ type: 'menuItems' }] }],
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
  ],
};
