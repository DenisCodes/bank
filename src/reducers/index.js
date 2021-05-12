import { combineReducers } from "redux";

const DEFAULT_STATE = {
    accounts: [
        {id: 1, name: 'Denis', amount: 30.00},
        {id: 2, name: 'Matt', amount: 30.00},
        {id: 3, name: 'Noura', amount: 30.00}
    ]

};

const sortAccounts = (state) => {
    let newState ={
      characters:  [...state.characters]
    };
}

const accountReducer = (state= DEFAULT_STATE, action) =>{
    switch(action.type){
        case 'ADD_ACCOUNT':
        case 'REMOVE_ACCOUNT':
        default:
            return state;
    }
};

export default combineReducers({
    accounts: accountReducer
});