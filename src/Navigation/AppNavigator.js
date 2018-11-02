
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
import VetProfile from '../components/VetList/VetProfile'
import ProfilePage from '../components/Profile/ProfilePage'
import UpdateProfilePage from '../components/Profile/UpdateProfilePage'
import TermsAndConditions from '../components/LoginAndSignup/TermsAndConditions'
import ForgotPasswordPage from "../components/LoginAndSignup/ForgotPasswordPage";
import AdminLoginPage from "../components/AdminPanel/Admin/AdminLoginPage";
import AdminMenuPage from "../components/AdminPanel/Admin/AdminMenuPage";
import AdminCreateHelperDoctorPage from "../components/AdminPanel/Admin/AdminCreateHelperDoctorPage";
import AdminAddDoctorPage from "../components/AdminPanel/Admin/AdminAddDoctorPage";
import HelperLoginPage from "../components/AdminPanel/Helper/HelperLoginPage";
import DoctorLoginPage from "../components/AdminPanel/Doctors/DoctorLoginPage";
import HelperServicesPage from "../components/AdminPanel/Helper/HelperServicesPage";
import HelperHistoryPage from "../components/AdminPanel/Helper/HelperHistoryPage";
import HelperShowServicesPage  from "../components/AdminPanel/Helper/HelperShowServicesPage";
import HelperDoctorsListPage from "../components/AdminPanel/Helper/HelperDoctorsListPage";
import AdminAddHelperPage from '../components/AdminPanel/Admin/AdminAddHelperPage';

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

const AppStackNavigator = createStackNavigator(
  {
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
    AdminLoginPage: {
      screen: AdminLoginPage,
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
    AdminCreateHelperDoctorPage: {
      screen: AdminCreateHelperDoctorPage,
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
    AdminAddHelperPage: {
      screen: AdminAddHelperPage,
      navigationOptions: {
        header: null
      }
    },

    HelperLoginPage: {
      screen: HelperLoginPage,
      navigationOptions: {
        header: null
      }
    },

    HelperServicesPage: {
      screen: HelperServicesPage,
      navigationOptions: {
        header: null
      }
    },
    HelperShowServicesPage: {
      screen: HelperShowServicesPage,
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
    DoctorLoginPage: {
      screen: DoctorLoginPage,
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
    HelperHistoryPage: {
      screen: HelperHistoryPage,
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
    }
  },

  {
    initialRouteName: "LoginPage"
  }
);

export default AppStackNavigator;