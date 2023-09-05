import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { Sizes, Colors } from '../../constants';
import { globalStyle } from '../../assets';
import { Header } from '../../components';
import { style } from './style';

function Home() {
  return (
    <SafeAreaView style={globalStyle.screenContainer}>
      <View style={style.headerWrapper}>
        <Ionicons 
          name='location-outline' 
          size={Sizes.X_LARGE}
          color={Colors.BLACK}
        />
        <Text style={style.location}>Tbilisi</Text>
        <View>
          <View style={style.cartCount}>
            <Text style={style.cartNumber}>7</Text>
          </View>
          <TouchableOpacity>
            <Ionicons 
              name='bag-handle'
              size={Sizes.X_LARGE}
              color={Colors.BLACK}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.firstWelcomeText}>
          <Header 
            title='Find The Most' 
            color={Colors.BLACK}
            type={1}
          />
        </View>
        <Header 
          title='Luxurious Furniture' 
          numberOfLines={1}
          type={1} 
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home;
