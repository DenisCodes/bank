
export const addAccount = (name, amount, type) => {
  return {
    type: 'ADD_ACCOUNT',
    payload: {
      name, amount, type,
    }
  }
};

export const removeAccount = (accountId) => {
  return {
    type: 'REMOVE_ACCOUNT',
    payload: accountId
  }
}
export const editAccount = (accountId) =>{
  return{
    type: 'EDIT_ACCOUNT',
    payload: accountId
  }

}

export const nextTurn = () => {
  return {
    type: 'NEXT_TURN',
  };
}

export const prevTurn = () => {
  return {
    type: 'PREV_TURN',
  };
}

export const setAccountsList = (accounts) => {
  return {
    type: 'SET_ACCOUNTS',
    payload: accounts
  }
};