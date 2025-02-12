export const PROPS_TABLE_HEADER_CONST = ['Prop', 'Type', 'Default', 'Description'];

export const PROPS_CONST = [
  {
    name: 'onSelectedChange',
    type: 'Function',
    default: '(dateString) => null',
    description: 'Gets called when selected value changes',
  },
  {
    name: 'onMonthYearChange',
    type: 'Function',
    default: '(dateString) => null',
    description: 'Gets called when month changes',
  },
  {
    name: 'onTimeChange',
    type: 'Function',
    default: '(dateString) => null',
    description: 'Gets called when time changes',
  },
  {
    name: 'onDateChange',
    type: 'Function',
    default: '(dateString) => null',
    description: 'Gets called when date changes',
  },
  {
    name: 'current',
    type: 'String',
    default: `Date()`,
    description: 'Initially visible month',
  },
  {
    name: 'selected',
    type: 'String',
    default: `""`,
    description: 'The primary value of the date picker',
  },
  {
    name: 'minimumDate',
    type: 'String',
    default: `""`,
    description: 'Specifies the minimum selectable day by user',
  },
  {
    name: 'maximumDate',
    type: 'String',
    default: `""`,
    description: 'Specifies the maximum selectable day by user',
  },
  {
    name: 'selectorStartingYear',
    type: 'Number',
    default: 0,
    description: 'The minimum selectable year when user opens the year selector',
  },
  {
    name: 'selectorEndingYear',
    type: 'Number',
    default: 3000,
    description: 'The maxium selectable year when user opens the year selector',
  },
  {
    name: 'disableDateChange',
    type: 'Boolean',
    default: 'false',
    description: 'Disable month & year from being changed',
  },
  {
    name: 'isGregorian',
    type: 'Boolean',
    default: 'true',
    description: "Switches between 'Gregorian' & 'Jalaali' mode",
  },
  {
    name: 'options',
    type: 'Object',
    default: `{}`,
    description: `Customizing date picker style.  backgroundColor,
    textHeaderColor,
    textDefaultColor,
    selectedTextColor,
    mainColor,
    textSecondaryColor,
    borderColor,
    defaultFont,
    headerFont,
    textFontSize,
    textHeaderFontSize,
    headerAnimationDistance,
    daysAnimationDistance`,
  },
  {
    name: 'mode',
    type: 'String',
    default: `"datepicker"`,
    description: "One of ['datepicker', 'calendar', 'monthYear', 'time']",
  },
  {
    name: 'minuteInterval',
    type: 'Number',
    default: '5',
    description: 'One of [1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60]',
  },
  {
    name: 'style',
    type: 'Object',
    default: '{}',
    description: 'Changes date picker container style.',
  },
  {
    name:'disabledDays',
    type:'Array',
    default:'[]',
    description:'Array of disabled dates'
  }
];
