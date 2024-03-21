export const COLOR = {
  RED: {
    hex: '#FF0000',
    name: 'red',
    symbol: 'R',
  },
  ORANGE: {
    hex: '#FFA500',
    name: 'orange',
    symbol: 'O',
  },
  YELLOW: {
    hex: '#FFFF00',
    name: 'yellow',
    symbol: 'Y',
  },
  GREEN: {
    hex: '#008000',
    name: 'green',
    symbol: 'G',
  },
  BLUE: {
    hex: '#0000FF',
    name: 'blue',
    symbol: 'B',
  },
  INDIGO: {
    hex: '#4B0082',
    name: 'indigo',
    symbol: 'I',
  },
  VIOLET: {
    hex: '#EE82EE',
    name: 'violet',
    symbol: 'V',
  },
};

export const COLORS = Object.values(COLOR);

export const EMPTY_RESULTS = Array(8).fill({
  correctColor: 0,
  correctPosition: 0,
});
