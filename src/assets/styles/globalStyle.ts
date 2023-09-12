import { StyleSheet } from 'react-native';
import { Sizes, Colors } from '../../constants';

export const globalStyle = StyleSheet.create({
  flex: {
    flex: 1,
  },
  backgroundGray: {
    backgroundColor: Colors.GRAY_BG,
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
    backgroundColor: Colors.GRAY_BG,
  },
});
