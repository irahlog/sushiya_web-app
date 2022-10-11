export default {
  name: 'modifierAddition',
  title: 'Modifier Addition',
  type: 'object',
  fields: [
    {
      name: 'item_name',
      title: 'Item Name',
      type: 'string',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      validation: (Rule) => Rule.max(500),
    },
    {
      name: 'item_price',
      title: 'Item Price',
      type: 'number',
      validation: (Rule) => Rule.precision(2).positive().required(),
    },
  ],
};
