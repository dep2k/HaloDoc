
import LoginPage from '../components/LoginAndSignup/LoginPage'
import MainMenuPage from '../components/MainMenuPage'
import PetCategories from '../components/PetRegistration/PetCategories'
import { createStackNavigator } from 'react-navigation'
//import Demo from '../components/Demo'

import WelcomePage from '../components/LoginAndSignup/WelcomePage'
import WelcomeMessage from '../components/LoginAndSignup/WelcomeMessage'
import RegistrationPage from '../components/LoginAndSignup/RegistrationPage'
import SuccesfulLogin from '../components/LoginAndSignup/SuccesfulLogin'
import PetRegistrationForm from '../components/PetRegistration/PetRegistrationForm'
import CodeConfirmationPage from '../components/LoginAndSignup/ConfirmCodePage'
import VetListPage from '../components/VetList/VetListPage'
import TermsAndConditions from '../components/LoginAndSignup/TermsAndConditions'
import ForgotPasswordPage from "../components/LoginAndSignup/ForgotPasswordPage";


const AppStackNavigator = createStackNavigator(
  {
    CodeConfirmationPage: {
      screen: CodeConfirmationPage,
      navigationOptions: {
        header: null
      }
    },
    TermsPage: {
      screen: TermsAndConditions,
      navigationOptions: {
        header: null
      }
    },

    PetRegistrationFormPage: {
      screen: PetRegistrationForm,
      navigationOptions: {
        header: null
      }
    },

    SuccesfulLoginPage: {
      screen: SuccesfulLogin,
      navigationOptions: {
        header: null
      }
    },
    VetListPage: {
      screen: VetListPage,
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

    PetCategoriesPage: {
      screen: PetCategories,
      navigationOptions: {
        header: null
      }
    },
    ForgotPasswordPage: {
      screen: ForgotPasswordPage,
      navigationOptions: {
        header: null
      }
    },
    WelcomeMessage: {
      screen: WelcomeMessage,
      navigationOptions: {
        header: null
      }
    },

    //Problem with this page
    LoginPage: {
      screen: LoginPage,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "SuccesfulLoginPage"
  }
);

export default AppStackNavigator;