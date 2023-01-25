const loggedUser = (state) => {
    const token = localStorage.getItem('token');
    // check if token is valid
    if (token) {
        return {
            ...state,
            authCheck: true
        }
    }

    return {...state, authCheck: false}
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGGED_USER':
            return loggedUser(state, action.todoText);
        default:
            return state;
    }
};