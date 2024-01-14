/* eslint-disable prettier/prettier */
import React, { FC } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, GestureResponderEvent } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { COLORS, FONTSIZE } from '../theme/theme';

interface ToolbarProps {
  title: string;
  onBackPress?: (event: GestureResponderEvent) => void;
  rightIconName?: string;
  onRightIconPress?: (event: GestureResponderEvent) => void;
}

const Toolbar: FC<ToolbarProps> = ({ title, onBackPress, rightIconName, onRightIconPress }) => {
  return (
    <View style={styles.toolbar}>
      <TouchableOpacity onPress={onBackPress} style={styles.iconContainer}>
        <MaterialIcons name="arrow-back-ios" size={20} color="#000" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      {rightIconName && (
        <TouchableOpacity onPress={onRightIconPress} style={styles.iconContainer}>
          <Ionicons name="notifications" size={20} color="#000" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    toolbar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
      backgroundColor: '#fff',
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
      color: COLORS.primaryBlackHex
    },
  });

  export default Toolbar;
