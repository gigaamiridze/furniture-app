import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../utils';
import { Sizes, Colors } from '../../constants';

export const style = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  location: {
    fontFamily: getFontFamily('Poppins', 'semiBold'),
    fontSize: Sizes.MEDIUM,
    color: Colors.GRAY,
  },
});
