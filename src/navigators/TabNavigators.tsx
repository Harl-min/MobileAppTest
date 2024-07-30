/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React, { useContext } from 'react';
import ScheduleRequest from '../screens/ScheduleRequest';
import SchedulePickup from '../screens/SchedulePickupp/index';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS} from '../theme/theme';
import CustomIcons from '../components/customIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Maticons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomePage from '../screens/Home';
import Wallet from '../screens/Wallet';
import ChatroomScreen from '../screens/Chatroom';
import AccountPage from '../screens/Account';
import DarkMode from '../utils/darkmode';


const Tab = createBottomTabNavigator();

const TabNavigators = () => {
  const { isDarkMode } = useContext(DarkMode);

  return (
    <Tab.Navigator
      screenOptions={{  
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: isDarkMode ? '#202120' : '#fff',
        },
        tabBarActiveTintColor: isDarkMode ? '#fff' : '#000',
        tabBarInactiveTintColor: isDarkMode ? '#888' : '#888',
      }}>
           <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home"
              size={24}
              color={isDarkMode ? (focused ? '#fff' : '#888') : (focused ? '#000' : '#888')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Pickup"
        component={SchedulePickup}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Maticons
              name="calendar-clock"
              size={24}
              color={isDarkMode ? (focused ? '#fff' : '#888') : (focused ? '#000' : '#888')}
            />
          ),
        }} />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name="wallet"
              size={24}
              color={isDarkMode ? (focused ? '#fff' : '#888') : (focused ? '#000' : '#888')}
            />
          ),
        }} />
        <Tab.Screen
        name="Chatroom"
        component={ChatroomScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name="chatbubbles-outline"
              size={24}
              color={isDarkMode ? (focused ? '#fff' : '#888') : (focused ? '#000' : '#888')}
            />
          ),
        }} /><Tab.Screen
        name="Account"
        component={AccountPage}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Maticons
              name="account"
              size={24}
              color={isDarkMode ? (focused ? '#fff' : '#888') : (focused ? '#000' : '#888')}
            />
          ),
        }} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 55,
    position: 'absolute',
    backgroundColor: COLORS.primaryWhite,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
    paddingBottom: 10
  }
});

export default TabNavigators;
