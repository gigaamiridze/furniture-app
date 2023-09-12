import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

enum Colors {
  PRIMARY = '#2A4D50',
  SECONDARY = '#DDF0FF',
  TERTIARY = '#FF7754',

  GRAY = '#83829A',
  GRAY_BG = '#ECECEC',
  GRAY_SECOND = '#C1C0C8',

  LIGHT_WHITE = '#FAFAFC',
  OFF_WHITE = '#F3F4F8',
  WHITE = '#FFFFFF',
  BLACK = '#000000',
  RED = '#E81E4D',
  GREEN = '#00C135',
};

enum Sizes {
  X_SMALL = 10,
  SMALL = 12,
  MEDIUM = 16,
  LARGE = 20,
  X_LARGE = 24,
  XX_LARGE = 44,
  HEIGHT = height,
  WIDTH = width,
};

const Shadows = {
  SMALL: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  MEDIUM: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { Colors, Sizes, Shadows };
