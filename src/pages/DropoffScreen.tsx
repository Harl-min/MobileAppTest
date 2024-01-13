/* eslint-disable prettier/prettier */
import React from 'react';
import {Text} from 'react-native';
import Toolbar from '../components/toolbar';

export default function DropoffScreen ({navigation}) {
  return (
    <>
      <Toolbar
        title="Schedule Dropoff"
        onBackPress={navigation.goBack}
        rightIconName="home-sharp"
      />
      <Text>Below are the nearest Drop off locations closest to you</Text>
    </>
  );
}
