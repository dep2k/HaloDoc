import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    flex: 1
  },

  scrollview: {
    flexDirection: "column",
    backgroundColor: "white",
    //  justifyContent: "flex-start",
    //  marginTop: 10,
    alignSelf: "stretch",
    marginBottom: 20
  },

  headerContainer: {
    height: 60,
    marginTop: 0,
    width: "100%",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center"
  },
  headerImage: {
    width: "100%",
    height: "100%"
  },

  profileImage: {
    height: 80,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
    // backgroundColor: "black"
  },

  clinicHistoryText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#BED885",
    width: "80%",
    marginBottom: "5%",
    marginTop: "5%",
    marginHorizontal: "10%",
    textAlign: "center"
  },
  clinicHistoryContainer: {
    height: 270,
    width: "90%",
    marginHorizontal: "5%"
  },

  TextInputContainer: {
    flexDirection: "row",
    height: 40,
    width: "100%",
    alignItems: "center"
    // backgroundColor: "yellow"
  },

  originSelfText: {
    width: 105,
    fontSize: 14,
    alignSelf: "center",
    color: "#8BE0DE"
    //backgroundColor: 'black'
  },

  originText: {
    width: 105,
    fontSize: 14,
    alignSelf: "center",
    color: "#8BE0DE",
    marginRight: 3
    //backgroundColor: 'black'
  },

  lastLineStyle: {
    width: "100%",
    height: 0.5,
    backgroundColor: "darkgrey"
  },

  lastLineWithMarginBottom: {
    width: "100%",
    height: 0.5,
    backgroundColor: "darkgrey"
    //  marginBottom: 5
  },

  backButtonStyle: {
    backgroundColor: "transparent",
    width: 30,
    height: 40,
    marginLeft: 20,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center"
  },

  backButtonImageStyle: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain"
  },

  vaccinationText: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 20,
    color: "#BED885",
    width: "80%",
    marginBottom: 20,
    marginHorizontal: "10%",
    textAlign: "center"
    // backgroundColor: "black"
  },

  checkboxContainerStyle: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    width: "12%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -10
  },

  vacCheckboxContainerStyle: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    width: "18%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -10
  },

  vaccinationContainer: {
    height: 185,
    width: "90%",
    marginHorizontal: "5%"
    // backgroundColor : "grey"
  },

  firstTextInputContainer: {
    flexDirection: "row",
    height: 40,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center"
    //  marginTop: 10
  },

  pvcText: {
    width: "17%",
    color: "#8BE0DE",
    textAlign: "left",
    marginRight: 2,
    //backgroundColor: "orange",
    fontSize: 14
  },
  dogVacText: {
    width: "20%",
    color: "#8BE0DE",
    textAlign: "left",
    marginRight: 10,
    // backgroundColor: "green",
    fontSize: 14
  },
  horseVacText: {
    width: 100,
    color: "#8BE0DE",
    textAlign: "left",
    marginRight: 10,
    // backgroundColor: "green",
    fontSize: 14
  },

  despaText: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 20,
    color: "#BED885",
    width: "80%",
    marginBottom: 20,
    marginHorizontal: "10%",
    textAlign: "center"
  },

  despaContainer: {
    height: 150,
    width: "90%",
    marginHorizontal: "5%"
  },

  vaccAndDespatextInputStyle: {
    width: "35%",
    height: 30,
    //color: "grey",
    //backgroundColor:"yellow",
    fontSize: 13
  },

  productTextInputStyle: {
    width: "35%",
    height: 30,
    color: "grey",
    fontSize: 13
    // backgroundColor: "grey"
  },

  productText: {
    width: "13%",
    color: "#8BE0DE",
    textAlign: "left",
    marginRight: 15
  },

  feedingText: {
    width: "36%",
    color: "#8BE0DE",
    textAlign: "left",
    marginRight: 15,
    // backgroundColor: "black",
    fontSize: 14
  },
  fetchaText: {
    width: "16%",
    color: "#8BE0DE",
    textAlign: "left",
    marginRight: 15
  },
  saveButtonContainer: {
    flexDirection: "column",
    marginTop: "15%",
    width: "90%",
    marginHorizontal: "5%",
    height: 150,
    justifyContent: "center",
    alignItems: "center"
    //backgroundColor: "yellow"
  },
  saveButtonStyle: {
    height: 40,
    width: "98%",
    borderRadius: 20,
    //backgroundColor: "seagreen",
    justifyContent: "center",
    alignItems: "center"
  },
  saveButtonTextStyle: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold"
  },
  saveAndRegisterButton: {
    height: 40,
    width: "98%",
    borderRadius: 20,
    //backgroundColor: "seagreen",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15
  },
  saveAndRegisterText: {
    color: "white",
    fontSize: 13,
    fontWeight: "bold"
  },

  cellContainer: {
    height: 30,
    marginHorizontal: "5%"
  },

  originTextInputStyle: {
    flexDirection: "row",
    width: "70%",
    height: 30,
    color: "grey",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 13
  },

  dropDownButtonStyle: {
    flexDirection: "row",
    width: "63%",
    //  backgroundColor: 'pink',
    height: 30,
    justifyContent: "space-between",
    alignItems: "center"
  },
  dropDownButtonTextStyle: {
    fontSize: 14,
    alignSelf: "center",
    color: "grey"
  },

  dropDownIconStyle: {
    height: 10,
    width: 10
  },

  listText: {
    fontSize: 20,
    marginLeft: 150
  },

  nameText: {
    color: "#8BE0DE",
    fontSize: 18,
    padding: 2
  },

  flatListContentContainerStyle: {
    alignSelf: "center",
    width: 300,
    marginTop: 200,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },

  buttonImageBackgroundStyle: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },

  buttonImageBackgroundImageStyle: {
    borderRadius: 20
  }
});
