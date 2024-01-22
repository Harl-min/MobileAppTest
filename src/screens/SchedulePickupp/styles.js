/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import {COLORS, FONTSIZE} from '../../theme/theme';

export const styles = StyleSheet.create({
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
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
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