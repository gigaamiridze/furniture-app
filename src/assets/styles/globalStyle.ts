import { StyleSheet } from 'react-native';
import { Sizes } from '../../constants';

export const globalStyle = StyleSheet.create({
  flex: {
    flex: 1,
  },
  paddingHorizontal22: {
    paddingHorizontal: 22,
  },
  paddingHorizontal12: {
    paddingHorizontal: Sizes.SMALL,
  },
  screenContainer: {
    flex: 1,
    paddingHorizontal: 22,
  },
});
