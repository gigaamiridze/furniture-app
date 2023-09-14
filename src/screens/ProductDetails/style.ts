import { StyleSheet, ViewStyle } from 'react-native';
import { AlignItemsType } from '../../interfaces';
import { Sizes, Colors } from '../../constants';

export const flexWrapper = (alignItems: AlignItemsType, columnGap: number): ViewStyle => ({
  flexDirection: 'row',
  alignItems,
  columnGap,
});

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
  ratingContainer: {
    marginTop: Sizes.SMALL,
    marginBottom: Sizes.X_LARGE,
  },
  priceWrapper: {
    backgroundColor: Colors.SECONDARY,
    borderRadius: Sizes.LARGE,
    paddingHorizontal: Sizes.X_SMALL,
    paddingTop: Sizes.X_SMALL,
    paddingBottom: 4,
  },
  descTextWrapper: {
    marginTop: 3,
  },
  locationContainer: {
    backgroundColor: Colors.SECONDARY,
    borderRadius: Sizes.LARGE,
    marginTop: Sizes.MEDIUM,
    marginBottom: Sizes.LARGE,
    paddingHorizontal: Sizes.X_SMALL,
    paddingVertical: 5,
  },
  buyBtn: {
    width: Sizes.WIDTH * 0.7,
    backgroundColor: Colors.BLACK,
    borderRadius: Sizes.LARGE,
    paddingLeft: Sizes.SMALL,
    paddingTop: 8,
    paddingBottom: 6,
    marginBottom: Sizes.XX_LARGE,
  },
  addBtn: {
    width: 35,
    height: 35,
    borderRadius: 50,
    backgroundColor: Colors.BLACK,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
