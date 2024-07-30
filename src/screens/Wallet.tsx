/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useContext } from 'react';
import WalletCard from '../components/WalletCard';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../theme/theme';
import DarkMode from '../utils/darkmode';

const handleBackPress = () => {
  // Handle back button press
  console.log('Back button pressed');
};

const handleRightIconPress = () => {
  // Handle right icon press
  console.log('Right icon pressed');
};
const Wallet = ({}) => {
  const [expanded, setExpanded] = React.useState(true);
  const {isDarkMode} = useContext(DarkMode)
  const textColor = isDarkMode ? 'white' : 'black';
  const handlePress = () => setExpanded(!expanded);
  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconContainer}>
          <MaterialIcons
            style={styles.icon}
            name="arrow-back-ios"
            size={20}
            color={isDarkMode ? '#fff' : '#202120'}
          />
        </TouchableOpacity>
        <Text style={[styles.title, { color: textColor }]}>Wallet</Text>
      </View>
      <WalletCard handleSubmit={handleBackPress} />
    </View>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = StyleSheet.create({
  body: {
    marginHorizontal: 23,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    gap: 10,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 20,
    backgroundColor: '#1A1A1A0D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 7,
  },
  title: {
    fontSize: 18,
    fontWeight: '100',
    color: COLORS.primaryBlackHex,
  },
});

export default Wallet;
