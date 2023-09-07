import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../utils';
import { Sizes, Colors } from '../../constants';

export const style = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Sizes.SMALL,
    paddingBottom: Sizes.MEDIUM,
  },
  location: {
    fontFamily: getFontFamily('Poppins', 'semiBold'),
    fontSize: Sizes.MEDIUM,
    color: Colors.GRAY,
  },
  cartCount: {
    position: 'absolute',
    right: 0,
    bottom: Sizes.MEDIUM,
    width: Sizes.MEDIUM,
    height: Sizes.MEDIUM,
    borderRadius: 8,
    backgroundColor: Colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 99,
  },
  cartNumber: {
    fontFamily: getFontFamily('Poppins', 'semiBold'),
    fontSize: Sizes.X_SMALL,
    color: Colors.LIGHT_WHITE,
  },
  firstWelcomeText: {
    marginBottom: 5,
  },
  searchWrapper: {
    marginTop: Sizes.MEDIUM,
    marginBottom: 30,
  },
});
