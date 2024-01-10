/* eslint-disable prettier/prettier */
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { List } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Toolbar from '../components/toolbar';

const handleBackPress = () => {
  // Handle back button press
  console.log('Back button pressed');
};

const SchedulePickup = ({navigation}) => {

  return (
    <View>
      <Toolbar
        title="SchedulePickup"
        onBackPress={handleBackPress}
        rightIconName="home-sharp"
      />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  text: {
    fontSize: 16,
  },
});

export default SchedulePickup;
