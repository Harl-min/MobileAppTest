import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BORDERRADIUS, COLORS, FONTSIZE} from '../theme/theme';
import {Button} from 'react-native-paper';
import {useTheme} from '@react-navigation/native';
import { walletCard } from '../actions/walletCard';
import { AxiosResponse } from 'axios';
import { Account, UserResponse } from '../interfaces/user.interface';

interface WalletProps {
  handleSubmit: (value: any) => void;
  toggleTheme?: any;
}

const WalletCard: React.FC<WalletProps> = ({handleSubmit, toggleTheme}) => {
  const {colors} = useTheme();
  const { getUser, getUserBalance } = walletCard();

  const [userData, setUserData] = useState<any[] | null>(null);

  const buttonPress = () => {
    console.log('Button Pressed');
  }; 
  const token = 'sk_test_4eC39HqLyjWDarjtT1zdp7dc';
  const fetchUser = async () => {
    try {
      const response: AxiosResponse<any> = await getUserBalance(token);
      if (response?.data) {
        console.log(response.data.available[0]);
        setUserData(response.data.available[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={buttonPress}>
          <View style={styles.CardContainer}>
          {userData && (
            <View style={styles.CardText}>
              <View>
                <Text style={styles.subtitle}>Total Balance</Text>
                {/* <Text style={styles.subtitle2}>{'\u20A6'}{data.account_number}</Text> */}
                <Text style={styles.subtitle2}>{userData.currency}: {userData.amount}</Text>
              </View>
              {/* <View>
                <Text style={styles.subtitle}>add</Text>
                <Text>add</Text>
              </View> */}
            </View>
          )}


            <View style={styles.CardButtons}>
              <View style={styles.buttonContainer}>
                <Button
                  icon="plus"
                  mode="contained"
                  buttonColor="#FFF"
                  textColor='#000'
                  onPress={() => console.log('Pressed')}>
                  Add Money
                </Button>
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  icon="file"
                  mode="contained"
                  buttonColor="#FFF"
                  textColor='#000'
                  onPress={() => console.log('Pressed')}>
                  History
                </Button>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      {/* <TouchableOpacity
        style={{backgroundColor: colors.card}}
        onPress={toggleTheme}>
        <Text style={{color: colors.text}}>Button!</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginHorizontal: 23,
    marginVertical: 40,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  CardContainer: {
    backgroundColor: COLORS.primaryGradient,
    height: 180,
    borderRadius: 16,
    padding: 24,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  CardText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  CardButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  subheader2: {
    flexDirection: 'column',
    marginRight: 70,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '200',
    color: '#FFFFFF',
  },
  text: {
    color: '#000000',
  },
  subtitle2: {
    fontSize: 33,
    color: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    fontWeight: '500',
  },
  add: {
    backgroundColor: '#FFFFFF',
    color: '#000000',
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WalletCard;
