
import LoginPage from '../components/LoginAndSignup/LoginPage'
import MainMenuPage from '../components/MainMenuPage'
import  TestPage from '../components/TestPage'
import TextInputUI from '../components/TextInputUI'
import TestPageUI from '../components/TestPageUI'
import ButtonUI from '../components/ButtonUI'


import { createStackNavigator } from 'react-navigation'


const AppStackNavigator = createStackNavigator({
    ButtonUI: ButtonUI,
    TextInputUI: TextInputUI,
    TestPageUI : TestPageUI,
    Test: TestPage,
    Login: LoginPage,
    Menu: MainMenuPage,

})

export default AppStackNavigator;