import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../utils';
import { Colors, Sizes } from '../../constants';

export const style = StyleSheet.create({
  title: {
    fontFamily: getFontFamily('Poppins', 'bold'),
    color: Colors.PRIMARY,
    letterSpacing: 0.5,
  },
  title1: {
    fontSize: Sizes.XX_LARGE - 5,
    lineHeight: 48,
  },
  title2: {
    fontFamily: getFontFamily('Poppins', 'semiBold'),
    fontSize: Sizes.X_LARGE - 2,
    lineHeight: 28,
  },
  title3: {
    fontSize: Sizes.LARGE,
    lineHeight: 22,
  },
});
