import { I18n } from 'aws-amplify';


export const  setUpLanguage = () => {

    I18n.setLanguage('en');
    const dict = {
    'en': {
        'Sign In': "Sign In",
        'Sign Up': "Register"
    },
    'es': {
        'Sign In': "Registrarse",
        'Sign Up': "Regístrate"
    },

    };

    I18n.putVocabularies(dict);

}