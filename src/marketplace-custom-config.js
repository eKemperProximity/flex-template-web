/*
 * Marketplace specific configuration.
 */

export const serviceLevel = [
  { key: 'basicParkingOnly', label: 'Basic, parking only' },
  { key: 'parkingAndSomeConnections', label: 'Parking and some connections' },
  { key: 'fullServiceCampSite', label: 'Full service campsite' }
];

export const allowedVehicleTypes = [ //TODO hook up the checkboxes
  { key: 'small', label: 'Small: Trucks/campervans' },
  { key: 'mid', label: 'Mid: Class B and C' },
  { key: 'large', label: 'Large: Class A/busses' },
  { key: 'semi', label: 'Semi and stock trailers' },
]

export const allowedCampingModes = [ //TODO hook up the checkboxes
  { key: 'in_vehicle_RV', label: 'In vehicle/RV' },
  { key: 'yard_tent', label: 'Yard/tent' }
]

export const amenities = [
  {
    key: 'wifi',
    label: 'WiFi',
  },
  {
    key: 'bathroom',
    label: 'Bathroom',
  },
  {
    key: 'electric',
    label: 'Electric',
  },
  {
    key: 'hot_tub',
    label: 'Hot Tub',
  },
  {
    key: 'water',
    label: 'Water',
  },
  {
    key: 'trash',
    label: 'Trash',
  },
  {
    key: 'wastewater_dump',
    label: 'Wastewater Dump',
  },
  {
    key: 'horse_or_stock_pen',
    label: 'Horse or stock pen',
  },
];

export const campRules = [
  { key: 'pets_allowed', label: 'Pets allowed?' },
  { key: 'stock_horses_allowed', label: 'Stock/horses allowed?' },
  { key: '24_7_quiet', label: '24/7 quiet' },
  { key: 'firearmes_allowed', label: 'Firearms allowed?' },
  { key: 'generators_allowed', label: 'Generators allowed?' },
  { key: 'campfires_allowed', label: 'Campfires allowed?' },
]


export const categories = [
  { key: 'smoke', label: 'Smoke' },
  { key: 'electric', label: 'Electric' }, //TODO
  { key: 'wood', label: 'Wood' },
  { key: 'other', label: 'Other' },
];

// Price filter configuration
// Note: unlike most prices this is not handled in subunits
export const priceFilterConfig = {
  min: 0,
  max: 1000,
  step: 5,
};

// Activate booking dates filter on search page
export const dateRangeFilterConfig = {
  active: true,
};
