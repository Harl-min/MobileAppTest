/* eslint-disable prettier/prettier */
import {Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Toolbar from '../../components/toolbar';
import PopUpAnimation from '../../components/PopUpAnimation';
import { styles } from './styles';

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
        {showAnimation ? (
          <PopUpAnimation
            style={styles.LottieAnimation}
            source={require('../../lottie/successful.json')}
          />
        ) : (
          <></>
        )}
      </View>
    </View>
  );
};

export default SchedulePickup;
