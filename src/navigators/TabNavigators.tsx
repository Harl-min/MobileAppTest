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
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const TabNavigators = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: styles.tabBarStyle,
      }}>
      <Tab.Screen
        name="Home"
        component={SchedulePickup}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <CustomIcons
              name="home"
              size={55}
              color={focused ? COLORS.primaryGradient : COLORS.primaryBlackHex}
            />
          ),
        }} />
      <Tab.Screen
        name="tab"
        component={ScheduleRequest}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <CustomIcons
              name="home"
              size={55}
              color={focused ? COLORS.primaryGradient : COLORS.primaryBlackHex}
            />
          ),
        }} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 83,
    position: 'absolute',
    backgroundColor: COLORS.primaryWhite,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
  },
  BlurViewStyles: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default TabNavigators;
