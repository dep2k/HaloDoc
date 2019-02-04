import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList
} from "react-native";

import {getImage} from '../../ImageHelper';
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
const doctorIcon = require(base + "listOfDoctorsIconGreen.png")
const placeHolderImage = require(base + "placeholderImage.png");

class DataListItem extends React.Component {
  render() {
    const base64 = `${this.props.item.profilePic}`;
		console.log("​Rerendering -> DataListItem -> render -> base64", base64)
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.listCell}>
        <Avatar
          medium
          rounded
          source={{uri: base64}}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
        <View style={styles.textsView}>
          <Text style={styles.nameText}>{this.props.item.name}</Text>
          <Text style={styles.categoryText}>{I18n.get("Specialist")+ ": " + I18n.get(this.props.item.speciality.toLowerCase())}</Text>
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
      animating: false,
      profilePics:[]
    };

    const { navigation } = this.props;
    this.nameOfPage = navigation.getParam("nameOfPage");
    this.backButtonClick = this.backButtonClick.bind(this);
    this._handleRowClick = this._handleRowClick.bind(this);
    this.addButtonClick = this.addButtonClick.bind(this);
    this.getImagesForItems = this.getImagesForItems.bind(this);
    this.getImageForItem = this.getImageForItem.bind(this);
  }

   async getImageForItem(item) {
      const s3Object = item.s3Object;
      if(s3Object){
        const bucket = s3Object.bucket;
        const key = s3Object.key;
        console.log("Calling Get Image For Item With Key",key);
        const result = await getImage(key,bucket);
        console.log("​HelperDoctorsListPage -> getImage -> result");
        item.profilePic = result;
        items[item.index] = item;
        console.log("Before Updating the state with the images");
        this.setState({
          doctorsListData: []
        });

        this.setState({
          doctorsListData: items
        });
        
       
      }
   
  }


  componentDidMount() {

    this.startActivityIndicator();
    const listInput = { nextToken: null };
    API.graphql(graphqlOperation(ListDoctors, listInput))
      .then(response => {
        items = response.data.listDoctors.items;
        for(i = 0; i < items.length; i++){
            items[i]["index"] = i;
        }
        this.setState({
          doctorsListData: items
        });

        //this.getImageForItem(items[0])
        this.getImagesForItems();
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


   getImagesForItems() {
    items.forEach(item => {
      if(item) {
				console.log('TCL: HelperDoctorsListPage -> getImagesForItems -> item', item)
        this.getImageForItem(item);
      }
    });
  }


  render() {
    return (
      <View style={styles.mainContainer}>
        <NavBar showBackBtn="false" onBackPress={this.backButtonClick} />
        {this.renderAddButton()}
        <View style={styles.headingTextStyle}>
           <Image
            style={styles.iconImagesStyle} source={doctorIcon}>
          </Image> 
          <Text style={styles.doctorsDirectoryText}>
            {I18n.get("DoctorsDirectory")}
          </Text>
        </View>

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
        {this.state.animating && (
          <Loader animating={this.state.animating} />
        )}
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
  addButtonContainer: {
    height: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
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
    
  },
  headingTextStyle: {
    flexDirection: 'row',
     height: 80,
     width: "90%",
     justifyContent: 'flex-start',
     alignItems: 'center',
   //  backgroundColor: 'pink'
  },
  iconImagesStyle: {
    width: 30,
    height: 30,
    marginLeft: "5%",
    marginRight: "5%",
    resizeMode: "contain"
  },
  flatList: {
    width: "100%",
    // backgroundColor: "green",
    flex: 0.95
  },
  listCell: {
    flexDirection: "row",
    width: "100%",
    height: 50,
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
  },

});
export default HelperDoctorsListPage;
