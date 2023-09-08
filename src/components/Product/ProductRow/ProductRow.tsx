import React from 'react';
import { FlatList } from 'react-native';
import { style } from './style';
import ProductCardView from '../ProductCardView/ProductCardView';

function ProductRow() {
  const products = [1, 2, 3, 4, 5];

  return (
    <FlatList 
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={style.productsList}
      data={products}
      keyExtractor={item => item.toString()}
      renderItem={({ item }) => <ProductCardView />}
    />
  )
}

export default ProductRow;
