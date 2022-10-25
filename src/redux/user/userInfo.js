//Action type.
const LOG_USER = 'Pagina-usuarios/src/componentes/redux/userInfo.js';
const LOG_OUT = 'Pagina-usuarios/src/componentes/redux/userInfo.js_LOGOUT'

//action creator.
export const logUser = (payload) => ({
    type: LOG_USER,
    data: payload,
});

export const logOut = () => ({
    type: LOG_OUT
});

export const userinfoReducer = (initialState = {}, action) => {
    switch(action.type) {
        case LOG_USER:
            return action.data
        case LOG_OUT:
            return initialState
        default:
            return initialState
    }
}