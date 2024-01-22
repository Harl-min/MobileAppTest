/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {COLORS} from '../theme/theme';

interface PopUpAnimationProps {
  style: any;
  source: any;
}

const PopUpAnimation: React.FC<PopUpAnimationProps> = ({style, source}) => {
  return (
    <View style={styles.LottieAnimationContainer}>
      <LottieView style={style} source={source} autoPlay loop={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  LottieAnimationContainer: {
    flex: 1,
    position: 'absolute',
    backgroundColor: COLORS.primaryBlackHex,
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  },
});

export default PopUpAnimation;
