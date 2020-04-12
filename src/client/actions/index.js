export const FETCH_USERS = 'FETCH_USERS';
export const fetchUsers = () => async (dispatch, getStates, api) => {
    const res = await api.get("http://react-ssr-api.herokuapp.com/users");
    dispatch({
        type: FETCH_USERS,
        payload: res
    })
}


export const FETCH_CURRENT_USERS = 'FETCH_CURRENT_USERS';
export const fetchCurrentUsers = () => async (dispatch, getStates, api) => {
    const res = await api.get("http://react-ssr-api.herokuapp.com/current_user");
    dispatch({
        type: FETCH_CURRENT_USERS,
        payload: res
    })
}

export const FETCH_ADMINS = 'FETCH_ADMINS'
export const fetchAdmins = () => async (dispatch, getStates, api) => {
    const res = await api.get('/admins');
    dispatch({
        type:FETCH_ADMINS,
        payload: res
    })
}
