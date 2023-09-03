import React from 'react';
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Routes, Colors, Sizes } from '../constants';
import { Home, Profile, Search } from '../screens';

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
      <Tab.Screen 
        name={Routes.HOME} 
        component={Home} 
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Icon 
                name={focused ? 'home' : 'home-outline'}
                size={Sizes.X_LARGE}
                color={focused ? Colors.PRIMARY : Colors.GRAY_SECOND}
              />
            )
          } 
        }}
      />
      <Tab.Screen 
        name={Routes.SEARCH} 
        component={Search} 
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Icon 
                name={focused ? 'search-sharp' : 'search-outline'}
                size={Sizes.X_LARGE}
                color={focused ? Colors.PRIMARY : Colors.GRAY_SECOND}
              />
            )
          } 
        }}
      />
      <Tab.Screen 
        name={Routes.PROFILE} 
        component={Profile} 
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Icon 
                name={focused ? 'person' : 'person-outline'}
                size={Sizes.X_LARGE}
                color={focused ? Colors.PRIMARY : Colors.GRAY_SECOND}
              />
            )
          } 
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation;
