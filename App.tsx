/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import {Appearance, StatusBar, StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScheduleRequest from './src/screens/ScheduleRequest';
import {NavigationContainer, Theme} from '@react-navigation/native';
import TabNavigators from './src/navigators/TabNavigators';
import DropoffScreen from './src/pages/DropoffScreen';
import PickupScreen from './src/pages/PickupScreen';
import SelectedCategoryScreen from './src/pages/SelectedCategoryScreen';
import WasteCategory from './src/pages/WasteCategoryScreen';
import ScheduleDetails from './src/pages/ScheduleDetailsScreen';
import Pickup from './src/pages/Pickup';
import {useColorScheme} from 'react-native';
import { DefaultTheme, DarkTheme} from '@react-navigation/native';
import DarkMode from './src/utils/darkmode';

const Stack = createNativeStackNavigator();
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [useDeviceSettings, setuseDeviceSettings] = useState(false);
  const MyTheme = isDarkMode ? DarkTheme : DefaultTheme;

  // const [fontsloaded] = usefonts ({
  //   Poppins_400Regular
  // })
  const scheme = useColorScheme()
  const CustomDarkTheme:Theme = {
    ...DarkTheme,
    dark:true,
    colors:{
      ...DarkTheme.colors,
      primary: 'white',
      background: '#202120',
      card: '#121212'
    }
  }

  useEffect(() =>{
    let subscription: any;
    if (useDeviceSettings) {
      subscription = Appearance.addChangeListener(scheme=>{
        // Dark mode will be true when scheme.colorSchema is equal to 'dark'
        setIsDarkMode(scheme.colorScheme === 'dark')
      })
    }
  return () =>{
    if(subscription) {
      subscription.remove()
      subscription = null
      }
    }
  }, [scheme, isDarkMode, useDeviceSettings])


  return (
    <DarkMode.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        useDeviceSettings,
        setUseDeviceSettings(prev) {},
      }}
    >
      
    <NavigationContainer theme={isDarkMode ? CustomDarkTheme : DefaultTheme}>
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
    </DarkMode.Provider>
  );
};

export default App;


