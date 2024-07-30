/* eslint-disable prettier/prettier */
import React, { FC, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, GestureResponderEvent } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { COLORS, FONTSIZE } from '../theme/theme';
import DarkMode from '../utils/darkmode';

interface ToolbarProps {
  title: string;
  onBackPress?: (event: GestureResponderEvent) => void;
  rightIconVisible?: boolean;
  leftIconVisible?: boolean;
  rightIconName?: string;
  onRightIconPress?: (event: GestureResponderEvent) => void;
}

const Toolbar: FC<ToolbarProps> = ({ title, onBackPress, rightIconName,  rightIconVisible, leftIconVisible, onRightIconPress }) => {
  const {isDarkMode} = useContext(DarkMode)
  const textColor = isDarkMode ? 'white' : 'black';

  return (
    <View style={styles.toolbar}>
      {leftIconVisible && (
      <TouchableOpacity onPress={onBackPress} style={styles.iconContainer}>
        <MaterialIcons name="arrow-back-ios" size={20} color="#000" />
      </TouchableOpacity>
      )
      }
      
      <Text style={[styles.title, { color: textColor }]}>{title}</Text>
      {rightIconVisible && rightIconName && (
        <TouchableOpacity onPress={onRightIconPress} style={styles.iconContainer}>
          <Ionicons name="notifications" size={20} color="#000" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 20,
      // backgroundColor: '#fff',
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      height: 60,
      fontSize: FONTSIZE.size_10,
    },
    iconContainer: {
      width: 32,
      height: 32,
      borderRadius: 20,
      backgroundColor: '#1A1A1A0D',
      marginHorizontal: 10,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center'
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      color: COLORS.primaryBlackHex,
    },
  });

  export default Toolbar;
