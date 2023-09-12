import { StyleSheet } from 'react-native';
import { Sizes, Colors } from '../../constants';

export const style = StyleSheet.create({
  upperRow: {
    width: Sizes.WIDTH - 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 35,
    zIndex: 99,
    marginHorizontal: 22,
  },
  image: {
    width: Sizes.WIDTH,
    height: 400,
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: Colors.LIGHT_WHITE,
    borderTopRightRadius: Sizes.MEDIUM,
    borderTopLeftRadius: Sizes.MEDIUM,
    paddingVertical: Sizes.LARGE,
    paddingHorizontal: 22,
    marginTop: -Sizes.LARGE,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    columnGap: 7,
  },
  priceWrapper: {
    backgroundColor: Colors.SECONDARY,
    borderRadius: Sizes.LARGE,
    paddingHorizontal: Sizes.X_SMALL,
    paddingTop: Sizes.X_SMALL,
    paddingBottom: 4,
  },
});
