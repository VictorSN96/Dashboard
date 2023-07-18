import { createContext, useCallback, useContext, useState } from "react";




interface IDrawerContextdata{
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
}

interface IDrawerProviderProps{
    children: React.ReactNode
}

const DrawerContext = createContext({} as IDrawerContextdata);

export const useDrawerContext = () =>{
    return useContext(DrawerContext);
};

export const DrawerProvider: React.FC< IDrawerProviderProps > = ({ children }) =>{
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);

    }, []); /* useCallback é uma função que serve para armazenar funções */


    return(
        <DrawerContext.Provider value={{ isDrawerOpen,  toggleDrawerOpen }}>
            {children}
        </DrawerContext.Provider>
    )
}