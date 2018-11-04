import React from "react";
import {
    View,
    ScrollView,
    Image,
    TextInput,
    StyleSheet,
    Text,
    TouchableOpacity,
    ImageBackground,
    FlatList,
    Button,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Keyboard,
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

class Page1 extends React.Component {

    render() {
        return (
            <Text>Page1</Text>
        );
    }

}

class Page2 extends React.Component {

    render() {
        return (
            <Text>Page2</Text>
        );
    }

}

class Page3 extends React.Component {

    render() {
        return (
            <Text>Page3</Text>
        );
    }

}

class QuestionsPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            pageNo: "2"
        }
        this.continueBtnClick = this.continueBtnClick.bind(this);
        this.backButtonClick = this.backButtonClick.bind(this);
    }

    continueBtnClick() {

        const { navigation } = this.props;
        const pet = navigation.getParam('petInfo');
        this.props.navigation.navigate("PostQuestionsPage", {
            petInfo: pet,
        });

    }


    backButtonClick() {
        this.props.navigation.goBack(null);
    }




    render() {

        const { navigation } = this.props;
        const pet = navigation.getParam('petInfo');
        const petName = pet.name;
        const petCategory = pet.category;
        const navTitle = petName + " - " + petCategory;

        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.mainContainer}>
                    <NavBar onBackPress={this.backButtonClick} title={navTitle.toUpperCase()}></NavBar>
                    {/* { {this.state.pageNo == 1 && <Page1></Page1> }
                {this.state.pageNo == 2 && <Page2></Page2> }
                {this.state.pageNo == 3 && <Page3></Page3> }}  */}
                    <ScrollView style={styles.mainContainer}>
                        <View style={styles.contentView}>
                            <View style={styles.questionAnswerView}>
                                <Text>Some Title Value</Text>
                                <TextInput
                                    style={styles.answerTextInput}
                                    onChangeText={(text) => this.setState({ text })}
                                    value={this.state.text}
                                />
                            </View>

                            <View style={styles.questionAnswerView}>
                                <Text>Some Title Value</Text>
                                <TextInput
                                    style={styles.answerTextInput}
                                    onChangeText={(text) => this.setState({ text })}
                                    value={this.state.text}
                                />
                            </View>

                            <View style={styles.questionAnswerView}>
                                <Text>Some Title Value</Text>
                                <TextInput
                                    style={styles.answerTextInput}
                                    onChangeText={(text) => this.setState({ text })}
                                    value={this.state.text}
                                />
                            </View>

                            <View style={styles.questionAnswerView}>
                                <Text>Some Title Value</Text>
                                <TextInput
                                    style={styles.answerTextInput}
                                    onChangeText={(text) => this.setState({ text })}
                                    value={this.state.text}
                                />
                            </View>

                            <View style={styles.questionAnswerView}>
                                <Text>Some Title Value</Text>
                                <TextInput
                                    style={styles.answerTextInput}
                                    onChangeText={(text) => this.setState({ text })}
                                    value={this.state.text}
                                />
                            </View>
                            <Button style={styles.marginBottom} onPress={this.continueBtnClick} title="Continue"></Button>
                            />
                </View>

                    </ScrollView>
                </View>
            </TouchableWithoutFeedback>

        );
    }

}

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: "white"
    },

    contentView: {
        height: "90%"
    },

    questionAnswerView: {
        padding: 20,
    },

    questionText: {

    },

    answerTextInput: {
        height: 140, borderColor: 'gray', borderWidth: 1
    },

    continueBtn: {
        marginBottom: 30,
    }


})


export default QuestionsPage;
