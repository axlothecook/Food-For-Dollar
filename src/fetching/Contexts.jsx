import { createContext } from 'react';

export const APIContext = createContext({
    SPOONACULAR_API_KEY: import.meta.env.REACT_APP_API_KEY
});

export const NavbarDataContext = createContext(null);