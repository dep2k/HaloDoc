
import LoginPage from '../components/LoginAndSignup/LoginPage'
import MainMenuPage from '../components/MainMenuPage'
import  TestPage from '../components/TestPage'

import { createStackNavigator } from 'react-navigation'

const AppStackNavigator = createStackNavigator({
    Test: TestPage,
    Login: LoginPage,
    Menu: MainMenuPage,

})

export default AppStackNavigator;