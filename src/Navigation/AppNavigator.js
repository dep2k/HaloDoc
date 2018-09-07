
import LoginPage from '../components/LoginAndSignup/LoginPage'
import MainMenuPage from '../components/MainMenuPage'
import TestLoginPage from '../components/TestLoginPage'
import PetCategories from '../components/PetRegistration/PetCategories'
import { createStackNavigator } from 'react-navigation'
import TestPageUI from '../components/TestPageUI'

// import  TestPage from '../components/TestPage'
// import TextInputUI from '../components/TextInputUI'

// import ButtonUI from '../components/ButtonUI'
// import TestFlatList from '../components/TestFlatList'

const AppStackNavigator = createStackNavigator(
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

    Menu: {
      screen: MainMenuPage
    },
    // ButtonUI: ButtonUI,
    // TestFlatList: TestFlatList,
    // TextInputUI: TextInputUI,
    TestPageUI: {
      screen: TestPageUI
    }
  },
  {
    initialRouteName: "TestPageUI"
  }
);

export default AppStackNavigator;