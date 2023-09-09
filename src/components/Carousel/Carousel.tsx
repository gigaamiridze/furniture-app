import React from 'react';
import { View } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { Colors } from '../../constants';
import { style } from './style';

function Carousel() {
  const images = [
    require('../../assets/images/fn1.jpg'),
    require('../../assets/images/fn2.jpg'),
    require('../../assets/images/fn3.jpg'),
  ]

  return (
    <View style={style.carouselContainer}>
      <SliderBox 
        images={images}
        dotColor={Colors.PRIMARY}
        inactiveDotColor={Colors.SECONDARY}
        imageLoadingColor={Colors.BLACK}
        ImageComponentStyle={style.imageComponentStyle}
        circleLoop={true}
        autoplay={true}
        autoplayInterval={5000}
      />
    </View>
  )
}

export default Carousel;
