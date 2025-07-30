export const COLOR = {
  VIBRANT: {
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
  },
  PASTEL: {
    RED: {
      hex: '#FFADAD',
      name: 'red',
      symbol: 'R',
    },
    ORANGE: {
      hex: '#FFD6A5',
      name: 'orange',
      symbol: 'O',
    },

    YELLOW: {
      hex: '#FDFFB6',
      name: 'yellow',
      symbol: 'Y',
    },
    GREEN: {
      hex: '#CAFFBF',
      name: 'green',
      symbol: 'G',
    },
    BLUE: {
      hex: '#9BF6FF',
      name: 'blue',
      symbol: 'B',
    },
    INDIGO: {
      hex: '#BDB2FF',
      name: 'indigo',
      symbol: 'I',
    },
    VIOLET: {
      hex: '#FFC6FF',
      name: 'violet',
      symbol: 'V',
    },
  },
};

export const COLORS_VIBRANT = Object.values(COLOR.VIBRANT);
export const COLORS_PASTEL = Object.values(COLOR.PASTEL);

export const EMPTY_RESULT_COLOR = '#202124';
export const EMPTY_RESULT_OUTLINE_COLOR = '#3A3A3C';

export const getColorMode = () => {
  const colorMode = localStorage.getItem('colorMode');

  switch (colorMode) {
    case 'pastel':
      return COLORS_PASTEL;
    default:
      return COLORS_VIBRANT;
  }
};

export const convertColorToCurrentMode = color => {
  if (!color || !color.name) {
    return color;
  }

  const currentColors = getColorMode();
  return currentColors.find(c => c.name === color.name) || color;
};

export const convertColorsToCurrentMode = colors => {
  if (!Array.isArray(colors)) {
    return colors;
  }

  return colors.map(convertColorToCurrentMode);
};
