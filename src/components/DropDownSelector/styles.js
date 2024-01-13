/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {FONTSIZE, COLORS} from '../../theme/theme';

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
  input: {
    height: 40,
    // margin: 2,
    borderWidth: 0,
    // backgroundColor: COLORS.primaryGreyHex,
    color: "#000",
  },
  label: {
    marginLeft: 6,
    marginBottom: 2,
    fontSize: 14,
    color: COLORS.primaryGradient,
  },

  dropDownIcon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#F0F3F3",
    height: 50,
    borderRadius: 16,
    padding: 1,
    margin: 2,
  },

  icon: {
    color: "#5B5B5B",
    paddingTop: 10,
    height: 10,
  },

  selectOptionInput: {
    width: "95%",
    height: 50,
    color: "#3C3C43",
    padding: 10,
  },

  modalContainerStyle: {
    height: 300,
    width: 300,
    borderWidth: 1,
  },

  modalContainer: {
    flex: 1,
    marginTop: 230,
    backgroundColor: "white",
    borderRadius: 20,

    shadowColor: "#000",
    // shadowOffset: {
    //     width: 0,
    //     height: 2,
    // },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modalHeaderContainerStyle: {
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#CDCDB9",
    padding: 20,
  },
  modalHeaderStyle: {
    color: COLORS.primaryColor,
    fontSize: FONTSIZE.medium,
  },

  flatListStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    marginLeft: 34,
    marginRight: 34,
    borderColor: "#CDCDB9",
    paddingTop: 20,
    paddingBottom: 20,
  },

  subLabelStyle: {
    color: COLORS.primaryColor,
  },
});
