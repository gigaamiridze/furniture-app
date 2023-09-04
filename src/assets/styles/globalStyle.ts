import { StyleSheet } from 'react-native';
import { Sizes } from '../../constants';

export const globalStyle = StyleSheet.create({
  flex: {
    flex: 1,
  },
  paddingHorizontal: {
    paddingHorizontal: 22,
  },
  screenContainer: {
    flex: 1,
    paddingHorizontal: 22,
    paddingTop: Sizes.SMALL,
  },
});
