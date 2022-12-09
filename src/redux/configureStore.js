import { combineReducers, createStore, applyMiddleware } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userinfoReducer } from "./user/userInfo";

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    userInfo: userinfoReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware());

export const persistor = persistStore(store); 
