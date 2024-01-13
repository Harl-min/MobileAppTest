/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Input} from '../components/Input/index';
import Toolbar from '../components/toolbar';
import {Button} from '../components/Button/Index';
import {COLORS} from '../theme/theme';

export default function ScheduleDetails({route, navigation}) {
  const {wasteDetails} = route.params;

  const viewCategory = () => {
    // Handle waste category
    navigation.navigate('');
  };
  return (
    <View>
      <Toolbar
        title="SchedulePickup"
        onBackPress={navigation.goBack}
        rightIconName="home-sharp"
      />
      <View style={styles.container}>
        <View style={styles.card}>
          <Text>Schedule Details</Text>
          {Object.entries(wasteDetails).map(([key, value]) => (
            <View style={styles.title} key={key}>
              <Text>{key}</Text>
              <Text>{value}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.card}>
        <Text>Schedule Details</Text>
        <View style={styles.title}>
          <Text>Waste category</Text>
          <Text>Waste category</Text>
        </View>
        <View style={styles.title}>
          <Text>Waste category</Text>
          <Text>Waste category</Text>
        </View>
        <View style={styles.title}>
          <Text>Waste category</Text>
          <Text>Waste category</Text>
        </View>
        <View style={styles.title}>
          <Text>Waste category</Text>
          <Text>Waste category</Text>
        </View>
        <View style={styles.title}>
          <Text>Waste category</Text>
          <Text>Waste category</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 23,
    marginVertical: 40,
  },
  card: {
    height: 274,
    backgroundColor: COLORS.primaryWhite,
    borderRadius: 5,
    padding: 18,
    marginBottom: 16,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 9,
    fontSize: 13,
    fontWeight: '500',
  },
});
