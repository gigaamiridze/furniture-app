import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { Header } from '../../../components';
import { Colors } from '../../../constants';
import { style } from './style';

function ProductCardView() {
  return (
    <TouchableOpacity>
      <View style={style.cardContainer}>
        <Image 
          style={style.image}
          source={require('../../../assets/images/fn4.jpg')} 
        />
        <View style={style.detailsContainer}>
          <Header 
            title="Kid's Bunk Bed"
            color={Colors.BLACK}
            numberOfLines={1}
            type={3}
          />
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ProductCardView;
