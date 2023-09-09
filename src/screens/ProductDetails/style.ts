import { StyleSheet } from 'react-native';
import { Sizes } from '../../constants';

export const style = StyleSheet.create({
  upperRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    top: Sizes.XX_LARGE,
    width: Sizes.WIDTH - 44,
    marginHorizontal: 22,
  },
});
