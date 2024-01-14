/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScheduleRequest from '../screens/ScheduleRequest';
import SchedulePickup from '../screens/SchedulePickup';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS} from '../theme/theme';
import CustomIcons from '../components/customIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Maticons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

const TabNavigators = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: COLORS.primaryGradient, // Change this color to your desired focused text color
      }}>
        <Tab.Screen
        name="Home"
        component={ScheduleRequest}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name="home"
              size={24}
              color={focused ? COLORS.primaryGradient : COLORS.primaryBlackHex}
            />
          ),
        }} />
      <Tab.Screen
        name="Pickup"
        component={SchedulePickup}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Maticons
              name="calendar-clock"
              size={24}
              color={focused ? COLORS.primaryGradient : COLORS.primaryBlackHex}
            />
          ),
        }} />
      <Tab.Screen
        name="Wallet"
        component={ScheduleRequest}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name="wallet"
              size={24}
              color={focused ? COLORS.primaryGradient : COLORS.primaryBlackHex}
            />
          ),
        }} />
        <Tab.Screen
        name="Chatroom"
        component={ScheduleRequest}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name="chatbubbles-outline"
              size={24}
              color={focused ? COLORS.primaryGradient : COLORS.primaryBlackHex}
            />
          ),
        }} /><Tab.Screen
        name="Account"
        component={ScheduleRequest}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Maticons
              name="account"
              size={24}
              color={focused ? COLORS.primaryGradient : COLORS.primaryBlackHex}
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
