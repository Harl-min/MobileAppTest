/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Dimensions,
  ImageBackground,
  ImageProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const CARD_WIDTH = Dimensions.get('window').width * 0.32;

interface CoffeeCardProps {
  id: string;
  index: number;
  roasted?: string;
  name?: string;
  description?: string;
  ingredients?: string;
  special_ingredient?: string;
  handleSubmit: (value: any) => void;
}

const LocationCard: React.FC<CoffeeCardProps> = ({
  id,
  index,
  roasted,
  name,
  description,
  ingredients,
  special_ingredient,
  handleSubmit,
}) => {
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.list} onPress={handleSubmit}>
          <View style={styles.content}>
            <View style={styles.subheader}>
              <Text style={styles.subtitle}>{name}</Text>
              <View style={styles.subtitle2}>
              <Icon
              name="location-outline"
              size={12}
              color="black"
              style={styles.IconContainer}/>
              <Text style={styles.subtitle2}> {description}</Text>
              </View>
              <View style={styles.subtitle2}>
              <FeatherIcon
              name="phone"
              size={12}
              color="black"
              style={styles.IconContainer}/>
              <Text style={styles.subtitle2}> {roasted}</Text>
              </View>
              <View style={styles.subtitle2}>
              <FeatherIcon
              name="clock"
              size={12}
              color="black"
              style={styles.IconContainer}/>
              <Text style={styles.subtitle2}> {ingredients}</Text>
              </View>
              <View style={styles.subtitle2}>
              <MaterialCommunityIcon
              name="briefcase-variant-outline"
              size={12}
              color="black"
              style={styles.IconContainer}/>
              <Text style={styles.subtitle3}> {special_ingredient}</Text>
              </View>
            </View>
            <Icon name="arrow-forward" size={20} color="black" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    borderRadius: BORDERRADIUS.radius_10,
    padding: 13
  },
  list: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  IconContainer: {
    color: COLORS.primaryGradient,
  },
  subheader: {
    flexDirection: 'column',
    marginRight: 80,
  },
  subheader2: {
    flexDirection: 'column',
    marginRight: 70,
  },
  LottieAnimation: {
    height: '100%',
    backgroundColor: COLORS.primaryWhite,
  },
  subtitle: {
    fontSize: FONTSIZE.size_12,
    fontWeight: '600',
    color: COLORS.primaryBlackHex,
  },
  subtitle2: {
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryBlackHex,
    flexDirection: 'row',
    alignItems: 'center'
  },
  subtitle3: {
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryGradient,
  },
  text: {
    fontSize: 16,
  },
});

export default LocationCard;
