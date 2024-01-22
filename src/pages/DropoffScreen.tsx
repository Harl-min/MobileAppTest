/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Toolbar from '../components/toolbar';
import LocationCard from '../components/LocationCard';
import userData from '../data/userdata';
import { COLORS, FONTSIZE } from '../theme/theme';

  export default function DropoffScreen ({navigation}) {
    const buttonPress = () => {
      console.log('Button Pressed');
    };
    return (
      <>
        <Toolbar
          title="Schedule Dropoff"
          onBackPress={navigation.goBack}
          rightIconName="home-sharp"
        />
        <View style={styles.container}>
        <Text style={styles.subtitle}>Below are the nearest Drop off locations closest to you</Text>
        {userData.map((item) => (
        <LocationCard
          key={item.id}
          id={item.id}
          index={item.index}
          roasted={item.roasted}
          name={item.name}
          special_ingredient={item.special_ingredient}
          ingredients={item.ingredients}
          description={item.description}
          handleSubmit={buttonPress}
        />
      ))}
      </View>
      </>
    );
  }

  const styles = StyleSheet.create({
    container: {
      marginHorizontal: 24,
      marginVertical: 13,
    },
    subtitle: {
      color: COLORS.primaryBlackHex,
      fontSize: FONTSIZE.size_16,
      fontWeight: '500',
      lineHeight: 22
    }
  });