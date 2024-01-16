/* eslint-disable prettier/prettier */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import Toolbar from '../../components/toolbar';


const handleBackPress = () => {
  // Handle back button press
  console.log('Back button pressed');
};

// const handleRightIconPress = () => {
//   // Handle right icon press
//   console.log('Right icon pressed');
// };
const ScheduleRequest = () => {

  return (
    <View>
         <Toolbar
        title="SchedulePickp"
        onBackPress={handleBackPress}
        rightIconName="home-sharp"
      />
    </View>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = StyleSheet.create({});

export default ScheduleRequest;
