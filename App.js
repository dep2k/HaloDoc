
import React from 'react';
import { createStore } from "redux";
import { Provider } from "react-redux";
import AppStackNavigator from './src/Navigation/AppNavigator'


const initialState = {
  counter: 0
};

const rootReducer = (state = initialState, action) => {

  switch (action.type) {

    case 'INCREASE_COUNTER':
      return { counter: state.counter + 1 }
    case 'DECREASE_COUNTER':
      return { counter: state.counter - 1 }
  }
  return state;
};

const store = createStore(rootReducer);

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <AppStackNavigator />
      </Provider>

    );
  }
}


