/* eslint-disable prettier/prettier */
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {COLORS, FONTSIZE} from '../theme/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Toolbar from '../components/toolbar';
import PopUpAnimation from '../components/PopUpAnimation';
import { Avatar } from 'react-native-paper';
import AccountCard from '../components/AccountProfileCard';

const handleBackPress = () => {
  // Handle back button press
  console.log('Back button pressed');
};

const HomePage = ({navigation}) => {
  return (
    <View>
      <ScrollView style={styles.container}>
        <View>
          <View style={styles.avatar}>
            <Avatar.Text size={34} label="HM" />
            <Text style={styles.username}>No 5, Etim Center...</Text>
          </View>

          <View>
            <Text style={styles.username}>Recently</Text>
          <AccountCard />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  
  container: {
    marginHorizontal: 23,
    marginVertical: 10,
  },
  avatar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  username: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    marginTop: 10
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

export default HomePage;
