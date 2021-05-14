const generateID = () => {
  //return `${Date.now()}${Math.floor(Math.random() * 100)}`;
  console.log(DEFAULT_STATE.accounts)
  return DEFAULT_STATE.accounts.length+1;
};

const DEFAULT_STATE = {
  accounts: [
    { id: 1, name: 'Vlad', amount: 8, type: 'account', view: true },
    { id: 1, name: 'Vlad', amount: -8, type: 'transaction', view: false },
    { id: 1, name: 'Vlad', amount: 10, type: 'transaction', view: true },
    { id: 1, name: 'Vlad', amount: 8, type: 'transaction', view: true },
    { id: 2, name: 'Vesh', amount: 5, type: 'account', view: true },
    { id: 3, name: 'Kritch', amount: 22, type: 'transaction', view: true },
    { id: 3, name: 'Kritch', amount: -22, type: 'transaction', view: true },
    { id: 3, name: 'Kritch', amount: 22, type: 'account', view: true },
    { id: 4, name: 'Azreal', amount: 15, type: 'account', view: true },
    { id: 5, name: 'Tasselhoff', amount: 19, type: 'account', view: true },
    { id: 6, name: 'Fire', amount: 6, type: 'account', view: true },
    { id: 7, name: 'Frost', amount: 1, type: 'account', view: true },
    { id: 7, name: 'Frost', amount: -1, type: 'transaction', view: true },
    { id: 8, name: 'Storm', amount: 18, type: 'account', view: true },
    { id: 9, name: 'Cloud', amount: 13, type: 'account', view: true },
  ]
};


const sortAccounts = (state) => {
  let newState = {
    accounts: [ ...state.accounts ],
    account: state.accounts.filter(acc => acc.type === 'account'),
    transactions: state.accounts.filter(acc => acc.type === 'transaction' & acc.view === true),
    state: state.totalAccounts
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

    case 'VIEW_ACCOUNT':
      console.log('reached');
      state.accounts.forEach(
          function(element){
            if (element.id === action.payload && element.type === 'transaction'){
              element.view = true;
            }else{
              element.view = false;
            }});
      return sortAccounts(state);

    case 'SET_ACCOUNTS':
      return action.payload;

    default:
      return !state ? sortAccounts(DEFAULT_STATE) : state;
  }
}

export default accountReducer;