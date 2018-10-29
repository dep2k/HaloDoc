import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground,
  FlatList
} from "react-native";
import SVGImage from "react-native-svg-image";
import { I18n } from "aws-amplify";
import { Cache } from "aws-amplify";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { ListDoctors } from "../../../Queries/DoctorAPI";
import Loader from "../../../ActivityIndicator";
import { Avatar } from "react-native-elements";

const base = "../../../images/";
const backgroundImage = require(base + "newBackground.png");
const backButtonImage = require(base + "BackButtonShape.png");

// const listInput = {nextToken:null};
// API.graphql(graphqlOperation(ListDoctors, listInput))
//   .then(data => {
//     console.log("List shown");
//     console.log(data);
//     this.closeActivityIndicator();
//   })
//   .catch(err => {
//     console.log("Failed to show list");
//     console.log(err);
//     this.closeActivityIndicator();
//   });
class DataListItem extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.listCell}>
        <Avatar
          medium
          rounded
          source={{
            uri:
              "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
          }}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
        <View style={styles.textsView}>
          <Text style={styles.nameText}>{this.props.item.name}</Text>
          <Text style={styles.categoryText}>{this.props.item.speciality}</Text>
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

    this.backButtonClick = this.backButtonClick.bind(this);
    this._handleRowClick = this._handleRowClick.bind(this);
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
  _handleRowClick() {
    //this.props.navigation.navigate("VetProfile");

    this.props.navigation.setParams({ itemId: "86" });
    this.props.navigation.navigate("VetProfile");
  }

  logOutButtonClick() {
    // this.props.navigation.dispatch(
    //   this.props.NavigationActions.reset({
    //     index: 1,
    //     actions: [
    //       this.props. NavigationActions.navigate({ routeName: 'Router' }),
    //       this.props. NavigationActions.navigate({ routeName: 'LoginPage' }),
    //     ],
    //   }),
    // )
  }

  static navigationOptions = ({ navigation }) => ({
    headerTitle: <SVGImage style={StyleSheet.absoluteFill} />
  });
  render() {
    return (
      <View style={styles.mainContainer}>
        <ImageBackground
          source={backgroundImage}
          style={styles.fullBackgroundImage}
          imageStyle={styles.fullbackgroundImageStyle}
        >
          <View style={styles.topContainer}>
            <TouchableOpacity
              style={styles.backButtonStyle}
              onPress={this.backButtonClick}
            >
              <Image
                source={backButtonImage}
                style={styles.backButtonImageStyle}
              />
            </TouchableOpacity>
          </View>
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
                    onPress={this._handleRowClick}
                    item={item}
                    index={index}
                  />
                );
              }}
            />
          </View>
        </ImageBackground>
        {this.state.animating && <Loader animating={this.state.animating} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  topContainer: {
    height: "7%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  backButtonStyle: {
    backgroundColor: "transparent",
    width: "20%",
    height: "25%",
    marginLeft: "1%",
    marginTop: "7%",
    justifyContent: "center",
    alignItems: "center"
  },
  backButtonImageStyle: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
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
    color: "white",
    marginTop: "10%"
  },
  flatList: {
   // backgroundColor: 'black',
    width: "100%",
    marginTop: "13%"
    // backgroundColor: 'green',
  },
  listCell: {
    flexDirection: "row",
    width: "100%",
    height: 40,
    // backgroundColor: "yellow",
    marginBottom: 25,
    marginLeft: 10,
    
  },
  nameText: {
    color: "white",
    fontSize: 18,
    padding: 2
  },
  categoryText: {
    color: "white",
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
  }
});
export default HelperDoctorsListPage;
