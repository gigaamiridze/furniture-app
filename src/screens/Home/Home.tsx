import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { Header, SearchInput, Carousel } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { Sizes, Colors, Routes } from '../../constants';
import { globalStyle } from '../../assets';
import { style } from './style';

function Home() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={globalStyle.flex}>
      <View style={[style.headerWrapper, globalStyle.paddingHorizontal22]}>
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
        <View style={globalStyle.paddingHorizontal22}>
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
        </View>
        <View style={globalStyle.paddingHorizontal12}>
          <View style={style.searchWrapper}>
            <SearchInput 
              placeholder='What are you looking for?'
              firstIcon='search-outline'
              secondIcon='camera-outline'
              onPress={() => navigation.navigate(Routes.SEARCH)}
            />
          </View>
          <Carousel />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home;
