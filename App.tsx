/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScheduleRequest from './src/screens/ScheduleRequest';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigators from './src/navigators/TabNavigators';
import DropoffScreen from './src/pages/DropoffScreen';
import PickupScreen from './src/pages/PickupScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tab"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tab" component={TabNavigators}></Stack.Screen>
        <Stack.Screen name="Dropoff" component={DropoffScreen} />
        <Stack.Screen name="Pickup" component={PickupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
