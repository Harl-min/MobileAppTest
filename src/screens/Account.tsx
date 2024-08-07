/* eslint-disable prettier/prettier */
import {
  ColorSchemeName,
  ScrollView,
  StyleProp,
  StyleSheet,
  Switch,
  TouchableOpacity,
  View,
  ViewProps,
  ViewStyle,
  useColorScheme,
} from 'react-native';
import React, {useCallback, useContext, useEffect} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Toolbar from '../components/toolbar';
import {Icon, MD3Colors} from 'react-native-paper';
import DarkMode from '../utils/darkmode';
import AccountCard from '../components/AccountProfileCard';
import {Avatar, Button, Card, Text} from 'react-native-paper';
import {IconSource} from 'react-native-paper/lib/typescript/components/Icon';
import {ThemeProp} from 'react-native-paper/lib/typescript/types';

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
  const textColor = isDarkMode ? 'white' : 'black';

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
  const LeftContent = (
    props: React.JSX.IntrinsicAttributes &
      ViewProps &
      React.RefAttributes<View> & {
        icon: IconSource;
        size?: number | undefined;
        color?: string | undefined;
        style?: StyleProp<ViewStyle>;
        theme?: ThemeProp | undefined;
      },
  ) => <Avatar.Icon {...props} icon="folder" />;

  return (
    <View style={{ flex: 1 }}>
      <Toolbar
        title="Account"
        onBackPress={handleBackPress}
        rightIconVisible={false}
        leftIconVisible={false}
        rightIconName="home-sharp"
      />
      <ScrollView style={styles.container}>
        <AccountCard />
        <Card
        mode="contained"
          style={[
            {
              backgroundColor: '#fff',
              paddingHorizontal: 10,
              paddingVertical: 15,
              marginTop: 10
            },
          ]}>
          <View>
            <TouchableOpacity style={styles.body}>
              <AntDesign name="profile" color={'#005500'} size={20} />
              <Text style={styles.list}>Personal Data</Text>
              <MaterialIcons name="keyboard-arrow-right" size={25} style={{color: '#000'}} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.body}>
            <Entypo name="language" color={'#005500'} size={20} />
            <Text style={styles.list}>Language</Text>
              <MaterialIcons name="keyboard-arrow-right" size={25} style={{color: '#000'}} />
            </TouchableOpacity>
            <View style={styles.body}>
              <Entypo name="moon" color={'#005500'} size={20} />
              <Text style={styles.list}>Dark Mode</Text>
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
          </View>
        </Card>
        <Card mode="contained"
          style={[
            {
              backgroundColor: '#fff',
              paddingHorizontal: 10,
              paddingVertical: 15,
              marginTop: 10
            },
          ]}>
          <View>
            <TouchableOpacity style={styles.body}>
            <Entypo name="notification" color={'#005500'} size={20} />
              <Text style={styles.list}>Notifications</Text>
              <MaterialIcons name="keyboard-arrow-right" size={25} style={{color: '#000'}} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.body}>
            <Entypo name="newsletter" color={'#005500'} size={20} />
              <Text style={styles.list}>Agreements</Text>
              <MaterialIcons name="keyboard-arrow-right" size={25} style={{color: '#000'}} />
            </TouchableOpacity>
            <View style={styles.body}>
              <MaterialIcons name="phone-callback" color={'#005500'} size={20} />
              <Text style={styles.list}>Help Center</Text>
              <MaterialIcons name="keyboard-arrow-right" size={25} style={{color: '#000'}} />
            </View>
          </View>
        </Card>
        <Card
        mode="contained"
          style={[
            {
              backgroundColor: '#fff',
              paddingHorizontal: 10,
              paddingVertical: 15,  
              marginTop: 10
            },
          ]}>
          <View>
            <TouchableOpacity style={styles.body}>
            <AntDesign name="exclamationcircle" color={'#005500'} size={20} />
              <Text style={styles.list}>About</Text>
              <MaterialIcons name="keyboard-arrow-right" size={25} style={{color: '#000'}} />
            </TouchableOpacity>
            <View style={styles.body}>
              <MaterialIcons name="logout" color={'#005500'} size={20} />
              <Text style={styles.list}>Log Out</Text>
              <MaterialIcons name="keyboard-arrow-right" size={25} style={{color: '#000'}} />
            </View>
          </View>
        </Card>
        
      </ScrollView>
    </View>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 23,
    // marginVertical: 20,
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  list: {
    flex: 1, // To take up remaining space between Icon and arrow
    color: '#000', // Set text color to black
    marginLeft: 5, // Add some spacing between icon and text
  },
  text: {
    color: 'black',
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 10,
  },
  // list: {
  //   color: 'black',
  //   marginVertical: 10,
  //   fontWeight: '800',
  // },
});

export default AccountPage;
