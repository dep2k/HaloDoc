import { createStore } from "redux";


const initialState = {
    counter:0,
    username:"",
    password: ""
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


export default store = createStore(rootReducer);

