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
import {Card, Text} from 'react-native-paper';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import {Avatar, Button} from 'react-native-paper';

interface Card {
  title: string;
}

const AccountCard = ({title}: Card) => {
  return (
    <View>
      <Card style={styles.container}>
        <TouchableOpacity>
          <View>
            <View style={styles.avatar}>
              <Avatar.Icon size={24} icon="folder" />
              <Text style={styles.username}>{title}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    justifyContent: 'center',
    marginBottom: 20,
    width: '100%',
  },
  container: {
    marginVertical: 8,
    borderRadius: BORDERRADIUS.radius_10,
    backgroundColor: 'white',
    padding: 20,
    width: 175,
    height: 130,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  username: {
    fontSize: 16,
    fontWeight: '800',
    color: 'black',
    marginTop: 10,
  },
  text: {
    fontSize: 14,
    color: 'black',
    fontWeight: '100',
  },
});

export default AccountCard;
