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
        'EditProfile': "Edit my profile",
        'UpdateProfile': "Update profile",
        "Update": "Update",
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
        'Success': "Success",
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
        'Rage': "RABIA",
        'TripleFeline': "TRIPLE VIRAL",
        'RabiaFelina': "FELINE RAGE",
        'Influenza': "INFLUENZA EQUINA",
        'Tetanus' : "TETANUS",
        'Encephalitis':  "EQUINE ENCEPHALITIS",
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
        'AddDoctorDetailes': "ADD DOCTOR DETAILS",
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
        'PaymentInfo' : `At this moment we are going to begin with the evaluation of the situation of (PATIENT),to correctly direct the attention. \n \n As long as it presents the sign. \n He has presented other signs. \nHave you given any medication? How much? In what dose? \n Did you have an answer? \n PATIENT Are you allergic to any food or medicine? \n\n Before continuing with the attention of (NAME OF THE PET), we want to remind you that the cost of veterinary attention is $ 50,000 Which should be canceled at the end of the service, through the PAYMENT HISTORY button, with debit card, credit, baloto, wins, ... \n\n Thanks for staying online, we will send you the list of available doctors after you answer the questions, to continue with the orientation. \n\n We remind you that this orientation does not replace or replace a face-to-face veterinary consultation, and it is necessary, in case PATIENT does not improve or worsen, that you come to a veterinary consultation or if you wish and you are within our coverage area, we can help you manage a face-to-face visit`,
        'SelectYourPet': 'Select your pet by whom you are going to consult',

        
        // Cat Race
        'Abisinio': "Abisinio",
        'American':"American hard-hair",
        'Asian': "Asian",
        'Angora': "Angora",
        'Turkish': "Turkish",
        'African': "Domestic African",
        'Russian': "Russian Blue",
        'Bengali': "Bengali",
        'Balines': "Balines",
        'Japnese': "Japnese",
        'Norway': "Norwegian Forest",
        'Siberia': "Forest Siberia",
        'British': "British short hair",
        'Burma':"Burmese",
        'Cymric': "Cymric",
        'Khao':"Khao manee",
        'AfricanGold': "African gold",
        'Europian': "Creole (Common European)",
        'Cornish': "Cornish rex",
        'Chinchila': "Exotic chinchilla",
        'Escoses': "Fold escoces",
        'Himalaya': "Himalayo",
        'Korat': "Korat",
        'Laperm': "Laperm",
        'MaineCoon': "Maine coon",
        'Manx': "Manx",
        'Egypt': "Egyptian Mau",
        'Australia': "Mist australiano",
        'Munchkin': "Munchkin" ,
        'Ociagto': "Ocigato",
        'Oriental': "Oriental short hair",
        'OrientalLarge': "Oriental long hair",
        'Persian': "Persian",
        'Pixie': "Pixie bob",
        'Ragdoll': "Ragdoll",
        'Savannah': "Savannah",
        'SacredBurma': "Sacred of Burma",
        'Selkirk': "Selkirk rex ",
        'Siamese': "Siamese",
        'Siberian' : "Siberian",
        'Singapore': "Singapore",
        'Snow': "Snowshoe",
        'Somali': "Somali",
        'Sphinx': "Sphynx the Sphinx",
        'Tiffanie': "Tiffanie",
        'Tonkinese': "Tonkinese",
        'Turkey': "From turco",
         
        //English Dog Race
        'Akita': "Akita",
        'Pitbull': "American pitbull terrier",
        'Afgan': "Afghan Greyhound",
        'Bully' : "American bully",
        'Basenji': "Basenji",
        'Gasset' : "Gasset Blue Basset",
        'Beagle': "Beagle",
        'Bloodhound': "Bloodhound",
        'Border': "Border collie",
        'Boxer': "Boxer",
        'German' : "German Braco",
        'Bull': "Bull terrier",
        'FrenchBull': "French bull dog",
        'EnglishBull': "Englisg bulldog",
        'Basset': "Basset hound",
        'Bichon': "Bichon maltes",
        'Boston': "Boston terrier",
        'KingCharles': "Cavalier King charles",
        'Spain': "Cocker spaniel",
        'Collie': "Collie",
        'WestCorgi': "West corgi",
        'Chihu': "Chihuahua",
        'ChowChow': "Chow chow",
        'Creole': "Creole",
        'Dalmatian': "Dalmatian",
        'Dogo': "Dogo",
        'Doberman': "Doberman",
        'Fila': "Fila brasileiro",
        'Fox': "Fox terrier",
        'FoxHound': "Fox hound",
        'GreyHound': "Greyhound",
        'GoldenRetriever': "Golden retriever",
        'GreatDanes': "Great Danes",
        'Griffon': "Griffon",
        'SiberianHusky': "Siberain Husky",
        'Jack': "Jack rusell terrier",
        'Lebra': "Labrador retriever",
        'Alaska': "Alaskan Malamute",
        'Mastiff': "Mastiff",
        'Papillon':"Papillon",
        'GermanShepherd': "German shepherd",
        'Australia': "Australian pastor",
        'BelgianShepherd' : "Belgian shepherd",
        'SheepDog' : "Shetland sheep dog",
        'Irish': "Irish setter",
        'Pekings' : "Pekings",
        'CaucasianShepherd': "Caucasian shepherd",
        'Pincher' : "Pincher",
        'GermanPointer': "German Pointer",
        'Pomeranian': "Pomeranian",
        'Puli' : "Puli",
        'Rottweiler': "Rottweiler",
        'Schnauzer': "Schnauzer",
        'Setter': "Setter",
        'ShihTzu': "Shih Tzu",
        'SpringerSpaniel': "Springer spaniel",
        'Weimaraner': "Weimaraner",
        'YorkshireTerrier': "Yorkshire terrier",
         
        //Englisg Horse race data
        'Andalusian': "Andalusian",
        'Arab': "Arab",
        'Columbian': "Colombian Creole horse",
        'QuarterOfMile': "Quarter of a mile",
        'Spanish' : "Spanish",
        'Frisian': "Frisian",
        'Palomino': "Palomino",
        'Percheron': "Percheron",
        'Appalosa': "Appalosa",
        'Pinto': "Pinto",
        'Paso' : "Peruvian paso",
        'Portuguese' : "Portuguese",
        'Falabella': "Falabella",
        'Lusitano': "Lusitano" ,
        'Hanoverian': "Hanoverian",
        'Belgian' : "Belgian shot",
        'Argentine': "Argentine chair",
        'Lipizzano': "Lipizzano",
        'EnglishBlood' : "Pure English blood",
        'French' : "French chair",
        'Threw': "Threw",
        'Tennessee': "Tennessee",
        'Shetland': "Shetland",

        //Gender
        'Hembra': "Female",
        'Macho' : "Male",
        'PreQuestionText' : 'TO GUARANTEE FOLLOW UP AND UNDERSTAND THE BEST HEALTH STATUS OF YOUR MASCOT, WE WILL BEGIN WITH QUESTIONS, WHICH WILL TAKE A FEW MINUTES WHILE THE VETERINARY IS ATTENDING YOU.',
        'PostQuestionText': 'For your information and time online. We remind you that this orientation does not replace or substitute a face-to-face veterinary consultation, if Balú does not improve or if it worsens you should consult again.',
        'Payment' : 'Payment',
        'VetNotified': 'THE VETERINARY IS ALREADY BEING NOTIFIED AND WILL ATTEND YOU BEFORE 30 MINUTES.',
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
        'EditProfile': "Editar mi perfil",
        'UpdateProfile': "Actualización del perfil",
        'Update': "Actualizar",
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
        'RegistrationSuccessful': "Registro exitoso",
        'Success': "Éxito",
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
        'TripleFeline': "TRIPLE VIRAL",
        'RabiaFelina': "FELINE RABIA",
        'Influenza' : "INFLUENZA EQUINA",
        'Encephalitis': " ENCEPHALITIS EQUINA",
        'Tetanus': "Tétano",
        'Date': "FECHA",
        'Despa': "DESPARACITACION",
        'Product': "PRODUCTO",
        'Save': "GUARDAR",
        'Feeding': "ALIMENTACION",
        'SaveAndRegister': "GUARDAR E INSCRIBIR OTRA MASCOTA",
        'Welcome': "Bienvenido a Holavet",
        'Enter' : "INGRESAR",
        'WelcomeMessage': "A partir de ahora tienes a tu disposicion un grupo de  veterinarios que te acompanaran las 24 horas del dia, todos los dias del ano",
        'LogOut': "Cerrar Sesión",
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
        'AddDoctorDetailes': "Añadir detalles del doctor",
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
        'PaymentInfo': `En este momento vamos a comenzar con la evaluación de la situación de (PACIENTE), para dirigir correctamente la atención. \n\nSiempre y cuando presente los signos. \nHa presentado otros signos \n¿Has dado alguna medicación? ¿Cuánto cuesta? ¿En qué dosis? \n¿Tuviste una respuesta? \nPACIENTE ¿Es usted alérgico a algún alimento o medicamento? \n\nAntes de continuar con la atención de (NOMBRE DE LA PET), queremos recordarle que el costo de la atención veterinaria es de $ 50,000 \nQue debe cancelarse al final del servicio, a través del botón HISTORIAL DE PAGOS, con tarjeta de débito, crédito, baloto, victorias, ... \n\nGracias por mantenerse en línea, le enviaremos la lista de médicos disponibles después de responder las preguntas para continuar con la orientación. \n\nLe recordamos que esta orientación no reemplaza ni reemplaza una consulta veterinaria cara a cara, y es necesario, en caso de que el PACIENTE no mejore o empeore, que acuda a una consulta veterinaria o si lo desea y está dentro de nuestro área de cobertura, podemos ayudarlo a administrar una visita en persona`,
        'SelectYourPet': 'Selecciona tú mascota por quién vas a consultar',


        //Cat Race
        'Abisinio': "Abisinio",
        'American': "Americano de pelo duro",
        'Asian': "Asiático",
        'Angora': "Angora",
        'Turkish': "Turco",
        'African': "Africano doméstico",
        'Russian': "Azul ruso",
        'Bengali': "Bengali",
        'Balines': "Balines",
        'Japnese':"Bobtail japonés ",
        'Norway': "Bosque de noruega ",
        'Siberia': "Bosque se Siberia",
        'British': "Británico de pelo corto",
        'Burma': "Burmes",
        'Cymric': "Cymric",
        'Khao': "Khao manee",
        'AfricanGold': "Dorado africano",
        'Europian': "Criollo (Europeo común)",
        'Cornish': "Cornish rex",
        'Chinchila': "Exótico chinchilla",
        'Escoses': "Fold escoces",
        'Himalaya': "Himalayo",
        'Korat': "Korat",
        'Laperm': "Laperm",
        'MaineCoon': "Maine coon",
        'Manx': "Manx",
        'Egypt': "Mau egipcio",
        'Australia': "Mist australiano",
        'Munchkin': "Munchkin",
        'Ociagto': "Ocigato",
        'Oriental': "Oriental de pelo corto",
        'OrientalLarge': "Oriental de pelo largo",
        'Persian': "Persa",
        'Pixie': "Pixie bob",
        'Ragdoll': "Ragdoll",
        'Savannah': "Savannah",
        'SacredBurma': "Sagrado de Birmania",
        'Selkirk': "Selkirk rex ",
        'Siamese': "Siamés",
        'Siberian': "Siberiano",
        'Singapore': "Singapura",
        'Snow': "Snowshoe",
        'Somali': "Somalí",
        'Sphinx': "Sphynx o esfinge",
        'Tiffanie': "Tiffanie",
        'Tonkinese': "Tonkinese",
        'Turkey': "Van turco",

        //Dog Race
        'Akita': "Akita",
        'American': "American hard-hair",
        'Afgan': "Galgo afgano",
        'Bully': "American bully",
        'Basenji' : "Basenji",
        'Gasset': "Basset azul de gascuña",
        'Beagle': "Beagle",
        'Bloodhound': "Sabueso",
        'Border': "Border collie",
        'Boxer': "Bóxer",
        'German': "Braco Alemán ",
        'Bull': "Bull terrier",
        'FrenchBull' : "Bull dog francés",
        'EnglishBull': "Bull dog ingles ",
        'Basset': "Basset hound",
        'Basset': "Bichon maltes",
        'Boston': "Boston terrier",
        'KingCharles': "Cavalier King charles",
        'Spain': "Cocker spaniel",
        'Collie': "Collie",
        'WestCorgi': "West corgi",
        'Chihu': "Chihuahua",
        'ChowChow': "Chow chow",
        'Creole': "Criollo",
        'Dalmatian': "Dálmata",
        'Dogo': "Dogo",
        'Doberman': "Doberman",
        'Fila': "Fila brasileiro",
        'Fox': "Fox terrier",
        'FoxHound': "Fox hound",
        'GreyHound': "Galgo",
        'GoldenRetriever': "Golden retriever",
        'GreatDanes': "Gran danes ",
        'Griffon': "Grifón",
        'SiberianHusky': "Husky siberiano",
        'Jack': "Jack rusell terrier",
        'Lebra': "Labrador retriever",
        'Alaska': "Alaska malamute",
        'Mastiff': "Mastin",
        'Papillon': "Papillon",
        'GermanShepherd': "Pastor alemán",
        'Australia': "Pastor australiano",
        'BelgianShepherd': "Pastor belga",
        'SheepDog': "Shetland sheep dog",
        'Irish': "Setter irlandés",
        'Pekings': "Pequines",
        'CaucasianShepherd': "Pastor del Cáucaso",
        'Pincher': "Pincher",
        'GermanPointer': "Pointer alemán ",
        'Pomeranian': "Pomerania",
        'Puli': "Puli",
        'Rottweiler': "Rottweiler",
        'Schnauzer': "Schnauzer",
        'Setter': "Setter",
        'ShihTzu': "Shih Tzu",
        'SpringerSpaniel': "Springer spaniel",
        'Weimaraner': "Weimaraner",
        'YorkshireTerrier': "Yorkshire terrier",
         
        //Horse Reace data
        'Andalusian': "Andaluz",
        'Arab': "Árabe",
        'Columbian': "Caballo criollo colombiano",
        'QuarterOfMile': "Cuarto de milla",
        'Spanish': "Español",
        'Frisian': "Frisón",
        'Palomino': "Palomino",
        'Percheron': "Percherón",
        'Appalosa': "Appalosa",
        'Pinto': "Pinto",
        'Paso': "Paso peruana",
        'Portuguese': "Portugués",
        'Falabella': "Falabella",
        'Lusitano': "Lusitano",
        'Hanoverian': "Hannoveriano",
        'Belgian': "Tiro belga",
        'Argentine': "Silla argentina",
        'Lipizzano': "Lipizzano",
        'EnglishBlood': "Pura sangre ingles",
        'French': "Silla francés" ,
        'Threw': "Tiro",
        'Tennessee': "Tennesse",
        'Shetland': "Shetland",


        //Gender
        'Hembra': "Hembra",
        'Macho': "Macho",
        'PreQuestionText' : 'PARA GARANTIZAR EL SEGUIMIENTO Y COMPRENDER MEJOR EL ESTADO DE SALUD DE TU MASCOTA, EMPEZAREMOS CON UNAS PREGUNTAS, LAS CUALES TARDARAN UNOS MINUTOS MIENTRAS TE ATIENDE EL VETERINARIO.',
        'PostQuestionText' : 'por tu información y tiempo en línea. Te recordamos que esta orientacion no reemplaza ni sustituye una consulta veterinaria presencial, si Balú no mejora o si empeora debes consultar nuevamente.',
        'Payment': 'PAGAR',
        'VetNotified':'EL VETERINARIO YA ESTA SIENDO NOTIFICADO Y TE ATENDERÁ ANTES DE 30 MINUTOS.',
    },

    };

    I18n.putVocabularies(dict);

}