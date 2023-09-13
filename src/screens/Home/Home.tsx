import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { Header, SearchInput, Carousel, ProductRow } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { Sizes, Colors, Routes } from '../../constants';
import { globalStyle } from '../../assets';
import { style } from './style';

function Home() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.backgroundGray]}>
      <StatusBar 
        translucent={false}
        backgroundColor={Colors.GRAY_BG}
        barStyle='dark-content'
      />
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
              type={1}
            />
          </View>
          <Header 
            title='Luxurious Furniture' 
            color={Colors.PRIMARY}
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
          <View style={style.headingContainer}>
            <Header 
              title='New Rivals' 
              fontWeight='semiBold'
              type={2} 
            />
            <Ionicons 
              name='grid'
              size={Sizes.X_LARGE}
              color={Colors.PRIMARY}
            />
          </View>
          <ProductRow />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home;
