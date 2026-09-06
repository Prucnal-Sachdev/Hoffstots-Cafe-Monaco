// Single source of truth. Every fact read off hoffstots.com on 2026-09-05.
// Nothing invented; open questions live in CONTENT-NEEDED.md.
//
// NOTE: the outreach research says "open since 1971". That year appears NOWHERE
// on their own site, so it is not used here and must not be used in the email.

export const site = {
  name: "Hoffstot's Cafe Monaco",
  shortName: "Hoffstot's",
  tagline: 'Restaurant and bar in Oakmont, Pennsylvania',
  url: 'https://hoffstots.com',
  phone: '(412) 828-8555',
  phoneHref: 'tel:+14128288555',
  phoneNote: 'ext. 1',
  email: 'contact@hoffstots.com',
  address: {
    street: '533 Allegheny Avenue',
    city: 'Oakmont',
    state: 'PA',
    zip: '15139',
  },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=533+Allegheny+Avenue+Oakmont+PA+15139',
  // Their existing online ordering runs on SpotOn. Left alone deliberately.
  orderUrl:
    'https://order.spoton.com/pit-hoffstots-cafe-monaco-2922/oakmont-pa/61ca434f24b4c45adf11b01b',
};

// Their homepage lists kitchen and bar hours separately. On the live site the two
// blocks are duplicated and interleaved with stale notices; here they are simply
// stated once.
export const kitchenHours = [
  { day: 'Monday to Thursday', open: '11:00 AM', close: '9:00 PM' },
  { day: 'Friday and Saturday', open: '11:00 AM', close: '10:00 PM' },
  { day: 'Sunday', open: '11:00 AM', close: '8:00 PM' },
];

export const barHours = [
  { day: 'Monday to Thursday', open: '11:00 AM', close: '12:00 AM' },
  { day: 'Friday and Saturday', open: '11:00 AM', close: '2:00 AM' },
  { day: 'Sunday', open: '11:00 AM', close: '12:00 AM' },
];

export const hoursSchema = [
  { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '11:00', closes: '21:00' },
  { days: ['Friday', 'Saturday'], opens: '11:00', closes: '22:00' },
  { days: ['Sunday'], opens: '11:00', closes: '20:00' },
];

// The seven menus their site links. Every one is currently a PDF download.
export const menus = [
  { name: 'Lunch', note: 'Served from 11am' },
  { name: 'Dinner', note: 'The main menu' },
  { name: 'Early bird dinner', note: 'Earlier seatings' },
  { name: 'Family style pre-order meals', note: 'Order ahead for a table of people' },
  { name: 'Sunday pasta drive-thru', note: 'Pull up and collect' },
  { name: 'Prime Rib Mondays', note: 'Mondays only' },
  { name: 'Dessert', note: 'Worth staying for' },
];

// Standing weekly traditions, all named on their homepage.
export const traditions = [
  {
    name: 'Spaghetti Sundays',
    detail: '$16, all day Sunday',
    body:
      'A plate of spaghetti and a Sunday afternoon, at a price that has not moved in a while.',
  },
  {
    name: 'Prime Rib Mondays',
    detail: 'Every Monday',
    body:
      'Prime rib is a weekend thing almost everywhere else. Here it is how the week starts.',
  },
  {
    name: 'The Sunday drive-thru',
    detail: 'Pasta, without leaving the car',
    body:
      'A sit-down restaurant with a drive-thru is an unusual thing to be. On Sundays it is pasta.',
  },
];
