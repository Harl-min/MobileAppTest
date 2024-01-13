/* eslint-disable prettier/prettier */
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {FONTSIZE} from '../theme/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import Toolbar from '../components/toolbar';

const handleBackPress = () => {
  // Handle back button press
  console.log('Back button pressed');
};

const SchedulePickup = ({navigation}) => {

  return (
    <View >
      <Toolbar
        title="Schedule Request"
        onBackPress={handleBackPress}
        rightIconName="home-sharp"
      />
      <View style={styles.container}>
      <TouchableOpacity style={styles.list} onPress={() => navigation.navigate("Pickup")}>
        <View style={styles.content}>
        <Icon name="arrow-forward" size={20} color="black" />
          <View style={styles.subheader}>
          <Text style={FONTSIZE.size_12}>Schedule Pickup</Text>
          <Text style={FONTSIZE.size_10}>Request for waste pickup at a goal</Text>
          </View>
          <Icon name="arrow-forward" size={20} color="black" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.list} onPress={() => navigation.navigate("Dropoff")}>
        <View style={styles.content}>
        <Icon name="arrow-forward" size={20} color="black" />
        <View style={styles.subheader}>
          <Text style={FONTSIZE.size_12}>Schedule Drop-off</Text>
          <Text style={FONTSIZE.size_10}>Request for waste drop-off at a goal</Text>
          </View>
          <Icon name="arrow-forward" size={20} color="black" />
        </View>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 23,
    marginVertical: 40,
  },
  list: {
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 70, 
    marginVertical: 10,
    padding: 13
  },
  subheader: {
    flexDirection: 'column',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // padding: 16,
  },
  text: {
    fontSize: 16,
  },
});

export default SchedulePickup;
