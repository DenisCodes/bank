import axios from 'axios';
const generateID = () => {
  return `${Date.now()}${Math.floor(Math.random() * 100)}`;
};
//DB Link http://my-json-server.typicode.com/matthewkeaton5/JsonDB322/accounts
let firstRun = 0;
const getDataBase = () => {
  axios.get('http://my-json-server.typicode.com/matthewkeaton5/JsonDB322/accounts')
      .then(response => {
        console.log(response.data);
        DEFAULT_STATE.accounts = response.data;
        console.log(DEFAULT_STATE)
      }).catch(error => {
    console.log(error);
    this.setState({errorMessage: error.message});
  });
}
getDataBase();

var DEFAULT_STATE = {
  accounts: []
};

const sortAccounts = (states) => {
  for(var state in states){

  }
  let newState = {
    accounts: [states.accounts],
    account: states.accounts.filter(acc => acc.type === 'account'),
    transactions: states.accounts.filter(acc => acc.type === 'transaction'),
    state: states.totalAccounts
  };

  return newState;
};


const accountReducer = (state, action) => {
  switch (action.type) {

    case 'ADD_ACCOUNT':
      action.payload.id = generateID();
      state.accounts.push(action.payload);
      return sortAccounts(state);

    case 'REMOVE_ACCOUNT':
      const accountIndex = state.accounts.findIndex(acc => acc.id === action.payload & acc.type === 'account');
      state.accounts.splice(accountIndex, 1);
      state.totalAccounts -= 1;
      return sortAccounts(state);

    case 'SET_ACCOUNTS':
      return action.payload;

    case 'EDIT_ACCOUNT':
      //Add Account
      action.payload.id = generateID();
      state.accounts.push(action.payload);
      //Delete Account
      const accountEditIndex = state.accounts.findIndex(acc => acc.id === action.payload);
      state.accounts.splice(accountEditIndex, 1);
      state.totalAccounts -= 1;
      return sortAccounts(state);


    default:
      return !state ? sortAccounts(DEFAULT_STATE) : state;
  }
}


export default accountReducer;