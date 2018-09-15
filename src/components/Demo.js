import I18n from 'react-native-i18n'


export default class Demo extends React.Component {
  // Async call to init the locale
  componentWillMount() {
    I18n.initAsync();
  }
  render () {
    return (
      <Text>{I18n.t('greeting')}</Text>
    )
  }
}

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true

I18n.translations = {
  en: {
    greeting: 'Hi!'
  },
  fr: {
    greeting: 'Bonjour!'
  }
}