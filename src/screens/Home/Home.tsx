import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import { Sizes, Colors } from '../../constants';
import { globalStyle } from '../../assets';
import { style } from './style';

function Home() {
  return (
    <SafeAreaView style={globalStyle.screenContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.headerWrapper}>
          <Ionicons 
            name='location-outline' 
            size={Sizes.X_LARGE}
            color={Colors.BLACK}
          />
          <Text style={style.location}>Tbilisi</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home;
