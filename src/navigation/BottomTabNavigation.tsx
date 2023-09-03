import React from 'react';
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { Home, Cart, Profile, Search, ProductDetails } from '../screens';
import { Routes } from '../constants';

const Tab = createBottomTabNavigator();

const screenOptions: BottomTabNavigationOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 70,
  }
}

function BottomTabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName={Routes.HOME}
      screenOptions={screenOptions}
    >
      <Tab.Screen name={Routes.HOME} component={Home} />
      <Tab.Screen name={Routes.CART} component={Cart} />
      <Tab.Screen name={Routes.SEARCH} component={Search} />
      <Tab.Screen name={Routes.PROFILE} component={Profile} />
      <Tab.Screen name={Routes.PRODUCT_DETAILS} component={ProductDetails} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation;
