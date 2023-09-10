import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, TouchableOpacity, StatusBar, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BackButton, Header } from '../../components';
import { globalStyle } from '../../assets';
import { Colors } from '../../constants';
import { style } from './style';

function ProductDetails() {
  const navigation = useNavigation();

  return (
    <View style={globalStyle.flex}>
      <StatusBar 
        translucent={true}
        backgroundColor='transparent'
        barStyle='dark-content'
      />
      <View style={style.upperRow}>
        <BackButton onPress={() => navigation.goBack()} />
        <TouchableOpacity>
          <Ionicons 
            name='heart'
            color={Colors.PRIMARY}
            size={30}
          />
        </TouchableOpacity>
      </View>
      <Image 
        source={require('../../assets/images/fn5.jpg')}
        style={style.image}
      />
      <View style={style.detailsContainer}>
        <View style={style.flexRow}>
          <Header 
            title='Leather Recliner'
            color={Colors.BLACK}
            type={3}
          />
        </View>
      </View>
    </View>
  )
}

export default ProductDetails;
