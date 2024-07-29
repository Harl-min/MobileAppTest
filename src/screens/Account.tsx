/* eslint-disable prettier/prettier */
import {
  ColorSchemeName,
  StyleSheet,
  Switch,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import React, {useCallback, useContext, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Toolbar from '../components/toolbar';
import {List} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {Card, Theme} from '../utils/Theme';
import DarkMode from '../utils/darkmode';

const handleBackPress = () => {
  // Handle back button press
  console.log('Back button pressed');
};

const handleRightIconPress = () => {
  // Handle right icon press
  console.log('Right icon pressed');
};
const AccountPage = () => {
  const {isDarkMode, setIsDarkMode, useDeviceSettings, setUseDeviceSettings} =
    useContext(DarkMode);

  const scheme = useColorScheme();
  const currentTheme: ColorSchemeName = isDarkMode ? 'dark' : 'light';
  function handleUseDeviceTheme() {
    setUseDeviceSettings(!useDeviceSettings);
    if (scheme === 'dark') {
      setIsDarkMode(true);
      return;
    }
    setIsDarkMode(false);
  }

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(!isDarkMode);
  }, [isDarkMode, scheme, useDeviceSettings]);

  useEffect(() => {
    if (currentTheme !== scheme) {
      setUseDeviceSettings(false);
    }
  }, [isDarkMode, useDeviceSettings]);

  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  return (
    <View>
      <Toolbar
        title="Account"
        onBackPress={handleBackPress}
        rightIconVisible={false}
        leftIconVisible={false}
        rightIconName="home-sharp"
      />
      <Card style={styles.card}>
        <View>
          <Text style={styles.text}>Use device theme</Text>
          <Switch
            trackColor={{
              true: '#82b875',
              false: 'gray',
            }}
            onChange={handleUseDeviceTheme}
            value={useDeviceSettings}
            thumbColor={'white'}
          />
        </View>
      </Card>

      <Card style={styles.card}>
        <View>
          <Text style={styles.text}>Dark Mode</Text>
          <Switch
            trackColor={{
              true: '#82b875',
              false: 'gray',
            }}
            onChange={toggleDarkMode}
            value={isDarkMode}
            thumbColor={'white'}
          />
        </View>
      </Card>
    </View>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 10
  },
});

export default AccountPage;
