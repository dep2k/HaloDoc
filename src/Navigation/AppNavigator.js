
import LoginPage from '../components/LoginAndSignup/LoginPage'
import MainMenuPage from '../components/MainMenuPage'

import { createStackNavigator } from 'react-navigation'

const AppStackNavigator = createStackNavigator({
    Login: LoginPage,
    Menu: MainMenuPage,

})

export default AppStackNavigator;