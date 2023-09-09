import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity, View, Image } from 'react-native';
import { Header } from '../../../components';
import { Colors } from '../../../constants';
import { style } from './style';

function ProductCardView() {
  return (
    <TouchableOpacity style={style.cardContainer}>
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
        <View style={style.flexBlock}>
          <View style={style.flexWrapper}>
            <Header 
              title='Playful Interiors'
              color={Colors.GRAY}
              numberOfLines={1}
              type={6}
            />
            <Header 
              title='$799.99'
              color={Colors.BLACK}
              type={4}
            />
          </View>
          <TouchableOpacity>
            <Ionicons 
              name='add-circle'
              size={35}
              color={Colors.PRIMARY}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ProductCardView;
