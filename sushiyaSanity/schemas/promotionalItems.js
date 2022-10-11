export default {
  name: 'promotionalItems',
  title: 'Promotional Items',
  type: 'document',
  fields: [
    {
      name: 'description',
      type: 'string',
      title: 'Description of the Promotional Item',
      validation: (Rule) => Rule.max(500).required(),
    },
    {
      name: 'couponCode',
      type: 'string',
      title: 'Coupon Code',
    },
    {
      name: 'availability',
      title: 'Availability',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'Currently Available', value: 'currently-available' },
          { title: 'Expired', value: 'expired' },
        ],
        layout: 'radio',
      },
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of the Promotional Event',
    },
  ],
  options: {
    hotspot: true,
  },
};
