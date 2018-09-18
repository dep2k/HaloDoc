
import LoginPage from '../components/LoginAndSignup/LoginPage'
import MainMenuPage from '../components/MainMenuPage'
import PetCategories from '../components/PetRegistration/PetCategories'
import { createStackNavigator } from 'react-navigation'
//import Demo from '../components/Demo'

import WelcomePage from '../components/LoginAndSignup/WelcomePage'
import RegistrationPage from '../components/LoginAndSignup/RegistrationPage'
import SuccesfulLogin from '../components/LoginAndSignup/SuccesfulLogin'
import PetRegistrationForm from '../components/PetRegistration/PetRegistrationForm'
import CodeConfirmationPage from '../components/LoginAndSignup/ConfirmCodePage'
import VetListPage from '../components/VetList/VetListPage'

const AppStackNavigator = createStackNavigator({

    CodeConfirmationPage: {
        screen: CodeConfirmationPage
    },

    PetRegistrationFormPage: {
      screen: PetRegistrationForm,
    },

    SuccesfulLoginPage: {
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
       navigationOptions: {
        header: null
      }

    },

    //Problem with this page
    WelcomePage: {
      screen: WelcomePage,
      navigationOptions: {
        header: null
      },
    },

    PetCategoriesPage: {
      screen: PetCategories,
    },

   
    //Problem with this page
    LoginPage: {
      screen: LoginPage,
      navigationOptions: {
        header: null
        },
       
    }

  },
  {
    initialRouteName: "WelcomePage"
  }
);

export default AppStackNavigator;