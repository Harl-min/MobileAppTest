/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Dimensions,
  ImageBackground,
  ImageProps,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Card, Text} from 'react-native-paper'
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import {Avatar, Button} from 'react-native-paper';

const AccountCard = () => {
  return (
    <View>
      <Card style={styles.container}>
        <View>
          <View style={styles.avatar}>
            <Avatar.Text size={64} label="HM" />
            <Text style={styles.username}>Harl Meen</Text>
            <Text style={styles.text}>Harlmeen51@gmail.com</Text>
          </View>
          <Button
            icon="camera"
            mode="contained"
            buttonColor="#005500"
            textColor="#fff"
            onPress={() => console.log('Pressed')}>
            Press me
          </Button>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  container: {
    marginVertical: 8,
    borderRadius: BORDERRADIUS.radius_10,
    padding: 13,
    backgroundColor: 'white',
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    fontSize: 22,
    fontWeight: '800',
    color: 'black',
    marginTop: 10
  },
  text: {
    fontSize: 14,
    color: 'black',
    fontWeight: '100'
  },
});

export default AccountCard;
