import React from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground,
    FlatList
} from "react-native";
import SVGImage from "react-native-svg-image";
import { I18n } from "aws-amplify";
import doctorsListdata from "../../../data/doctorsListdata";


const base = "../../../images/"
const backgroundImage = require(base + "newBackground.png")
const backButtonImage = require(base + "BackButtonShape.png");

class DataListItem extends React.Component {
    render() {
        return (
            <View style = {styles.listCell}>
                 <Image style = {styles.listProfilePic}
                       // source= {{uri: this.props.item.imageUrl}}
                       >
                 </Image>
                 <View style = {styles.textsView}>
                    <Text style={styles.nameText}>
                        {this.props.item.name}
                    </Text>
                    <Text style={styles.categoryText}>
                        {this.props.item.category}
                    </Text>
                 </View>
                
            </View>
        );
    }
}

class HelperDoctorsListPage extends React.Component {
    constructor(props) {
        super(props);
        this.backButtonClick = this.backButtonClick.bind(this);
        
    }
    backButtonClick() {
        this.props.navigation.goBack(null);
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
                            data={doctorsListdata}
                            renderItem={({ item, index }) => {
                                return (
                                    <DataListItem item={item} index={index}>

                                    </DataListItem>
                                );
                            }}
                        >

                        </FlatList>
                    </View>
                   
                </ImageBackground>
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
    width: "100%",
    marginTop: "13%"
    // backgroundColor: 'green',
  },
  listCell: {
    flexDirection: "row",
    width: "100%",
    height: 40,
   // backgroundColor: "yellow",
    marginBottom: "5%"
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
    marginTop:"3%",
    marginLeft: "5%",
    marginRight: "5%",
    backgroundColor: 'black'
  },
  textsView:{
      flexDirection: "column",
      height: 40
  }
});
export default HelperDoctorsListPage;
