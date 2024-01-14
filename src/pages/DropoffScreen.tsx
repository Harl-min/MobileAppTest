/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import {Text} from 'react-native';
import Toolbar from '../components/toolbar';
import LocationCard from '../components/LocationCard';
import userData from '../data/userdata';

  export default function DropoffScreen ({navigation}) {
    return (
      <>
        <Toolbar
          title="Schedule Dropoff"
          onBackPress={navigation.goBack}
          rightIconName="home-sharp"
        />
        <Text>Below are the nearest Drop off locations closest to you</Text>
        {userData.map((item) => (
        <LocationCard
          key={item.id}
          id={item.id}
          index={item.index}
          roasted={item.roasted}
          name={item.name}
          special_ingredient={item.special_ingredient}
          ingredients={item.ingredients}
        />
      ))}
      </>
    );
  }
