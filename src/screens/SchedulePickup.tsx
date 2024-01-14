/* eslint-disable prettier/prettier */
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {COLORS, FONTSIZE} from '../theme/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Toolbar from '../components/toolbar';
import PopUpAnimation from '../components/PopUpAnimation';

const handleBackPress = () => {
  // Handle back button press
  console.log('Back button pressed');
};

const SchedulePickup = ({navigation}) => {
  const [showAnimation, setShowAnimation] = useState(false);

  const buttonPress = () => {
    console.log('Button Pressed')
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
      navigation.navigate('Pickup');
    }, 3000);
  };
  const buttonPressHandler = () => {
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
      navigation.navigate('Dropoff');
    }, 3000);
  };
  return (
    <View>
      <Toolbar
        title="Schedule Request"
        onBackPress={handleBackPress}
        rightIconName="home-sharp"
      />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.list}
          onPress={buttonPress}>
          <View style={styles.content}>
            <MatIcon
              name="truck-outline"
              size={17}
              color="black"
              style={styles.IconContainer}
            />
            <View style={styles.subheader}>
              <Text style={FONTSIZE.size_12}>Schedule Pickup</Text>
              <Text style={FONTSIZE.size_10}>
                Request for waste pickup at a goal
              </Text>
            </View>
            <Icon name="arrow-forward" size={20} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.list} onPress={buttonPressHandler}>
          <View style={styles.content}>
            <Icon name="location" size={17} color="black"  style={styles.IconContainer}/>
            <View style={styles.subheader2}>
              <Text style={FONTSIZE.size_12}>Schedule Drop-off</Text>
              <Text style={FONTSIZE.size_10}>
                Request for waste drop-off at a goal
              </Text>
            </View>
            <Icon name="arrow-forward" size={20} color="black" />
          </View>
        </TouchableOpacity>
        {showAnimation ? (
          <PopUpAnimation
            style={styles.LottieAnimation}
            source={require('../lottie/successful.json')}
          />
        ) : (
          <></>
        )}
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
    padding: 13,
  },
  LottieAnimation: {
    height: 250,
  },
  IconContainer: {
    backgroundColor: COLORS.primaryGradient,
    color: COLORS.primaryWhite,
    width: 30,
    height: 30,
    borderRadius: 16,
    padding: 7,
  },
  subheader: {
    flexDirection: 'column',
    marginRight: 50
  },
  subheader2: {
    flexDirection: 'column',
    marginRight: 40
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
  },
});

export default SchedulePickup;
