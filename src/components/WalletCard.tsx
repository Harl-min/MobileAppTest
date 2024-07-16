import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BORDERRADIUS, COLORS, FONTSIZE} from '../theme/theme';
import {Button} from 'react-native-paper';
import {useTheme} from '@react-navigation/native';
import { walletCard } from '../actions/walletCard';
import { AxiosResponse } from 'axios';
import { UserData } from '../interfaces/user.interface';

interface CoffeeCardProps {
  handleSubmit: (value: any) => void;
  toggleTheme: any;
  data: any;
}
interface UserResponse {
  data: {
    id: number;
    name: string;
  };
}

const WalletCard: React.FC<CoffeeCardProps> = ({handleSubmit, toggleTheme, data}) => {
  const {colors} = useTheme();
  const { getUser } = walletCard();

  const [user, setUser] = useState<UserData>({
    email: '',
    bvn: 0,
    address: '',
    next_of_kin: '',
});
  const buttonPress = () => {
    console.log('Button Pressed');
  }; 
  
  const fetchUser = async () => {
    try {
      const response: AxiosResponse<UserResponse> = await getUser();
      if (response?.data) {
        console.log(response.data);
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
            <View style={styles.CardText}>
              <View>
                <Text style={styles.subtitle}>Total Balance</Text>
                <Text style={styles.subtitle2}>{'\u20A6'}1,234.50</Text>
              </View>
              {/* <View>
                <Text style={styles.subtitle}>add</Text>
                <Text>add</Text>
              </View> */}
            </View>

            <View style={styles.CardButtons}>
              <View style={styles.buttonContainer}>
                <Button
                  icon="plus"
                  mode="contained"
                  buttonColor="#FFF"
                  onPress={() => console.log('Pressed')}>
                  Add Money
                </Button>
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  icon="file"
                  mode="contained"
                  buttonColor="#FFF"
                  onPress={() => console.log('Pressed')}>
                  History
                </Button>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{backgroundColor: colors.card}}
        onPress={toggleTheme}>
        <Text style={{color: colors.text}}>Button!</Text>
      </TouchableOpacity>
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
    fontSize: 14, // Assuming FONTSIZE.size_14 is 14
    fontWeight: '200',
    color: '#FFFFFF', // Assuming COLORS.primaryWhite is white
  },
  text: {
    color: '#000000', // Assuming COLORS.primaryBlackHex is black
  },
  subtitle2: {
    fontSize: 33, // Assuming FONTSIZE.size_28 is 28
    color: '#FFFFFF', // Assuming COLORS.primaryWhite is white
    flexDirection: 'row',
    alignItems: 'center',
    fontWeight: '500',
  },
  add: {
    backgroundColor: '#FFFFFF', // Assuming COLORS.primaryWhite is white
    color: '#000000', // Assuming COLORS.primaryBlackHex is black
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WalletCard;
