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
import { Cache } from "aws-amplify";
import { btnBackgroundImage, handIcon } from "../../images/resource";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import Loader from "../../ActivityIndicator";
import { GetPets } from "../../Queries/PetAPI";
import { Avatar } from "react-native-elements";
import { NavBar } from "../Reusable/NavBar";
import {LogoImage} from "../Reusable/LogoImage";

const base = "../../images/";
const petProfileImage = require(base + "petPlaceholderImage.jpg");

class PetChooserPage extends React.Component {

    constructor(props) {

        super(props);

        this.state = { isLoading: true, dataSource: [] };
        this.backButtonClick = this.backButtonClick.bind(this);
        this.petButtonClick = this.petButtonClick.bind(this);

        Cache.getItem("User").then(user => {
            if (user) {
                const getPetsInput = {
                    username: user.userName
                }
                API.graphql(graphqlOperation(GetPets, getPetsInput)).then(response => {
                    console.log("Pets Received");
                    console.log(response);
        
                    this.setState({
                        isLoading: false,
                        dataSource: response.data.getPets.items
                    });
        
                }).catch(err => {
                    console.log("Failed to add doctor");
                    console.log(err);
        
                });
            } 
          });
    }

    petButtonClick(item) {
        console.log(item);
        this.props.navigation.navigate("PaymentInfoPage",{
            petInfo:item,
        });
    }


    backButtonClick() {
        console.log("BackBtnClick");
        this.props.navigation.goBack(null);
    }

    listBtnClick(item) {
        console.log("List Btn Click");
        console.log(item);
    }

    render() {

  
        return (
            <View style={styles.mainContainer}>

                <NavBar onBackPress={this.backButtonClick} ></NavBar>
                <LogoImage></LogoImage>

                <View style={styles.descriptionView}>

                    <Image
                        source={handIcon}
                        style={styles.handSymbol}
                    />

                    <Text style={styles.descriptionText}
                        numberOfLines={2}>{I18n.get('SelectYourPet')}
                    </Text>

                </View>

                {this.state.isLoading && <Loader animating={this.state.isLoading} />}
                <FlatList
                    style={styles.petListContainer}
                    data={this.state.dataSource}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (

                        <TouchableOpacity
                            style={styles.listItemCotainer}
                            onPress = {()=>this.petButtonClick(item)}
                        >
                            <View style={styles.petButtonContainer}>
                                <ImageBackground
                                    source={btnBackgroundImage}
                                    style={styles.imageBackgroundStyle}
                                    imageStyle={styles.imageBackgroundImageStyle}
                                >
                                    <Text style={styles.imageBackgroundTextStyle}>
                                        {item.name.toUpperCase()}
                                    </Text>
                                </ImageBackground>
                                <Text style={styles.petCategoryText}>
                                    {item.category.toUpperCase()}
                                </Text>

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

        marginTop: 50,
        flexDirection: "column",
        backgroundColor: "transparent",

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
        backgroundColor: "transparent",

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
    imageBackgroundStyle: {
        width: "90%",
        height: "100%",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    imageBackgroundTextStyle: {
        color: "white",
        fontSize: 20
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
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'

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
        marginLeft: 20,
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },

    handSymbol: {
        width: 30,
        height: 30
    },

    descriptionText: {
        marginLeft: 15,
        fontSize: 14,
        width: "70%",

    },

    backBtn: {
        marginLeft: 20,
        width: 30,
        height: 30,
    },

    backBtnImage: {
        width: 30,
        height: 30,
        resizeMode: "contain",
    }
})


export default PetChooserPage;
