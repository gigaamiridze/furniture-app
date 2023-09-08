import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { style } from './style';

function ProductCardView() {
  return (
    <TouchableOpacity>
      <View style={style.cardContainer}>
        <Image 
          style={style.image}
          source={require('../../../assets/images/fn4.jpg')} 
        />
      </View>
    </TouchableOpacity>
  )
}

export default ProductCardView;
