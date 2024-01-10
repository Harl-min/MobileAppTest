/* eslint-disable prettier/prettier */
import React, { FC } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, GestureResponderEvent } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
        <Ionicons name="arrow-back-sharp" size={30} color="#000" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      {rightIconName && (
        <TouchableOpacity onPress={onRightIconPress} style={styles.iconContainer}>
          <Ionicons name={rightIconName} size={30} color="#000" />
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
    },
    iconContainer: {
      padding: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  });

  export default Toolbar;
