//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const resistorColor = {
  "black": 0,
  "brown": 1,
  "red": 2,
  "orange": 3,
  "yellow": 4,
  "green": 5,
  "blue": 6,
  "violet": 7,
  "gray": 8,
  "white": 9
};

export const colorCode = (color) => {
  return resistorColor[color];
};

export const COLORS = Object.keys(resistorColor);