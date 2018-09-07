
import LoginPage from '../components/LoginAndSignup/LoginPage'
import MainMenuPage from '../components/MainMenuPage'
import TestLoginPage from '../components/TestLoginPage'
import PetCategories from '../components/PetRegistration/PetCategories'
import { createStackNavigator } from 'react-navigation'

import TestPageUI from '../components/TestPageUI'
import WelcomePage from '../components/LoginAndSignup/WelcomePage'
import RegistrationPage from '../components/LoginAndSignup/RegistrationPage'
 
// import TextInputUI from '../components/TextInputUI'

// import ButtonUI from '../components/ButtonUI'
// import TestFlatList from '../components/TestFlatList'

const AppStackNavigator = createStackNavigator(
     {
       MainMenuPage : {
         screen: MainMenuPage,
         navigationOptions: {
           header: null
         }
       }
     },
     {
       RegistrationPage: {
         screen: RegistrationPage,
         navigationOptions: {
            header: null
         }
       }
     },
     {
      WelcomePage:{
        screen: WelcomePage,
        navigationOptions: {
          header: null
        }
      }
  },
     
   {
    PetCategories: {
      screen: PetCategories,
      navigationOptions: {
        header: null
      }
    },

    TestLoginPage: {
      screen: TestLoginPage
    },

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