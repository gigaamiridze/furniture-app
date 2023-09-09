import { StyleSheet } from 'react-native';
import { Sizes } from '../../constants';

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
});
