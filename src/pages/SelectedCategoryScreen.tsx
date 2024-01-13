/* eslint-disable prettier/prettier */
import React from 'react';
import {Text} from 'react-native';
import { Input } from '../components/Input/index';
import Toolbar from '../components/toolbar';
import { Button } from '../components/Button/Index';

export default function SelectedCategoryScreen ({navigation}) {
  const viewCategory = () => {
    // Handle waste category
    navigation.navigate("ScheduleDetails");
};
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
      <Text>Use my current address</Text>
      <Button title={'REGISTER'} handleSubmit={viewCategory}/>
    </>
  );
}
