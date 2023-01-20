export const checkAuth = (isAuth, dispatch) => {
    dispatch({
        type: 'action',
        authCheck: isAuth,
    })
};

