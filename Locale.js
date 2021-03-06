import { I18n } from 'aws-amplify';


export const  setUpLanguage = () => {

    I18n.setLanguage('es');
    const dict = {
      en: {
        Menu: "MENU",
        "Sign In": "Sign In",
        RegisterMe: "Register Me",
        Register: "REGISTER",
        "Sign Up": "SignUp",
        Username: "Username",
        Password: "Password",
        "Forgot Password": "Forgot Password?",
        Name: "Name",
        NameOfDoctor: "Name of Doctor",
        Firstname: "Firstname",
        Lastname: "Lastname",
        UserId: "UserId",
        PhoneNo: "PhoneNo",
        Email: "Email",
        AdminEmail: "AdminEmail",
        "Create password": "Create Password",
        "Confirm password": "Confirm Password",
        "Accept terms and conditions": " Accept terms and conditions",
        Consult: "NEW CONSULTATION",
        OpenConsultations: "OPEN CONSULTATIONS",
        Consultations: "CONSULTATIONS",
        MyProfile: "MY PROFILE",
        EditProfile: "Edit Profile",
        UpdateProfile: "Update Profile",
        Update: "Update",
        VeterinaryDirectory: "VETERINARY DIRECTORY",
        HistoryOfConsultaions: "HISTORY OF CONSULTATIONS",
        PaymentHistory: "PAYMENT HISTORY",
        Continue: "CONTINUE",
        CodeSent: "Your code has sent to your email",
        "Confirm Code": "Confirm Code",
        "Passwords dont match": "Password and Confirm Paswword Don't Match",
        "Username and Password are not correct":
          "Username and Password are not Valid",
        "All Fields are mandatory": "All fields are mandatory",
        "Both Fields are mandatory": "Both Fields are mandatory",
        OK: "OK",
        is: "is",
        EnterEmail: "Enter email where password should be send",
        EnterUsername: "Enter your username to reset your password",
        PasswordLength: "Password should be greater than  Eight characters",
        RegistrationUnsuccessful: "Registration Unsucessfull",
        RegistrationSuccessful: "Registration Sucessfull",
        Success: "Success",
        SucessMessage: "YOUR REGISTRATION HAS BEEN SUCCESSFUL",
        WrongCode: "Code is wrong",
        ConsultationClosed: "This Consultation is closed",
        CantSendMessage: "You can not send any message",
        RegistrationOfPets: "REGISTRATION OF PETS",
        DataMissing: "Some required fields are missing",
        Chat: "Chat",
        Send: "Send",
       'Options': "Options",

        ClinicHistory: "CLINIC HISTORY",
        Origin: "Origin",
        Race: "Race",
        Color: "Color",
        Sex: "Sex",
        Age: "Age",
        Vaccination: "VACCINATION",
        Yes: "Yes",
        No: "NO",
        PVC: "PVC",
        Other: "OTHER",
        Triple: "TRIPLE",
        Rage: "RABIA",
        TripleViral: "TRIPLE VIRAL",
        FelineRage: "FELINE RAGE",
        Influenza: "INFLUENZA EQUINA",
        Tetanus: "TETANUS",
        Encephalitis: "EQUINE ENCEPHALITIS",
        Date: "DATE",
        Despa: "DESPARACITACION",
        Product: "PRODUCT",
        Save: "SAVE",
        Feeding: "FEEDING",
        SaveAndRegister: "SAVE AND REGISTER ANOTHER MASCOT",
        Welcome: "Welcome to Holavet",
        Enter: "ENTER",
        WelcomeMessage:
          "From now on you have at your disposal a group of veterinarians who will accompany you 24 hours a day, every day of the year",
        LogOut: "LOG OUT",
        NameOfPet: "Name of your pet",
        SelectRace: "Select the Race",
        SelectColor: "Select the Color",
        SelectSex: "Select the Sex",
        WriteAge: "Age of Pet",
        Helper: "HELPER",
        Doctor: "DOCTORS LIST",
        ADMINISTRATOR: "ADMINISTRATOR",
        Services: "SERVICES",
        DoctorsDirectory: "VETERINARY DIRECTORY",
        SeeHistory: "SEE HISTORY",
        HistoryOfConsultations: "HISTORY OF CONSULTATIONS",
        AddDoctor: "ADD VETERINARY",
        AddDoctorDetailes: "ADD DOCTOR DETAILS",
        AddHelper: "ADD HELPER",
        SeePaymentReports: "SEE PAYMENT REPORTS",
        RegistrationId: "RegistrationId",
        HomeTown: "Home town",
        MedicalCenter: "Medical Center",
        Speciality: "Speciality",
        Specialist: "Specialist",
        Address: "Address",
        Department: "Department",
        Open: "Open",
        Closed: "Closed",
        Inprogress: "In Progress",
        PaymentInfo: `At this moment we are going to begin with the evaluation of the situation of (petName),to correctly direct the attention. \n \n As long as it presents the sign. \n He has presented other signs. \nHave you given any medication? How much? In what dose? \n Did you have an answer? \n PATIENT Are you allergic to any food or medicine? \n\n Before continuing with the attention of (petName), we want to remind you that the cost of veterinary attention is $ 50,000 Which should be canceled at the end of the service, through the PAYMENT HISTORY button, with debit card, credit, baloto, wins, ... \n\n Thanks for staying online, we will send you the list of available doctors after you answer the questions, to continue with the orientation. \n\n We remind you that this orientation does not replace or replace a face-to-face veterinary consultation, and it is necessary, in case PATIENT does not improve or worsen, that you come to a veterinary consultation or if you wish and you are within our coverage area, we can help you manage a face-to-face visit`,
        SelectYourPet: "Select your pet by whom you are going to consult",
        Cat: "Cat",
        Dog: "Dog",
        Horse: "Horse",
        cat: "Cat",
        dog: "Dog",
        horse: "Horse",
        CAT: "CAT",
        DOG: "DOG",
        HORSE: "HORSE",
        FelineCat: "FELINE",
        CanineDog: "CANINE",
        EquineHorse: "EQUINE",

        // Cat Race
        Abisinio: "Abisinio",
        American: "American hard-hair",
        Asian: "Asian",
        Angora: "Angora",
        Turkish: "Turkish",
        African: "Domestic African",
        Russian: "Russian Blue",
        Bengali: "Bengali",
        Balines: "Balines",
        Japnese: "Japnese",
        Norway: "Norwegian Forest",
        Siberia: "Forest Siberia",
        British: "British short hair",
        Burma: "Burmese",
        Cymric: "Cymric",
        Khao: "Khao manee",
        AfricanGold: "African gold",
        Europian: "Creole (Common European)",
        Cornish: "Cornish rex",
        Chinchila: "Exotic chinchilla",
        Escoses: "Fold escoces",
        Himalaya: "Himalayo",
        Korat: "Korat",
        Laperm: "Laperm",
        MaineCoon: "Maine coon",
        Manx: "Manx",
        Egypt: "Egyptian Mau",
        Australia: "Mist australiano",
        Munchkin: "Munchkin",
        Ociagto: "Ocigato",
        Oriental: "Oriental short hair",
        OrientalLarge: "Oriental long hair",
        Persian: "Persian",
        Pixie: "Pixie bob",
        Ragdoll: "Ragdoll",
        Savannah: "Savannah",
        SacredBurma: "Sacred of Burma",
        Selkirk: "Selkirk rex ",
        Siamese: "Siamese",
        Siberian: "Siberian",
        Singapore: "Singapore",
        Snow: "Snowshoe",
        Somali: "Somali",
        Sphinx: "Sphynx the Sphinx",
        Tiffanie: "Tiffanie",
        Tonkinese: "Tonkinese",
        Turkey: "From turco",

        //English Dog Race
        Akita: "Akita",
        American: "American hard-hair",
        // 'Pitbull': "American pitbull terrier",
        Afgan: "Afghan Greyhound",
        Bully: "American bully",
        Basenji: "Basenji",
        Gasset: "Gasset Blue Basset",
        Beagle: "Beagle",
        Bloodhound: "Bloodhound",
        Border: "Border collie",
        Boxer: "Boxer",
        German: "German Braco",
        Bull: "Bull terrier",
        FrenchBull: "French bull dog",
        EnglishBull: "Englisg bulldog",
        Basset: "Basset hound",
        Bichon: "Bichon maltes",
        Boston: "Boston terrier",
        KingCharles: "Cavalier King charles",
        Spain: "Cocker spaniel",
        Collie: "Collie",
        WestCorgi: "West corgi",
        Chihu: "Chihuahua",
        ChowChow: "Chow chow",
        Creole: "Creole",
        Dalmatian: "Dalmatian",
        Dogo: "Dogo",
        Doberman: "Doberman",
        Fila: "Fila brasileiro",
        Fox: "Fox terrier",
        FoxHound: "Fox hound",
        GreyHound: "Greyhound",
        GoldenRetriever: "Golden retriever",
        GreatDanes: "Great Danes",
        Griffon: "Griffon",
        SiberianHusky: "Siberain Husky",
        Jack: "Jack rusell terrier",
        Lebra: "Labrador retriever",
        Alaska: "Alaskan Malamute",
        Mastiff: "Mastiff",
        Papillon: "Papillon",
        GermanShepherd: "German shepherd",
        Australia: "Australian pastor",
        BelgianShepherd: "Belgian shepherd",
        SheepDog: "Shetland sheep dog",
        Irish: "Irish setter",
        Pekings: "Pekings",
        CaucasianShepherd: "Caucasian shepherd",
        Pincher: "Pincher",
        GermanPointer: "German Pointer",
        Pomeranian: "Pomeranian",
        Puli: "Puli",
        Rottweiler: "Rottweiler",
        Schnauzer: "Schnauzer",
        Setter: "Setter",
        ShihTzu: "Shih Tzu",
        SpringerSpaniel: "Springer spaniel",
        Weimaraner: "Weimaraner",
        YorkshireTerrier: "Yorkshire terrier",

        //Englisg Horse race data
        Andalusian: "Andalusian",
        Arab: "Arab",
        Columbian: "Colombian Creole horse",
        QuarterOfMile: "Quarter of a mile",
        Spanish: "Spanish",
        Frisian: "Frisian",
        Palomino: "Palomino",
        Percheron: "Percheron",
        Appalosa: "Appalosa",
        Pinto: "Pinto",
        Paso: "Peruvian paso",
        Portuguese: "Portuguese",
        Falabella: "Falabella",
        Lusitano: "Lusitano",
        Hanoverian: "Hanoverian",
        Belgian: "Belgian shot",
        Argentine: "Argentine chair",
        Lipizzano: "Lipizzano",
        EnglishBlood: "Pure English blood",
        French: "French chair",
        Threw: "Threw",
        Tennessee: "Tennessee",
        Shetland: "Shetland",

        //Gender
        Female: "Female",
        Male: "Male",
        PreQuestionText:
          "TO GUARANTEE FOLLOW UP AND UNDERSTAND THE BEST HEALTH STATUS OF YOUR MASCOT, WE WILL BEGIN WITH QUESTIONS, WHICH WILL TAKE A FEW MINUTES WHILE THE VETERINARY IS ATTENDING YOU.",
        PostQuestionText:
          "For your information and time online. We remind you that this orientation does not replace or substitute a face-to-face veterinary consultation, if Balú does not improve or if it worsens you should consult again.",
        Payment: "Payment",
        ConsultationPayment: "Payment",
        VetNotified:
          "THE VETERINARY IS ALREADY BEING NOTIFIED AND WILL ATTEND YOU BEFORE 30 MINUTES.",
        //Questions
        Question1: "HOW MUCH DOES THE SYMPTOMS PRESENT?",
        Question2: "ALLERGY TO ANY FOOD OR MEDICINE?",
        Question3: "HAVE YOU PROVIDED ANY TYPE OF TREATMENT? HOW MUCH?",
        Question4: "ANY SPECIAL CONDITION OR BACKGROUND?",
        Question5: "WEIGHT",

        "End Consultation": "End Consultation",
        "Questions Answers": "Questions Answers",
        "Confirm Payment": "Confirm Payment",
        ConsultationEndMessage:
          "We HOPE YOU HAVE A HAPPY NIGHT / DAY AND your pet BECOME IMPROVED SOON. REMEMBER THAT IN HOLAVET WE ARE READY FOR YOU.",

        closed: "Closed",
        ongoing: "Ongoing",
        done: "Done",
        pending: "Pending",

        paymentConfirmed: "Payment Confirmed"
      },
      es: {
        Menu: "MENÚ",
        LogIn: "Inicio De Sesión",
        RegisterMe: "REGISTRARME",
        Register: "REGISTRAR",
        "Sign Up": "REGISTRATE",
        Username: "Usuario",
        Password: "Contraseña",
        "Forgot Password": "Olvide mi contraseña?",
        Name: "Nombre",
        NameOfDoctor: "Nombre del doctor",
        Firstname: "Nombre",
        Lastname: "Apellidos",
        UserId: "Nombre de usuario",
        PhoneNo: "Número de teléfono",
        Email: "Email",
        AdminEmail: "AdminEmail",
        "Create password": "Crear contraseña",
        "Confirm password": "Confirmar contraseña",
        "Accept terms and conditions": "Acepto términos y condiciones",
        Consult: "CONSULTAR",
        OpenConsultations: "CONSULTAS ABIERTAS",
        Consultations: "CONSULTAS",
        MyProfile: "MI PERFIL",
        EditProfile: "Editar mi perfil",
        UpdateProfile: "Actualización del perfil",
        Update: "Actualizar",
        VeterinaryDirectory: "DIRECTORIO VETERINARIO",
        HistoryOfConsultaions: "HISTORIAL DE CONSULTAS",
        PaymentHistory: "HISTORIAL DE PAGOS",
        Continue: "CONTINUAR",
        CodeSent: "su código ha enviado a su correo electrónico",
        "Confirm Code": "Confirma código",
        "Passwords dont match":
          "La contraseña y la contraseña no coinciden",
        "Username and Password are not correct":
          "El nombre de usuario y la contraseña no son válidos",
        "All Fields are mandatory": "Todos los campos son obligatorios",
        OK: "OK",
        is: "es",
        "Both Fields are mandatory": "Ambos campos son obligatorios",
        EnterUsername:  "Ingrese su nombre de usuario para restablecer su contraseña",
        EnterEmail: "Ingrese el correo electrónico donde se debe enviar la contraseña",
        PasswordLength: "La contraseña debe tener más de ocho caracteres",
        RegistrationUnsuccessful: "Registro no exitoso",
        RegistrationSuccessful: "Registro exitoso",
        Success: "Éxito",
        SucessMessage: "TU REGISTRO HA SIDO EXITOSO",
        WrongCode: "codigo erroneo",
        ConsultationClosed: "Esta consulta está cerrada",
        CantSendMessage: "No puedes enviar ningún mensaje",
        RegistrationOfPets: "INSCRIPCION DE MASCOTAS",
        DataMissing: "Faltan algunos campos obligatorios",
        Chat: "Charla",
        Send: "Enviar",
        'Options': "Opciones",

        ClinicHistory: "HISTORIA CLINICA",
        Origin: "Procedencia",
        Race: "Raza",
        Color: "Color",
        Sex: "Sexo",
        Age: "Edad",
        Vaccination: "VACUNACIÓN",
        Yes: "SÍ",
        No: "NO",
        PVC: "PVC",
        Other: "OTRA",
        Triple: "TRIPLE",
        Rage: "RABIA",
        TripleViral: "TRIPLE VIRAL",
        FelineRage: "FELINE RABIA",
        Influenza: "INFLUENZA EQUINA",
        Encephalitis: "ENCEPHALITIS EQUINA",
        Tetanus: "TETANO",
        Date: "FECHA",
        Despa: "DESPARACITACION",
        Product: "PRODUCTO",
        Save: "GUARDAR",
        Feeding: "ALIMENTACION",
        SaveAndRegister: "GUARDAR E INSCRIBIR OTRA MASCOTA",
        Welcome: "Bienvenido a Holavet",
        Enter: "INGRESAR",
        WelcomeMessage: "A partir de ahora tienes a tu disposición un grupo de  veterinarios que te acompañar las 24 horas del dia, todos los dias del ano",
        LogOut: "Cerrar sesión",
        NameOfPet: "Nombre de tu mascota",
        SelectRace: "Selecciona la raza",
        SelectColor: "Selecciona el Color",
        SelectSex: "Selecciona el Sexo",
        WriteAge: "Edad de la mascota",
        Helper: "AUXILIAR",
        Doctor: "LISTA DE VETERINARIOS",
        ADMINISTRATOR: "ADMINISTRADOR",
        Services: "SERVICIOS",
        DoctorsDirectory: "DIRECTORIO VETERINARIO",
        SeeHistory: "VER HISTORIAL",
        HistoryOfConsultations: "HISTORIAL DE CONSULTAS",
        AddDoctor: "AGREGAR VETERINARIO",
        AddDoctorDetailes: "Añadir detalles del doctor",
        AddHelper: "AGREGAR AUXILIAR",
        SeePaymentReports: "VER REPORTES DE PAGOS",
        RegistrationId: "Registro médico",
        HomeTown: "Lugar de residencia",
        MedicalCenter: "Centro Médico",
        Speciality: "Especialidad",
        Specialist: "Especialista",
        Address: "Dirección",
        Department: "Muncipio",
        Open: "abierto",
        Closed: "cerrado",
        Inprogress: "en progreso",
        PaymentInfo: `En este momento vamos a comenzar con la evaluación de la situación de (petName), para dirigir correctamente la atención. \n\nSiempre y cuando presente los signos. \nHa presentado otros signos \n¿Has dado alguna medicación? ¿Cuánto cuesta? ¿En qué dosis? \n¿Tuviste una respuesta? \n (petName) ¿Es usted alérgico a algún alimento o medicamento? \n\nAntes de continuar con la atención de (NOMBRE DE LA PET), queremos recordarle que el costo de la atención veterinaria es de $ 50,000 \nQue debe cancelarse al final del servicio, a través del botón HISTORIAL DE PAGOS, con tarjeta de débito, crédito, baloto, victorias, ... \n\nGracias por mantenerse en línea, le enviaremos la lista de médicos disponibles después de responder las preguntas para continuar con la orientación. \n\nLe recordamos que esta orientación no reemplaza ni reemplaza una consulta veterinaria cara a cara, y es necesario, en caso de que el (petName) no mejore o empeore, que acuda a una consulta veterinaria o si lo desea y está dentro de nuestro área de cobertura, podemos ayudarlo a administrar una visita en persona`,
        SelectYourPet: "Selecciona tú mascota por quién vas a consultar",

        Cat: "Felino",
        Dog: "Canino",
        Horse: "Equino",
        cat: "Felino",
        dog: "Canino",
        horse: "Equino",
        CAT: "FELINO",
        DOG: "CANINO",
        HORSE: "EQUINO",
        FelineCat: "FELINO",
        CanineDog: "CANINO",
        EquineHorse: "EQUINO",

        //Cat Race
        Abisinio: "Abisinio",
        American: "Americano de pelo duro",
        Asian: "Asiático",
        Angora: "Angora",
        Turkish: "Turco",
        African: "Africano doméstico",
        Russian: "Azul ruso",
        Bengali: "Bengali",
        Balines: "Balines",
        Japnese: "Bobtail japonés ",
        Norway: "Bosque de noruega ",
        Siberia: "Bosque se Siberia",
        British: "Británico de pelo corto",
        Burma: "Burmes",
        Cymric: "Cymric",
        Khao: "Khao manee",
        AfricanGold: "Dorado africano",
        Europian: "Criollo (Europeo común)",
        Cornish: "Cornish rex",
        Chinchila: "Exótico chinchilla",
        Escoses: "Fold escoces",
        Himalaya: "Himalayo",
        Korat: "Korat",
        Laperm: "Laperm",
        MaineCoon: "Maine coon",
        Manx: "Manx",
        Egypt: "Mau egipcio",
        Australia: "Mist australiano",
        Munchkin: "Munchkin",
        Ociagto: "Ocigato",
        Oriental: "Oriental de pelo corto",
        OrientalLarge: "Oriental de pelo largo",
        Persian: "Persa",
        Pixie: "Pixie bob",
        Ragdoll: "Ragdoll",
        Savannah: "Savannah",
        SacredBurma: "Sagrado de Birmania",
        Selkirk: "Selkirk rex ",
        Siamese: "Siamés",
        Siberian: "Siberiano",
        Singapore: "Singapura",
        Snow: "Snowshoe",
        Somali: "Somalí",
        Sphinx: "Sphynx o esfinge",
        Tiffanie: "Tiffanie",
        Tonkinese: "Tonkinese",
        Turkey: "Van turco",

        //Dog Race
        Akita: "Akita",
        American: "American hard-hair",
        Afgan: "Galgo afgano",
        Bully: "American bully",
        Basenji: "Basenji",
        Gasset: "Basset azul de gascuña",
        Beagle: "Beagle",
        Bloodhound: "Sabueso",
        Border: "Border collie",
        Boxer: "Bóxer",
        German: "Braco Alemán ",
        Bull: "Bull terrier",
        FrenchBull: "Bull dog francés",
        EnglishBull: "Bull dog ingles ",
        Basset: "Basset hound",
        Basset: "Bichon maltes",
        Boston: "Boston terrier",
        KingCharles: "Cavalier King charles",
        Spain: "Cocker spaniel",
        Collie: "Collie",
        WestCorgi: "West corgi",
        Chihu: "Chihuahua",
        ChowChow: "Chow chow",
        Creole: "Criollo",
        Dalmatian: "Dálmata",
        Dogo: "Dogo",
        Doberman: "Doberman",
        Fila: "Fila brasileiro",
        Fox: "Fox terrier",
        FoxHound: "Fox hound",
        GreyHound: "Galgo",
        GoldenRetriever: "Golden retriever",
        GreatDanes: "Gran danes ",
        Griffon: "Grifón",
        SiberianHusky: "Husky siberiano",
        Jack: "Jack rusell terrier",
        Lebra: "Labrador retriever",
        Alaska: "Alaska malamute",
        Mastiff: "Mastin",
        Papillon: "Papillon",
        GermanShepherd: "Pastor alemán",
        Australia: "Pastor australiano",
        BelgianShepherd: "Pastor belga",
        SheepDog: "Shetland sheep dog",
        Irish: "Setter irlandés",
        Pekings: "Pequines",
        CaucasianShepherd: "Pastor del Cáucaso",
        Pincher: "Pincher",
        GermanPointer: "Pointer alemán ",
        Pomeranian: "Pomerania",
        Puli: "Puli",
        Rottweiler: "Rottweiler",
        Schnauzer: "Schnauzer",
        Setter: "Setter",
        ShihTzu: "Shih Tzu",
        SpringerSpaniel: "Springer spaniel",
        Weimaraner: "Weimaraner",
        YorkshireTerrier: "Yorkshire terrier",

        //Horse Reace data
        Andalusian: "Andaluz",
        Arab: "Árabe",
        Columbian: "Caballo criollo colombiano",
        QuarterOfMile: "Cuarto de milla",
        Spanish: "Español",
        Frisian: "Frisón",
        Palomino: "Palomino",
        Percheron: "Percherón",
        Appalosa: "Appalosa",
        Pinto: "Pinto",
        Paso: "Paso peruana",
        Portuguese: "Portugués",
        Falabella: "Falabella",
        Lusitano: "Lusitano",
        Hanoverian: "Hannoveriano",
        Belgian: "Tiro belga",
        Argentine: "Silla argentina",
        Lipizzano: "Lipizzano",
        EnglishBlood: "Pura sangre ingles",
        French: "Silla francés",
        Threw: "Tiro",
        Tennessee: "Tennesse",
        Shetland: "Shetland",

        //Gender
        Female: "Hembra",
        Male: "Macho",
        PreQuestionText:
          "PARA GARANTIZAR EL SEGUIMIENTO Y COMPRENDER MEJOR EL ESTADO DE SALUD DE TU MASCOTA, EMPEZAREMOS CON UNAS PREGUNTAS, LAS CUALES TARDARAN UNOS MINUTOS MIENTRAS TE ATIENDE EL VETERINARIO.",
        PostQuestionText:
          "por tu información y tiempo en línea. Te recordamos que esta orientacion no reemplaza ni sustituye una consulta veterinaria presencial, si Balú no mejora o si empeora debes consultar nuevamente.",
        Payment: "PAGAR",
        ConsultationPayment: "Pago",
        VetNotified: "EL VETERINARIO YA ESTA SIENDO NOTIFICADO Y TE ATENDERÁ ANTES DE 30 MINUTOS.",
        Question1: "¿HACE CUÁNTO PRESENTA LOS SÍNTOMAS?",
        Question2: "¿ALERGIA A ALGÚN ALIMENTO O MEDICAMENTO?",
        Question3: "¿LE HAS SUMINISTRADO ALGÚN TIPO DE TRATAMIENTO? ¿HACE CUÁNTO?",
        Question4: "¿ALGUNA CONDICIÓN ESPECIAL O ANTECEDENTE?",
        Question5: "PESO",

        "End Consultation": "Consulta final",
        "Questions Answers": "Preguntas y respuestas",
        "Confirm Payment": "Confirmar pago",
        ConsultationEndMessage:"ESPERAMOS QUE TENGAS UNA FELIZ NOCHE / DÍA Y QUE TU MASCOTA SE HA MEJORADO PRONTO. RECUERDE QUE EN HOLAVET ESTAMOS LISTOS PARA USTED.",

        closed: "Derrado",
        ongoing: "En Marcha",
        done: "Hecho",
        pending: "Pendiente",

        paymentConfirmed: "Pago confirmado"
      }
    };

    I18n.putVocabularies(dict);

}