export const addAccount = (name, amount, type) => {
  return {
    type: 'ADD_ACCOUNT',
    payload: {
      name, amount, type,
    }
  }
};

export const setTasks = tasks => {
  console.log('reached2')
  console.log(tasks)
  return {
    type: 'SET_TASKS',
    payload: tasks
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

export const viewAccount = (accountId) => {
  return {
    type: 'VIEW_ACCOUNT',
    payload: accountId
  }
};

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