
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

import VetListPage from '../components/VetList/VetListPage'
// import TextInputUI from '../components/TextInputUI'

// import ButtonUI from '../components/ButtonUI'
// import TestFlatList from '../components/TestFlatList'

const AppStackNavigator = createStackNavigator(
  {
    PetRegistrationForm: {
      screen: PetRegistrationForm,
    },

    SuccesfulLogin: {
      screen: SuccesfulLogin,
    },
    VetListPage: {
      screen: VetListPage,
  },
    MainMenuPage: {
      screen: MainMenuPage,
    },

    RegistrationPage: {
      screen: RegistrationPage,
    },

    //Problem with this page
    WelcomePage: {
      screen: WelcomePage,
    },

    PetCategories: {
      screen: PetCategories,
    },

    TestLoginPage: {
      screen: TestLoginPage
    },

    //Problem with this page
    LoginPage: {
      screen: LoginPage,
    },
    
    TestPageUI: {
      screen: TestPageUI
    }
  },
  {
    initialRouteName: "LoginPage"
  }
);

export default AppStackNavigator;