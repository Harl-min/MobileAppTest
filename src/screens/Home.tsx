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
import {Avatar} from 'react-native-paper';
import AccountCard from '../components/AccountProfileCard';
import DashCards from '../components/DashCards';
import DashedLine from 'react-native-dashed-line';

const handleBackPress = () => {
  // Handle back button press
  console.log('Back button pressed');
};

const HomePage = ({navigation}) => {
  return (
    <View>
      <ScrollView>
        <View>
          <View style={styles.avatar}>
            <View style={styles.bar}>
              <Avatar.Text size={34} label="HM" />
              <Text style={styles.username}>No 5, Etim Center...</Text>
            </View>
            <View style={styles.statusCard}>
              <View style={styles.statusText}>
                <Text>Pickup Left</Text>
                <Text>4</Text>
              </View>
              <DashedLine axis='vertical' dashLength={5} />
              <View style={styles.statusText}>
                <Text>Balance</Text>
                <Text>{'\u20A6'} 2,000</Text>
              </View>
            </View>
          </View>

          <View style={styles.dashcards}>
            <DashCards title="Pick Up Trash" />
            <DashCards title="Schedule Pickup" />
            <DashCards title="My Voucher" />
            <DashCards title="Contact Center" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    marginBottom: 20,
    backgroundColor: '',
    // height: 200,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statusCard: {
    backgroundColor: COLORS.primaryGradient,
    marginVertical: 30,
    height: 120,
    borderRadius: 12,
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-evenly',
    // paddingHorizontal: 20,
  },
  statusText: {
    // flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.primaryBlackHex,
    marginTop: 10,
  },
  dashcards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 23,
  },
});

export default HomePage;
