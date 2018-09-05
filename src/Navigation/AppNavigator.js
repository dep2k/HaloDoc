
import LoginPage from '../components/LoginAndSignup/LoginPage'
import MainMenuPage from '../components/MainMenuPage'
// import  TestPage from '../components/TestPage'
// import TextInputUI from '../components/TextInputUI'
// import TestPageUI from '../components/TestPageUI'
// import ButtonUI from '../components/ButtonUI'
 import TestLoginPage from '../components/TestLoginPage'
// import TestFlatList from '../components/TestFlatList'

import { createStackNavigator } from 'react-navigation'


const AppStackNavigator = createStackNavigator({
    // ButtonUI: ButtonUI,
    // TestFlatList: TestFlatList,
     TestLoginPage : TestLoginPage,
    // TextInputUI: TextInputUI,
    // TestPageUI : TestPageUI,
    // Test: TestPage,
    Login: LoginPage,
    Menu: MainMenuPage,

})

export default AppStackNavigator;