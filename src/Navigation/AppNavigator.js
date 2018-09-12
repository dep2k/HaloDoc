
import LoginPage from '../components/LoginAndSignup/LoginPage'
import MainMenuPage from '../components/MainMenuPage'
import TestLoginPage from '../components/TestLoginPage'
import PetCategories from '../components/PetRegistration/PetCategories'
import { createStackNavigator } from 'react-navigation'

import TestPageUI from '../components/TestPageUI'
import WelcomePage from '../components/LoginAndSignup/WelcomePage'
import RegistrationPage from '../components/LoginAndSignup/RegistrationPage'
import SuccesfulLogin from '../components/LoginAndSignup/SuccesfulLogin'
import PetRegistrationForm from '../components/PetRegistration/PetRegistrationForm'
// import TextInputUI from '../components/TextInputUI'

// import ButtonUI from '../components/ButtonUI'
// import TestFlatList from '../components/TestFlatList'

const AppStackNavigator = createStackNavigator(
  {
    PetRegistrationForm: {
      screen: PetRegistrationForm,
      navigationOptions: {
        header: null
      }
    },

    SuccesfulLogin: {
      screen: SuccesfulLogin,
      navigationOptions: {
        header: null
      }
    },

    MainMenuPage: {
      screen: MainMenuPage,
      navigationOptions: {
        header: null
      }
    },

    RegistrationPage: {
      screen: RegistrationPage,
      navigationOptions: {
        header: null
      }
    },

    //Problem with this page
    WelcomePage: {
      screen: WelcomePage,
      navigationOptions: {
        header: null
      }
    },

    PetCategories: {
      screen: PetCategories,
      navigationOptions: {
        header: null
      }
    },

    TestLoginPage: {
      screen: TestLoginPage
    },

    //Problem with this page
    Login: {
      screen: LoginPage,
      navigationOptions: ({ navigation }) => ({
        title: "Home",
        headerStyle: styles.headerStyle,
        headerTitle: <Text>Home</Text>,
        headerLeft: null,
        headerRight: null
      })
    },

    TestPageUI: {
      screen: TestPageUI
    }
  },
  {
    initialRouteName: "TestPageUI"
  }
);

export default AppStackNavigator;