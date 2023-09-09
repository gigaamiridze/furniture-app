import { StyleSheet } from 'react-native';
import { Sizes } from '../../constants';

export const style = StyleSheet.create({
  upperRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 35,
    width: Sizes.WIDTH - 44,
    marginHorizontal: 22,
  },
});
