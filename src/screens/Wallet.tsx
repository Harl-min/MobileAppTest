/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Toolbar from '../components/toolbar';
import {List} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const handleBackPress = () => {
  // Handle back button press
  console.log('Back button pressed');
};

const handleRightIconPress = () => {
  // Handle right icon press
  console.log('Right icon pressed');
};
const Wallet = () => {
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);
  return (
    <View>
         <Toolbar
        title="Wallet"
        onBackPress={handleBackPress}
        rightIconName="home-sharp"
      />
    </View>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = StyleSheet.create({});

export default Wallet;
