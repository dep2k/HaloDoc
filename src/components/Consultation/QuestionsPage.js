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
import {Footer} from "../Reusable/Footer";
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
            set1: {
                question: I18n.get("Question1"),
                answer:null
            },
            set2: {
                question: I18n.get("Question2"),
                answer:null
            },
            set3: {
                question: I18n.get("Question3"),
                answer:null
            },
            set4: {
                question: I18n.get("Question4"),
                answer:null
            },
            set5: {
                question: I18n.get("Question5"),
                answer:null
            },
        }
        this.continueBtnClick = this.continueBtnClick.bind(this);
        this.backButtonClick = this.backButtonClick.bind(this);
    }

    continueBtnClick() {

        const { navigation } = this.props;
        const pet = navigation.getParam('petInfo');
        this.props.navigation.navigate("PostQuestionsPage", {
            petInfo: pet,
            questions: [this.state.set1,
                this.state.set2,
                this.state.set3,
                this.state.set4,
                this.state.set5]
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
                                <Text>{this.state.set1.question}</Text>
                                <TextInput
                                    style={styles.answerTextInput}
                                    multiline = {true}
                                    onChangeText={text => this.setState(state => ((state.set1.answer = text), state))}
                                    value={this.state.set1.answer}
                                />
                            </View>

                            <View style={styles.questionAnswerView}>
                                <Text>{this.state.set2.question}</Text>
                                <TextInput
                                    style={styles.answerTextInput}
                                    multiline = {true}
                                    onChangeText={text => this.setState(state => ((state.set2.answer = text), state))}
                                    value={this.state.set2.answer}
                                />
                            </View>

                            <View style={styles.questionAnswerView}>
                                <Text>{this.state.set3.question}</Text>
                                <TextInput
                                    style={styles.answerTextInput}
                                    multiline = {true}
                                    onChangeText={text => this.setState(state => ((state.set3.answer = text), state))}
                                    value={this.state.set3.answer}
                                />
                            </View>

                            <View style={styles.questionAnswerView}>
                                <Text>{this.state.set4.question}</Text>
                                <TextInput
                                    style={styles.answerTextInput}
                                    multiline = {true}
                                    onChangeText={text => this.setState(state => ((state.set4.answer = text), state))}
                                    value={this.state.set4.answer}
                                />
                            </View>

                            <View style={styles.questionAnswerView}>
                                <Text>{this.state.set5.question}</Text>
                                <TextInput
                                    style={styles.answerTextInput}
                                    multiline = {true}
                                    onChangeText={text => this.setState(state => ((state.set5.answer = text), state))}
                                    value={this.state.set5.answer}
                                />
                            </View>
                            />
                </View>

                    </ScrollView>

                <Footer  style = {styles.footer} showBtn = {true} onPress = {this.continueBtnClick}></Footer>
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
        height: 140, borderColor: 'gray', 
        borderWidth: 1
    },

    continueBtn: {
        marginBottom: 30,
    }


})


export default QuestionsPage;
