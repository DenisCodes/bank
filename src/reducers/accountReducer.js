const generateID = () => {
  return `${Date.now()}${Math.floor(Math.random() * 100)}`;
};

const DEFAULT_STATE = {
  accounts: [
    { id: 1, name: 'Vlad', amount: 8, type: 'account' },
    { id: 1, name: 'Vlad', amount: -8, type: 'transaction' },
    { id: 1, name: 'Vlad', amount: 10, type: 'transaction' },
    { id: 1, name: 'Vlad', amount: 8, type: 'transaction' },
    { id: 2, name: 'Vesh', amount: 5, type: 'account' },
    { id: 3, name: 'Kritch', amount: 22, type: 'transaction' },
    { id: 3, name: 'Kritch', amount: -22, type: 'transaction' },
    { id: 3, name: 'Kritch', amount: 22, type: 'account' },
    { id: 4, name: 'Azreal', amount: 15, type: 'account' },
    { id: 5, name: 'Tasselhoff', amount: 19, type: 'account' },
    { id: 6, name: 'Fire', amount: 6, type: 'account' },
    { id: 7, name: 'Frost', amount: 1, type: 'account' },
    { id: 7, name: 'Frost', amount: -1, type: 'transaction' },
    { id: 8, name: 'Storm', amount: 18, type: 'account' },
    { id: 9, name: 'Cloud', amount: 13, type: 'account' },
  ],
  account: [],
  enemies: [],
};


const sortAccounts = (state) => {
  let newState = {
    accounts: [ ...state.accounts ],
    account: state.accounts.filter(acc => acc.type === 'account'),
    transactions: state.accounts.filter(acc => acc.type === 'transaction'),
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
      const accountIndex = state.accounts.findIndex(acc => acc.id === action.payload);
      state.accounts.splice(accountIndex, 1);
      state.totalAccounts -= 1;
      return sortAccounts(state);

    case 'SET_ACCOUNTS':
      return action.payload;

    default:
      return !state ? sortAccounts(DEFAULT_STATE) : state;
  }
}

export default accountReducer;