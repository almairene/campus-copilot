export const campusLocations = [
  { name: 'Main Block', distance: '120 m', time: '2 min', block: 'A', x: 18, y: 28 },
  { name: 'Library', distance: '260 m', time: '4 min', block: 'A', x: 25, y: 20 },
  { name: 'Canteen', distance: '340 m', time: '5 min', block: 'B', x: 44, y: 38 },
  { name: 'Seminar Hall', distance: '480 m', time: '6 min', block: 'B', x: 68, y: 22 },
  { name: 'Computer Lab', distance: '210 m', time: '3 min', block: 'C', x: 32, y: 62 },
  { name: 'Instrumentation Lab', distance: '420 m', time: '5 min', block: 'C', x: 58, y: 64 },
  { name: 'Medical Centre', distance: '610 m', time: '8 min', block: 'D', x: 80, y: 24 },
  { name: 'Printing Shop', distance: '180 m', time: '3 min', block: 'A', x: 20, y: 46 },
  { name: 'Parking', distance: '560 m', time: '7 min', block: 'E', x: 74, y: 76 },
  { name: 'Hostel', distance: '880 m', time: '11 min', block: 'F', x: 88, y: 58 },
];

export const spotlightRoute = {
  start: 'You',
  mid: 'Block C',
  end: 'Instrumentation Lab',
  distance: '420 m',
  time: '5 min',
};

export const facilityMeta = {
  'Instrumentation Lab': {
    floor: '2nd Floor',
    amenities: ['Wi-Fi', 'Projector', 'Lab station'],
    directions: [
      'Walk straight from the central plaza',
      'Turn right near Block C',
      'Go up to the 2nd floor',
      'Enter the lab at the end of the corridor'
    ],
    nearby: ['Restroom', 'Staff room', 'Classrooms'],
  },
  Library: {
    floor: 'Ground Floor',
    amenities: ['Study tables', 'Wi-Fi', 'Printing'],
    directions: [
      'Walk straight past the main gate',
      'Take the first corridor on your left',
      'The library is on the ground floor'
    ],
    nearby: ['Restroom', 'Reading lounge', 'Help desk'],
  },
  Canteen: {
    floor: 'Ground Floor',
    amenities: ['Food counters', 'Water station', 'Seating'],
    directions: [
      'Walk toward Block B',
      'Follow the signs to the food court',
      'Enter through the main canteen entrance'
    ],
    nearby: ['Restroom', 'Wash area', 'Recycle bin'],
  },
  default: {
    floor: 'Ground Floor',
    amenities: ['Wi-Fi', 'Restroom', 'Staff desk'],
    directions: [
      'Walk toward the campus center',
      'Follow the marked corridor signs',
      'Your destination is near the main walkway'
    ],
    nearby: ['Restroom', 'Classrooms', 'Staff office'],
  },
};
