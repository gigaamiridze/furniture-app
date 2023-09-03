import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Cart, Profile, Search, ProductDetails } from '../screens';
import { Routes } from '../constants';

const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
  return (
    <Tab.Navigator initialRouteName={Routes.HOME}>
      <Tab.Screen name={Routes.HOME} component={Home} />
      <Tab.Screen name={Routes.CART} component={Cart} />
      <Tab.Screen name={Routes.SEARCH} component={Search} />
      <Tab.Screen name={Routes.PROFILE} component={Profile} />
      <Tab.Screen name={Routes.PRODUCT_DETAILS} component={ProductDetails} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation;
