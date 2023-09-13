import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../utils';
import { Colors, Sizes } from '../../constants';

export const style = StyleSheet.create({
  title: {
    fontFamily: getFontFamily('Poppins', 'bold'),
    color: Colors.BLACK,
    letterSpacing: 0.5,
  },
  title1: {
    fontSize: Sizes.XX_LARGE - 5,
    lineHeight: 48,
  },
  title2: {
    fontSize: Sizes.X_LARGE - 2,
    lineHeight: 28,
  },
  title3: {
    fontSize: Sizes.LARGE,
    lineHeight: 22,
  },
  title4: {
    fontSize: Sizes.MEDIUM,
    lineHeight: 18,
  },
  title5: {
    fontFamily: getFontFamily('Poppins', 'normal'),
    fontSize: Sizes.SMALL + 2,
    lineHeight: 18,
  },
  title6: {
    fontFamily: getFontFamily('Poppins', 'normal'),
    fontSize: Sizes.SMALL,
    lineHeight: 16,
  },
});
