/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  textInputContainer: {
    backgroundColor: "F0F3F3",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 16,
    padding: 13,
    marginBottom: 14,
  },
  label: {
    marginLeft: 6,
    marginBottom: 2,
    color: "#252525",
  },

  input: {
    height: 50,
    margin: 2,
    marginBottom: 0,
    borderWidth: 0,
    padding: 12,
    borderRadius: 12,
    backgroundColor: "#F0F3F3",
    color: "#3C3C43",
  },

  errorText: {
    color: "red",
  },

  errorContainer: {
    paddingLeft: 20,
  },
});
