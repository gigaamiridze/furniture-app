import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors, Routes } from '../../../constants';
import { Header } from '../../../components';
import { style } from './style';

function ProductCardView() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      style={style.cardContainer}
      onPress={() => navigation.navigate(Routes.PRODUCT_DETAILS)}
    >
      <Image 
        style={style.image}
        source={require('../../../assets/images/fn4.jpg')} 
      />
      <View style={style.detailsContainer}>
        <Header 
          title="Kid's Bunk Bed"
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
