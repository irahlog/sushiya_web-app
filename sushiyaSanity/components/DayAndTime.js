// 1. Import the TimeInput react component
import TimeInput from './TimeInput';

// 2. List of days the editor may choose from
const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

// 3. Validate function which is invoked on user input
const verifyInput = (dayAndTime) => {
  const { closed, day, opensAt, closesAt } = dayAndTime;
  if (!day) {
    return 'Please select a day';
  }
  if (!closed && !opensAt) {
    return 'Choose when the store opens';
  }
  if (!closed && !closesAt) {
    return 'Choose when the store closes';
  }
  return true;
};

export default {
  name: 'dayAndTime',
  title: 'Day and Time',
  type: 'object',

  // 4. Perform validation
  validation: (Rule) => Rule.custom(verifyInput),

  fields: [
    {
      // 5. Enable editors to input a string from a predefined list (days)
      name: 'day',
      title: 'Day',
      type: 'string',
      description: 'Select day of week',
      options: {
        list: days,
        layout: 'radio',
      },
    },
    {
      name: 'closed',
      initialValue: false,
      type: 'boolean',
      description: 'If the restaurant is CLOSED, then toggle the switch.',
    },
    {
      // 6. Enable editors to input a point in time using a custom input component
      name: 'opensAt',
      title: 'Opens at',
      type: 'string',
      description: 'Choose when the store opens',
      inputComponent: TimeInput,
      hidden: ({ parent }) => parent?.closed,
    },
    {
      // 7. Same time input as above, but assigned to a different field
      name: 'closesAt',
      title: 'Closes at',
      type: 'string',
      description: 'Choose when the store closes',
      inputComponent: TimeInput,
      hidden: ({ parent }) => parent?.closed,
    },
  ],

  // 8. Define how the dayAndTime object will render in the Studio
  preview: {
    select: {
      closed: 'closed',
      day: 'day',
      opensAt: 'opensAt',
      closesAt: 'closesAt',
    },
    prepare({ closed, day, opensAt, closesAt }) {
      return {
        title: day,
        subtitle: !closed ? `${opensAt} - ${closesAt}` : `closed`,
      };
    },
  },
};
