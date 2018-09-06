
import LoginPage from '../components/LoginAndSignup/LoginPage'
import MainMenuPage from '../components/MainMenuPage'
import  TestPage from '../components/TestPage'
import TextInputUI from '../components/TextInputUI'
import TestPageUI from '../components/TestPageUI'
import ButtonUI from '../components/ButtonUI'
import UserVetChat from '../components/Consultation/UserVetChat'
import TestLoginPage from '../components/TestLoginPage'
import { createStackNavigator } from 'react-navigation'


const AppStackNavigator = createStackNavigator({
    TestLoginPage: TestLoginPage,
    ButtonUI: ButtonUI,
    Chat: UserVetChat,
    TextInputUI: TextInputUI,
    TestPageUI : TestPageUI,
    Test: TestPage,
    Login: LoginPage,
    Menu: MainMenuPage,

})

export default AppStackNavigator;