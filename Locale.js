import { I18n } from 'aws-amplify';


export const  setUpLanguage = () => {

    I18n.setLanguage('en');
    const dict = {
    'en': {
        'Sign In': "Sign In",
        'RegisterMe': "Register Me",
        'Sign Up': "SignUp",
        'Username': "Username",
        'Password' : "Password",
        'Forgot Password': "Forgot Password?",
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
        'PaymentHistory': "PAYMENT HISTORY",
        'Continue' :"CONTINUE",
        'CodeSent': "Your code has sent to your email",
        'Confirm Code': "Confirm Code",
        'Passwords dont match': "Password and Confirm Paswword Don't Match",
        'Username and Password are not correct': "Username and Password are not Valid",
        'All Fields are mandatory': "All fields are mandatory",
        'Both Fields are mandatory': "Both Fields are mandatory",
        'OK' : "OK",
        'EnterEmail': 'Enter username to change the password',
        'PasswordLength':"Password should be greater than  Eight characters",
        'RegistrationUnsuccessful' : "Registration Unsucessfull",
        'WrongCode' : "Code is wrong",
        'RegistrationOfPets': "REGISTRATION OF PETS",
        'FelineCat': "FELINE",
        'CanineDog': "CANINE",
        'EquineHorse': "EQUINE"
    },
    'es': {
        'Sign In': "INICIO DE SESION",
        'RegisterMe': "REGISTRARME",
        'Sign Up': "REGISTRATE",
        'Username': "Usuario",
        'Password': "Contracena",
        'Forgot Password': "Olvide me contacena?",
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
        'PaymentHistory': "HISTORIAL DE PAGOS",
        'Continue' : "CONTINUAR",
        'CodeSent': "su código ha enviado a su correo electrónico",
        'Confirm Code': "Confirma código",
        'Passwords dont match': "La contraseña y la contraseña no coinciden",
        'Username and Password are not correct': "El nombre de usuario y la contraseña no son válidos",
        'All Fields are mandatory': "Todos los campos son obligatorios",
        'OK':"OK",
        'Both Fields are mandatory': "Ambos campos son obligatorios",
        'EnterEmail': "Ingrese el nombre de usuario para cambiar la contraseña",
        'PasswordLength': "La contraseña debe tener más de ocho caracteres",
        'RegistrationUnsuccessful': "Registro no exitoso",
        'WrongCode': "codigo erroneo",
        'RegistrationOfPets' :"INSCRIPCION DE MASCOTAS",
        'FelineCat': "FELINO",
        'CanineDog': "CANINO",
        'EquineHorse': "EQUINO"
    },

    };

    I18n.putVocabularies(dict);

}