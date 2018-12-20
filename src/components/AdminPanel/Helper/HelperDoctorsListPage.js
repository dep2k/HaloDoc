import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList
} from "react-native";
import { I18n } from "aws-amplify";
import { Cache } from "aws-amplify";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { ListDoctors } from "../../../Queries/DoctorAPI";
import Loader from "../../../ActivityIndicator";
import { Avatar } from "react-native-elements";
import { NavBar } from "../../Reusable/NavBar";

const base = "../../../images/";
const backgroundImage = require(base + "newBackground.png");
const backButtonImage = require(base + "BackButtonShape.png");
const navBarImage = require(base + "navbarImage.png");
const addIcon = require(base + "addIcon.png");
const placeHolderImage = require(base + "placeholderImage.png");

class DataListItem extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.listCell}>
        <Avatar
          medium
          rounded
          source={placeHolderImage}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
        <View style={styles.textsView}>
          <Text style={styles.nameText}>{this.props.item.name}</Text>
          <Text style={styles.categoryText}>{I18n.get("Specialist")+ ": " + this.props.item.speciality}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

class HelperDoctorsListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctorsListData: [],
      animating: false
    };

    const { navigation } = this.props;
    this.nameOfPage = navigation.getParam("nameOfPage");

    this.backButtonClick = this.backButtonClick.bind(this);
    this._handleRowClick = this._handleRowClick.bind(this);
    this.addButtonClick = this.addButtonClick.bind(this);
  }
  componentDidMount() {
    this.startActivityIndicator();
    const listInput = { nextToken: null };

    API.graphql(graphqlOperation(ListDoctors, listInput))
      .then(response => {
        console.log("List shown");
        console.log(response);
        this.setState({
          doctorsListData: response.data.listDoctors.items
        });
        this.closeActivityIndicator();
      })
      .catch(err => {
        console.log("Failed to show list");
        console.log(err);
        this.closeActivityIndicator();
      });
  }
  startActivityIndicator() {
    this.setState({ animating: true });
  }

  closeActivityIndicator() {
    this.setState({ animating: false });
  }
  backButtonClick() {
    this.props.navigation.goBack(null);
  }
  addButtonClick() {
    this.props.navigation.push("AdminAddDoctorPage");
  }

  _handleRowClick(item) {
    this.props.navigation.navigate("VetProfile", { docInfo: item });
  }

  renderAddButton() {
    if (this.nameOfPage == "AdminPage") {
      return (
        <View style = {styles.addButtonContainer}>
          <TouchableOpacity
            style={styles.addButtonStyle}
            onPress={() => this.addButtonClick()}
          >
            <Image
              source={addIcon}
              style={styles.addIconStyle}
              imageStyle={styles.addIconImageStyle}
            />
          </TouchableOpacity>
        </View>
      );
    } else {
    }
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <NavBar showBackBtn="false" onBackPress={this.backButtonClick} />
        {this.renderAddButton()}

        <Text style={styles.doctorsDirectoryText}>
          {I18n.get("DoctorsDirectory")}
        </Text>
        <View style={styles.flatList}>
          <FlatList
            data={this.state.doctorsListData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              return (
                <DataListItem
                  onPress={() => this._handleRowClick(item)}
                  item={item}
                  index={index}
                />
              );
            }}
          />
        </View>
        {/* </ImageBackground>  */}
        {this.state.animating && <Loader animating={this.state.animating} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  topContainer: {
    height: 70,
    width: "100%",
    flexDirection: "row",
    // backgroundColor: "blue",
    justifyContent: "space-between",
    alignItems: "center"
  },
  backButtonStyle: {
    marginTop: 30,
    marginLeft: 20,
    width: 30,
    height: 30
  },
  addButtonContainer : {
    height: 40, 
    width: "100%",
    flexDirection: 'row', 
    justifyContent: 'flex-end', 
    alignItems: 'center'
  },
  addButtonStyle: {
    marginTop: 30,
    marginRight: 25,
    width: 30,
    height: 30
  },
  backButtonImageStyle: {
    width: 30,
    height: 30,
    resizeMode: "contain"
  },
  fullBackgroundImage: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  fullbackgroundImageStyle: {
    position: "absolute",
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "transparent"
  },
  doctorsDirectoryText: {
    fontSize: 21,
    color: "black",
    marginTop: "10%",
    marginBottom: 35
  },
  flatList: {
    width: "100%",
   // backgroundColor: "green",
    flex: 0.95
  },
  listCell: {
    flexDirection: "row",
    width: "100%",
    height: 40,
    // backgroundColor: "yellow",
    marginBottom: 25,
    marginLeft: 10
  },
  nameText: {
    color: "black",
    fontSize: 18,
    padding: 2
  },
  categoryText: {
    color: "black",
    fontSize: 13,
    padding: 2,
    marginBottom: 10
  },
  listProfilePic: {
    height: 30,
    width: "10%",
    marginTop: "3%",
    marginLeft: "5%",
    marginRight: "5%",
    backgroundColor: "black"
  },
  textsView: {
    flexDirection: "column",
    height: 40,
    marginLeft: 10
  },
  addIconStyle: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain"
  }
});
export default HelperDoctorsListPage;
