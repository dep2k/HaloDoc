import { I18n } from 'aws-amplify';


export const  setUpLanguage = () => {

    I18n.setLanguage('en');
    const dict = {
    'en': {
        'Sign In': "Sign In",
        'Register Me': "Register Me",
        'Sign Up': "SignUp",
        'Username': "Username",
        'Password' : "Password",
        'Forgot Password': "Forgot Password",
        'Firstname': "Firstname",
        'Lastname': "Lastname",
        'UserId' : "UserId",
        'PhoneNo' : "PhoneNo",
        'Email' : "Email",
        'Create password': "Create Password",
        'Confirm password': "Confirm Password",
        'Accept terms and conditions': " Accept terms and conditions",
        'Consult': "CONSULT",
        'MyProfile': "MY PROFILE",
        'VeterinaryDirectory': "VETERINARY DIRECTORY",
        'HistoryOfConsultaions': "HISTORY OF CONSULTATIONS",
        'PaymentHistory': "PAYMENT HISTORY"

    },
    'es': {
        'Sign In': "INICIO DE SESION",
        'Register Me': "REGISTRARME",
        'Sign Up': "REGISTRATE",
        'Username': "Usuario",
        'Password': "Contracena",
        'Forgot Password': "Olvide me contacena",
        'Firstname': "Nombre",
        'Lastname': "Apellidos",
        'UserId': "Cedula",
        'PhoneNo': "Telefono",
        'Email': "Email",
        'Create password' : "Crear contracena",
        'Confirm password': "Confirmar contra-",
        'Accept terms and conditions': "Accepto terminos y condiciones",
        'Consult': "CONSULTAR",
        'MyProfile': "MI PERFIL",
        'VeterinaryDirectory': "DIRECTORIO VETERINARIO",
        'HistoryOfConsultaions':"HISTORIAL DE CONSULTAS",
        'PaymentHistory': "HISTORIAL DE PAGOS"



    },

    };

    I18n.putVocabularies(dict);

}