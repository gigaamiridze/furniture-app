import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../utils';
import { Colors, Sizes } from '../../constants';

export const style = StyleSheet.create({
  searchContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.SECONDARY,
    borderRadius: Sizes.MEDIUM,
  },
  firstIcon: {
    color: Colors.GRAY,
    paddingLeft: Sizes.X_SMALL,
  },
  searchInput: {
    flex: 1,
    fontFamily: getFontFamily('Poppins', 'normal'),
    fontSize: 14,
    letterSpacing: 0.5,
    color: Colors.GRAY,
    paddingTop: Sizes.MEDIUM,
    marginHorizontal: Sizes.MEDIUM,
  },
  searchBtn: {
    width: 50,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Sizes.MEDIUM,
    backgroundColor: Colors.PRIMARY,
  },
});
