
import LoginPage from '../components/LoginAndSignup/LoginPage'
import MainMenuPage from '../components/MainMenuPage'
import PetCategories from '../components/PetRegistration/PetCategories'
import { createStackNavigator } from 'react-navigation'
import {createAppContainer} from 'react-navigation'
//import Demo from '../components/Demo'

import WelcomePage from '../components/LoginAndSignup/WelcomePage'
import WelcomeMessage from '../components/LoginAndSignup/WelcomeMessage'
import RegistrationPage from '../components/LoginAndSignup/RegistrationPage'
import SuccesfulLogin from '../components/LoginAndSignup/SuccesfulLogin'
import PetRegistrationForm from '../components/PetRegistration/PetRegistrationForm'
import CodeConfirmationPage from '../components/LoginAndSignup/ConfirmCodePage'
import VetProfile from '../components/VetList/VetProfile'
import ProfilePage from '../components/Profile/ProfilePage'
import UpdateProfilePage from '../components/Profile/UpdateProfilePage'
import TermsAndConditions from '../components/LoginAndSignup/TermsAndConditions'
import ForgotPasswordPage from "../components/LoginAndSignup/ForgotPasswordPage";
import AdminMenuPage from "../components/AdminPanel/Admin/AdminMenuPage";
import AdminAddDoctorPage from "../components/AdminPanel/Admin/AdminAddDoctorPage";
import DoctorMenuPage from "../components/AdminPanel/Doctors/DoctorMenuPage";
import HelperDoctorsListPage from "../components/AdminPanel/Helper/HelperDoctorsListPage";

// Consult Module
import PetChooserPage from '../components/Consultation/PetChooserPage';
import PaymentInfoPage from '../components/Consultation/PaymentInfoPage';
import PreQuestionPage from '../components/Consultation/PreQuestionPage';
import QuestionsPage from '../components/Consultation/QuestionsPage';
import PostQuestionsPage from '../components/Consultation/PostQuestionsPage';
import VetNotificationPage from '../components/Consultation/VetNotificaionPage';
import ChatPage from '../components/Consultation/ChatPage';
import PaymentHistoryPage from '../components/PaymentHistory/PaymentHistoryPage';
import AvailableDoctorsPage from '../components/Consultation/AvailableDoctorsPage';

//import DoctorConsultationsPage from '../components/AdminPanel/Doctors/DoctorConsultationsPage';
import FeedbackPage from '../components/Consultation/FeedbackPage'

const AppStackNavigator = createStackNavigator({

    LoginPage: {
      screen: LoginPage,
      navigationOptions: {
        header: null
      }
    },
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
    UpdateProfilePage: {
      screen: UpdateProfilePage,
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
    AdminMenuPage: {
      screen: AdminMenuPage,
      navigationOptions: {
        header: null
      }
    },
    PaymentHistoryPage: {
      screen: PaymentHistoryPage,
      navigationOptions: {
        header: null
      }
    },
    AdminAddDoctorPage: {
      screen: AdminAddDoctorPage,
      navigationOptions: {
        header: null
      }
    },
    HelperDoctorsListPage: {
      screen: HelperDoctorsListPage,
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
    VetProfile: {
      screen: VetProfile,
      navigationOptions: {
        header: null
      }
    },
    ProfilePage: {
      screen: ProfilePage,
      navigationOptions: {
        header: null
      }
    },
    PetChooserPage: {
      screen: PetChooserPage,
      navigationOptions: {
        header: null
      }
    },

    PaymentInfoPage: {
      screen: PaymentInfoPage,
      navigationOptions: {
        header: null
      }
    },

    PreQuestionPage: {
      screen: PreQuestionPage,
      navigationOptions: {
        header: null
      }
    },

    QuestionsPage: {
      screen: QuestionsPage,
      navigationOptions: {
        header: null
      }
    },

    PostQuestionsPage: {
      screen: PostQuestionsPage,
      navigationOptions: {
        header: null
      }
    },
    DoctorMenuPage: {
      screen: DoctorMenuPage,
      navigationOptions: {
        header: null
      }
    },
    AvailableDoctorsPage: {
      screen: AvailableDoctorsPage,
      navigationOptions: {
        header: null
      }
    },
    VetNotificationPage: {
      screen: VetNotificationPage,
      navigationOptions: {
        header: null
      }
    },

    ChatPage: {
      screen: ChatPage,
      navigationOptions: {
        header: null
      }
    },

    FeedbackPage: {
      screen: FeedbackPage,
      navigationOptions: {
        header: null
      }
    }
  },

  {
    initialRouteName: "AdminAddDoctorPage"
  }
);

//const HolaVet = createAppContainer(AppStackNavigator);
//export default HolaVet;

export default AppStackNavigator;