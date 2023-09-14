import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, ScrollView, TouchableOpacity, StatusBar, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BackButton, Header } from '../../components';
import { Rating } from 'react-native-ratings';
import { style, flexWrapper } from './style';
import { globalStyle } from '../../assets';
import { Colors } from '../../constants';

function ProductDetails() {
  const navigation = useNavigation();
  const [rating, setRating] = useState<number>(4.5);
  const [quantity, setQuantity] = useState<number>(1);

  const increment = () => setQuantity(prev => prev + 1);

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  }

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
      <ScrollView
        showsVerticalScrollIndicator={false} 
        style={style.detailsContainer}
      >
        <View style={style.flexRow}>
          <Header 
            title='Leather Recliner'
            type={3}
          />
          <View style={style.priceWrapper}>
            <Header 
              title='$799.99'
              fontWeight='semiBold'
              type={3}
            />
          </View>
        </View>
        <View style={[style.flexRow, style.ratingContainer]}>
          <View style={flexWrapper('flex-end', 7)}>
            <Rating 
              type='star'
              ratingColor='gold'
              ratingCount={5}
              imageSize={24}
              fractions={1}
              jumpValue={0.1}
              startingValue={rating}
              onSwipeRating={(rating: number) => setRating(rating)}
            />
            <Header 
              title={`(${rating})`}
              color={Colors.GRAY}
              fontWeight='medium'
              type={4}
            />
          </View>
          <View style={flexWrapper('flex-end', 7)}>
            <TouchableOpacity onPress={() => increment()}>
              <Ionicons 
                name='add-circle-outline'
                color={Colors.GRAY}
                size={24}
              />  
            </TouchableOpacity>
            <Header 
              title={quantity}
              color={Colors.GRAY}
              fontWeight='medium'
              type={4}
            />
            <TouchableOpacity onPress={() => decrement()}>
              <Ionicons 
                name='remove-circle-outline'
                color={Colors.GRAY}
                size={24}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Header 
          title='Description'
          fontWeight='medium'
          type={3}
        />
        <View style={style.descTextWrapper}>
          <Header 
            title={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}
            type={6} 
          />
        </View>
        <View style={[style.flexRow, style.locationContainer]}>
          <View style={flexWrapper('center', 10)}>
            <Ionicons 
              name='location-outline'
              color={Colors.BLACK}
              size={20}
            />
            <Header 
              title='Chicago'
              type={6}
            />
          </View>
          <View style={flexWrapper('center', 10)}>
            <MaterialCommunityIcons 
              name='truck-delivery-outline'
              color={Colors.BLACK}
              size={20}
            />
            <Header 
              title='Free Delivery'
              type={6}
            />
          </View>
        </View>
        <View style={[style.flexRow, { alignItems: 'flex-start' }]}>
          <TouchableOpacity style={style.buyBtn}>
            <Header 
              title='Buy Now'
              color={Colors.LIGHT_WHITE}
              type={4}
            />
          </TouchableOpacity>
          <TouchableOpacity style={style.addBtn}>
            <Fontisto 
              name='shopping-bag'
              color={Colors.LIGHT_WHITE}
              size={20}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default ProductDetails;
