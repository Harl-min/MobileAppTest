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

const HomePage = ({navigation}) => {
  const [showAnimation, setShowAnimation] = useState(false);

  const buttonPress = () => {
    console.log('Button Pressed')
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
      navigation.navigate('PickupScreen');
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
      {/* <Toolbar
        title="Schedule Request"
        onBackPress={handleBackPress}
        rightIconName="home-sharp"
      />
       {showAnimation ? (
          <PopUpAnimation
            style={styles.LottieAnimation}
            source={require('../../src/lottie/successful.json')}
          />
        ) : (
          <></>
        )} */}
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
              <Text style={styles.subtitle}>Schedule Pickup</Text>
              <Text style={styles.subtitle2}>
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
              <Text style={styles.subtitle}>Schedule Drop-off</Text>
              <Text style={styles.subtitle2}>
                Request for waste drop-off at a goal
              </Text>
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
    padding: 13,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    marginRight: 80,
  },
  subheader2: {
    flexDirection: 'column',
    marginRight: 70
  },
  LottieAnimation: {
    height: '100%',
    backgroundColor: COLORS.primaryWhite,
    
  },
  subtitle: {
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryBlackHex
  },
  subtitle2: {
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryBlackHex
  },
  text: {
    fontSize: 16,
  },
});

export default HomePage;
