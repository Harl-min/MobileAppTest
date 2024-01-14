/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {Alert, Platform, StyleSheet, Text, View} from 'react-native';
import {Input} from '../components/Input/index';
import Toolbar from '../components/toolbar';
import {Button} from '../components/Button/Index';
import {Selector} from '../components/DropDownSelector';
import {Checkbox} from 'react-native-paper';
// import DatePicker from 'react-native-date-picker';
import Geolocation from '@react-native-community/geolocation';
import {
  PERMISSIONS,
  PermissionStatus,
  request,
  RESULTS,
} from 'react-native-permissions';
import { COLORS } from '../theme/theme';

export default function PickupScreen({navigation}) {
  const [checked, setChecked] = React.useState(false);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [wasteDetails, setWasteDetails] = useState({
    wasteQuantity: '',
    scheduleDate: '',
    pickupLocation: '',
    useCurrentAddress: false,
    currentAddress: '',
  });
  const requestLocationPermission = async (): Promise<boolean> => {
    let permission: PermissionStatus = 'denied'; // Initialize with a default value

    if (Platform.OS === 'android') {
      permission = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION, {
        title: 'Geolocation Permission',
        message: 'Can we access your location?',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      });
    } else if (Platform.OS === 'ios') {
      permission = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    }

    return permission === RESULTS.GRANTED;
  };
  const viewCategory = () => {
    // Handle waste category
    navigation.navigate('WasteCategory');
  };
  const viewActivity = () => {
    navigation.navigate("ScheduleDetails", { wasteDetails });
  };
  const getCurrentLocation = () => {
    console.log('pressed');
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;

        fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyAmr5mf1oVRNvg9gV8FmxAHBzJvz_QKVzM`,
        )
          .then(response => response.json())
          .then(data => {
            const address =
              data.results &&
              data.results[0] &&
              data.results[0].formatted_address;
            setWasteDetails(prevDetails => ({
              ...prevDetails,
              currentAddress: address || '',
            }));
          })
          .catch(error => {
            console.error('Error fetching address:', error);
            // Display an error message to the user
            Alert.alert('Error', 'Failed to fetch location. Please try again.');
          });
      },
      error => {
        console.error('Error getting location:', error);
        // Handle error
        Alert.alert(
          'Error',
          'Failed to get location. Please check your settings and try again.',
        );
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };

  useEffect(() => {
    const getLocationAndPermission = async () => {
      const status = await requestLocationPermission();

      if (status && checked) {
        getCurrentLocation();
      } else if (status) {
        // Handle the case when the permission is granted but the checkbox is not checked
      } else {
        Alert.alert('Location permission not granted.');
        // Handle the case when the permission is not granted
      }
    };

    getLocationAndPermission();
  }, [checked]);

  return (
    <View>
      <Toolbar
        title="SchedulePickup"
        onBackPress={navigation.goBack}
        rightIconName="home-sharp"
      />
      <View style={styles.container}>
        <Selector
          title="Category"
          placeholder="Select your category"
          handleSubmit={viewCategory}
        />
        <Input
          title={'Waste Quantity'}
          placeholder={'Enter your waste quantities'}
          onChangeAccountNo={text =>
            setWasteDetails(prevDetails => ({
              ...prevDetails,
              wasteQuantity: text,
            }))
          }
        />
        <Input
          title={'Schedule Date'}
          placeholder={'Enter your preferred schedule date'}
          onChangeAccountNo={text =>
            setWasteDetails(prevDetails => ({
              ...prevDetails,
              scheduleDate: text,
            }))
          }
        />
        <Input
          title={'Pickup Location'}
          placeholder={'Enter your pickup location'}
          onChangeAccountNo={text =>
            setWasteDetails(prevDetails => ({
              ...prevDetails,
              pickupLocation: wasteDetails.currentAddress
                ? wasteDetails.currentAddress
                : text,
            }))
          }
        />
        <View style={styles.location}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text>Use my current address</Text>
        </View>
        <Text style={styles.alert}>
          We’ve added a 10% fee to your waste schedules for your convenience.
        </Text>

        {/* <DatePicker
  modal
  open={open}
  date={date}
  onConfirm={(date) => {
    setOpen(false);
    setDate(date);
  }}
  onCancel={() => {
    setOpen(false);
  }}
/> */}
        <Button title={'REGISTER'} handleSubmit={viewActivity} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 23,
    marginVertical: 40,
    backgroundColor: COLORS.primaryWhite
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  alert: {
    justifyContent: 'center',
    marginHorizontal: 23,
  },
});
