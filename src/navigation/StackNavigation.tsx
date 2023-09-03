import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './BottomTabNavigation';
import { Cart, ProductDetails } from '../screens';
import { Routes } from '../constants';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Bottom Navigation' component={BottomTabNavigation} />
      <Stack.Screen name={Routes.PRODUCT_DETAILS} component={ProductDetails} />
      <Stack.Screen name={Routes.CART} component={Cart} />
    </Stack.Navigator>
  )
}

export default StackNavigation;
