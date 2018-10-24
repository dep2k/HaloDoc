import { I18n } from 'aws-amplify';


export const  setUpLanguage = () => {

    I18n.setLanguage('en');
    const dict = {
    'en': {
        'Sign In': "Sign In",
        'RegisterMe': "Register Me",
        'Register': "REGISTER",
        'Sign Up': "SignUp",
        'Username': "Username",
        'Password' : "Password",
        'CreatePassword': "Create Password",
        'Forgot Password': "Forgot Password?",
        'Name': "Name",
        'Firstname': "Firstname",
        'Lastname': "Lastname",
        'UserId' : "UserId",
        'PhoneNo' : "PhoneNo",
        'Email' : "Email",
        'AdminEmail': "AdminEmail",
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
        'RegistrationSuccessful': "Registration Sucessfull",
        'WrongCode' : "Code is wrong",
        'RegistrationOfPets': "REGISTRATION OF PETS",
        'FelineCat': "FELINE",
        'CanineDog': "CANINE",
        'EquineHorse': "EQUINE",
        'ClinicHistory': "CLINIC HISTORY",
        'Origin': "Origin",
        'Race': "Race",
        'Color' : "Color",
        'Sex': "Sex",
        'Age':"Age",
        'Vaccination': "VACCINATION",
        'Yes': "Yes",
        'No': "NO",
        'PVC': "PVC",
        'Other': "OTHER",
        'Triple': "TRIPLE",
        'Rage': "RAGE",
        'Date': "DATE",
        'Despa': "DESPARACITACION",
        'Product': "PRODUCT",
        'Save': "SAVE",
        'Feeding': "FEEDING",
        'SaveAndRegister': "SAVE AND REGISTER ANOTHER MASCOT",
        'Welcome': "Welcome to Holavet",
        'Enter': "ENTER",
        'WelcomeMessage': "From now on you have at your disposal a group of veterinarians who will accompany you 24 hours a day, every day of the year",
        'LogOut': "Log Out",
        'NameOfPet': "Name of your pet",
        'SelectRace': "Select the Race",
        'SelectColor': "Select the Color",
        'SelectSex': "Select the Sex",
        'WriteAge': "Write your age",
        'Helper': "HELPER",
        'Doctor': "DOCTOR",
        'ADMINISTRATOR': "ADMINISTRATOR",
        'Services':"SERVICES",
        'DoctorsDirectory': "VETERINARY DIRECTORY",
        'SeeHistory': "SEE HISTORY",
        'HistoryOfConsultations' : "HISTORY OF CONSULTATIONS",
        'AddDoctor': "ADD VETERINARY",
        'AddHelper': "ADD HELPER",
        'SeePaymentReports': "SEE PAYMENT REPORTS",
        'RegistrationId': "RegistrationId",
        'HomeTown': "Home town",
        'MedicalCenter': "Medical Center",
        'Speciality': "Speciality",
        'Address': "Address",
        'Department': "Department",
        'PhoneNo': "Phone No",
        'Open': "Open",
        'Closed': 'Closed',
        'Inprogress': "In Progress",
        //Race
        'Abisinio': "Abisinio",
        'American':"American hard-hair"


    },
    'es': {
        'Sign In': "INICIO DE SESION",
        'RegisterMe': "REGISTRARME",
        'Register':"REGISTRAR",
        'Sign Up': "REGISTRATE",
        'Username': "Usuario",
        'Password': "Contracena",
        'CreatePassword': "Crear Contracena",
        'Forgot Password': "Olvide me contacena?",
        'Name': "Nombre",
        'Firstname': "Nombre",
        'Lastname': "Apellidos",
        'UserId': "Cedula",
        'PhoneNo': "Telefono",
        'Email': "Email",
        'AdminEmail': "AdminEmail", 
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
        'EquineHorse': "EQUINO",
        'ClinicHistory': "HISTORIA CLINICA",
        'Origin': "Procedencia",
        'Race': "Raza",
        'Color': "Color",
        'Sex': "Sexo",
        'Age' : "Edad",
        'Vaccination': "VACUNATION",
        'Yes': "SÍ",
        'No': "NO",
        'PVC': "PVC",
        'Other' :"OTRA",
        'Triple': "TRIPLE",
        'Rage': "RABIA",
        'Date': "FECHA",
        'Despa': "DESPARACITACION",
        'Product': "PRODUCTO",
        'Save': "GUARDAR",
        'Feeding': "ALIMENTACION",
        'SaveAndRegister': "GUARDAR E INSCRIBIR OTRA MASCOTA",
        'Welcome': "Bienvenido a Holavet",
        'Enter' : "INGRESAR",
        'WelcomeMessage': "A partir de ahora tienes a tu disposicion un grupo de  veterinarios que te acompanaran las 24 horas del dia, todos los dias del ano",
        'LogOut': "cerrar sesión",
        'NameOfPet': "Nombre de tu mascota",
        'SelectRace': "Selecciona la raza",
        'SelectColor': "Selecciona el Color",
        'SelectSex': "Selecciona el Sexo",
        'WriteAge': "Escribe su Edad",
        'Helper': "AUXILIAR",
        'Doctor': "VETERINARIO",
        'ADMINISTRATOR': "ADMINISTRADOR",
        'Services': "SERVICIOS",
        'DoctorsDirectory': "DIRECTORIO VETERINARIO",
        'SeeHistory': "VER HISTORIAL",
        'HistoryOfConsultations': "HISTORIAL DE CONSULTAS",
        'AddDoctor': "AGREGAR VETERINARIO",
        'AddHelper': "AGREGAR AUXILIAR",
        'SeePaymentReports':"VER REPORTES DE PAGOS",
        'RegistrationId': "Registro medico",
        'HomeTown': "Lugar de residencia",
        'MedicalCenter': "Centro medico",
        'Speciality':"Especialidad",
        'Address': "Direccion",
        'PhoneNo': "Phone No",
        'Department': "Muncipio",
        'Open': "abierto",
        'Closed': "cerrado",
        'Inprogress': "en progreso",
        //Race
        'Abisinio': "Abisinio",
        'American': "Americano de pelo duro"
    },

    };

    I18n.putVocabularies(dict);

}