import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BackButton } from '../../components';
import { globalStyle } from '../../assets';
import { Colors } from '../../constants';
import { style } from './style';

function ProductDetails() {
  const navigation = useNavigation();

  return (
    <View style={globalStyle.screenContainer}>
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
    </View>
  )
}

export default ProductDetails;
