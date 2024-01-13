/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/theme';
import { FONTSIZE } from '../../theme/theme';

export const styles = StyleSheet.create({
  textInputContainer: {
    backgroundColor: "F0F3F3",
    borderWidth: 1,
    borderColor: COLORS.primaryGradient,
    borderRadius: 16,
    marginBottom: 40,
    height: 65,
    padding: 10
  },
  label: {
    marginLeft: 6,
    color: COLORS.primaryGradient,
    fontSize: FONTSIZE.size_12
  },

  input: {
    height: 40,
    // margin: 2,
    borderWidth: 0,
    // backgroundColor: COLORS.primaryGreyHex,
    color: "#000",
  },

  errorText: {
    color: "red",
  },

  errorContainer: {
    paddingLeft: 20,
  },
});
