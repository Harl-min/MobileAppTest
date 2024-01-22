/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScheduleRequest from './src/screens/ScheduleRequest';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigators from './src/navigators/TabNavigators';
import DropoffScreen from './src/pages/DropoffScreen';
import PickupScreen from './src/pages/PickupScreen';
import SelectedCategoryScreen from './src/pages/SelectedCategoryScreen';
import WasteCategory from './src/pages/WasteCategoryScreen';
import ScheduleDetails from './src/pages/ScheduleDetailsScreen';
import Pickup from './src/pages/Pickup';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tab"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tab" component={TabNavigators}></Stack.Screen>
        <Stack.Screen name="Dropoff" component={DropoffScreen} />
        {/* <Stack.Screen name="Pickup" component={PickupScreen} /> */}
        <Stack.Screen name="PickupScreen" component={Pickup} />
        <Stack.Screen name="WasteCategory" component={WasteCategory} />
        <Stack.Screen
          name="SelectedCategoryScreen"
          component={SelectedCategoryScreen}
        />
        <Stack.Screen name="ScheduleDetails" component={ScheduleDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
