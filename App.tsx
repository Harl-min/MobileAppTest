/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
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
import {useColorScheme} from 'react-native';
import { DefaultTheme, DarkTheme} from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const MyTheme = isDarkTheme ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={MyTheme}>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle={'dark-content'}
      />
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
