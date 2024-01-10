/* eslint-disable prettier/prettier */
import React from 'react';
import {Text} from 'react-native';
import { Input } from '../components/Input/index';
import Toolbar from '../components/toolbar';

export default function PickupScreen ({navigation}) {
  return (
    <>
      <Toolbar
        title="SchedulePickup"
        onBackPress={navigation.goBack}
        rightIconName="home-sharp"
      />
      <Input 
      title={'Account Number'}
      placeholder={'Enter your account no'}
      />
      <Input 
      title={'Account Number'}
      placeholder={'Enter your account no'}
      />
      <Input 
      title={'Account Number'}
      placeholder={'Enter your account no'}
      />
      <Input 
      title={'Account Number'}
      placeholder={'Enter your account no'}
      />
      <Text>schedulePickup</Text>
    </>
  );
}
