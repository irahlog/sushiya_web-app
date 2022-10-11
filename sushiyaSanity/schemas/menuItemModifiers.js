export default {
  name: 'menuItemModifiers',
  title: 'Menu Item Modifiers',
  type: 'document',
  fields: [
    {
      name: 'modifier_name',
      type: 'string',
      title: 'Modifier Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'internal_modifier_name',
      type: 'string',
      title: 'Internal name',
      description: 'reference for the restaurant',
    },
    {
      name: 'required',
      initialValue: false,
      type: 'boolean',
      description:
        'If customer is REQUIRED to choose a choice, toggle the switch. If there are multiple sizes, then set the default value of menu item to be the base price, and edit the modifer price.',
    },
    {
      name: 'Force_Minimum',
      description:
        'This forces your customer to select a certain minimum number of choices. E.g: If you set this to 2 then your customer must select at least 2 items.',
      type: 'number',
      hidden: ({ parent }) => !parent?.required,
    },
    {
      name: 'Force_Maximum',
      description:
        'The maximum number of choices your customer can add. If you refer not to set limitation, you can set it to 0. E.g: If you set this to 4, then your customer can NOT select more than 4 choices.',
      type: 'number',
      hidden: ({ parent }) => !parent?.required,
    },
    {
      name: 'itemList',
      title: 'Add Choices',
      type: 'array',
      of: [{ type: 'modifierAddition' }],
    },
  ],
};
