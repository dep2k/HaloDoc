import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Button,
  ActivityIndicator
} from "react-native";
import { I18n } from "aws-amplify";

import { navBarImage } from "../../images/resource";
import { backBtnImage } from "../../images/resource";
import { btnBackgroundImage } from "../../images/resource";
import { logoImage } from "../../images/resource";
import Amplify, { API, graphqlOperation } from "aws-amplify";

import { GetPets } from "../../Queries/PetAPI";
import { Avatar } from "react-native-elements";
import { NavBar } from "../Reusable/NavBar";

const base = "../../images/";
const myProfileImage = require(base + "myProfileImage.png");
const petProfileImage = require(base + "petPlaceholderImage.jpg");
const addIcon = require(base + "addIcon.png");
const editIcon = require(base + "editIcon.png")
import Loader from "../../ActivityIndicator";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataSource: [] };

    const { navigation } = this.props;
    this.myUsername = navigation.getParam("username");
     

    this.backButtonClick = this.backButtonClick.bind(this);
    this.petButtonClick = this.petButtonClick.bind(this);
    this.addButtonClick = this.addButtonClick.bind(this);
    this.editButtonClick = this.editButtonClick.bind(this);
  }

  editButtonClick() {
    this.props.navigation.navigate("UpdateProfilePage");
  }
  petButtonClick() {
    // this.props.navigation.navigate("HelperHistoryPage");
  }
  startActivityIndicator() {
    this.setState({ animating: true });
  }

  closeActivityIndicator() {
    this.setState({ animating: false });
  }
  componentDidMount() {
    this.startActivityIndicator();
    console.log(this.myUsername);
    const getPetsInput = { username: this.myUsername };

    API.graphql(graphqlOperation(GetPets, getPetsInput))
      .then(response => {
        // console.log("Pets Received");
        // console.log(response);

        this.setState({
          isLoading: false,
          dataSource: response.data.getPets.items
        });
        this.closeActivityIndicator();
      })
      .catch(err => {
        console.log("Failed to add doctor");
        console.log(err);
        this.closeActivityIndicator();
      });
  }
  backButtonClick() {
    console.log("BackBtnClick");
    this.props.navigation.goBack(null);
  }
  addButtonClick(nameOfPage) {
    console.log("addButtonClicked:" + nameOfPage);
    this.props.navigation.push("PetCategoriesPage", {
      pageName: nameOfPage
    });
  }

  listBtnClick(item) {
    console.log("List Btn Click");
    console.log(item);
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <NavBar showBackBtn="false" onBackPress={this.backButtonClick} />

        <Image source={logoImage} style={styles.logoImage} />

        <View style={styles.descriptionView}>
          <Image source={myProfileImage} style={styles.handSymbol} />

          <Text style={styles.myProfileText}>{I18n.get("MyProfile")}</Text>

          <TouchableOpacity
            style={styles.handSymbol}
            onPress={() =>
              this.addButtonClick("ProfilePage")
            }
          >
            <ImageBackground
              source={addIcon}
              style={styles.addIconStyle}
              imageStyle={styles.addIconImageStyle}
            />
          </TouchableOpacity>
        </View>

        <FlatList
          style={styles.petListContainer}
          data={this.state.dataSource}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.listItemCotainer}>
              <View style={styles.petButtonContainer}>
                <ImageBackground
                  source={btnBackgroundImage}
                  style={styles.imageBackgroundStyle}
                  imageStyle={styles.imageBackgroundImageStyle}
                >
                  <Text style={styles.imageBackgroundTextStyle}>
                    {item.name}
                  </Text>
                </ImageBackground>
                <Text style={styles.petCategoryText}>{item.category}</Text>
              </View>
              <View style={styles.petImageContainer}>
                <Avatar
                  medium
                  rounded
                  source={petProfileImage}
                  onPress={() => console.log("Works!")}
                  activeOpacity={0.7}
                />
              </View>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity
          style={styles.editButton}
          onPress={this.editButtonClick}
        >
          <Image source={editIcon} style={styles.editImageBackgroundStyle} />
          <Text style={styles.editButtonTextStyle}>
            {I18n.get("EditProfile")}
          </Text>
        </TouchableOpacity>
        {this.state.animating && <Loader animating={this.state.animating} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white"
  },

  petListContainer: {
    marginTop: 25,
    flexDirection: "column",
    backgroundColor: "transparent",
    marginBottom: 10
  },
  editButton: {
    flexDirection: "row",
    width: 100,
    marginBottom: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    marginLeft: 30
  },
  editImageBackgroundStyle: {
    height: 20,
    width: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  editButtonTextStyle: {
    color: "black",
    fontSize: 12,
    marginLeft: 10
  },
  listItemCotainer: {
    flexDirection: "row",
    height: 100,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent"
  },

  petButtonContainer: {
    flexDirection: "column",
    width: "75%",
    height: 40,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent"
  },

  petImageContainer: {
    width: "25%",
    height: 70,
    marginLeft: 5,
    marginBottom: 20,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "flex-start"
  },

  petCategoryText: {
    fontSize: 12,
    color: "black"
  },

  logoImage: {
    alignSelf: "flex-end",
    resizeMode: "contain",
    marginTop: 10,
    width: 80,
    height: 60,
    marginRight: 35
  },

  imageBackgroundStyle: {
    width: "90%",
    height: "100%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },

 
  imageBackgroundImageStyle: {
    borderRadius: 20
  },

  headerContainer: {
    height: "10%",
    marginTop: 0,
    width: "100%",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center"
  },

  headerImage: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },

  backButtonStyle: {
    backgroundColor: "transparent",
    width: 44,
    height: 44,
    marginLeft: 15,
    justifyContent: "center",
    alignItems: "center"
  },

  descriptionView: {
    marginHorizontal: "8%",
    width: "85%",
    marginTop: 50,
    height: 40,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
   // backgroundColor: 'black'
  },

  handSymbol: {
    width: 35,
    height: 35,
  },

  myProfileText: {
    marginLeft: 15,
    fontSize: 20,
    width: "70%",
    color: "#A4C952"
  },

  backBtn: {
    marginLeft: 20,
    width: 30,
    height: 30
  },

  backBtnImage: {
    width: 30,
    height: 30,
    resizeMode: "contain"
  },
  addIconStyle: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  addIconImageStyle: {
    resizeMode: "contain"
  }
});

export default ProfilePage;
