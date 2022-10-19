//Action type.
const LOG_USER = 'Pagina-usuarios/src/componentes/redux/userInfo.js';

//action creator.
export const logUser = (payload) => ({
    type: LOG_USER,
    data: payload,
});

export const userinfoReducer = (initialState = {}, action) => {
    switch(action.type) {
        case LOG_USER:
            return action.data
        default:
            return initialState
    }
}