import { StyleSheet } from 'react-native';
import { Sizes, Colors } from '../../../constants';

export const style = StyleSheet.create({
  cardContainer: {
    width: 170,
    height: 240,
    padding: Sizes.SMALL / 2,
    borderRadius: Sizes.MEDIUM,
    backgroundColor: Colors.SECONDARY,
  },
  image: {
    width: '100%',
    height: 130,
    resizeMode: 'cover',
    borderRadius: Sizes.SMALL,
  },
  detailsContainer: {
    paddingVertical: Sizes.MEDIUM,
    paddingHorizontal: Sizes.SMALL / 2,
  },
});
