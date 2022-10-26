import React, {createContext, useContext} from "react";

const PathContext = createContext({});

export const PathProvider = ({children}) => {
    const path = 'https://cuadre-diario-planta.herokuapp.com/';
    // In here we won't use deestructuring anywhere because I am only returning one value

    return (
        <PathContext.Provider value={path}>
            {children}
        </PathContext.Provider>
    );
};

export const usePath = () => {
    const path = useContext(PathContext);
    return path
}
