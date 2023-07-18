import { createContext, useCallback, useContext, useState } from "react";



interface IDrawerOption{
    icon: string;
    label: string;
    path: string;
    
}

interface IDrawerContextdata{
    isDrawerOpen: boolean;
    drawerOptions: IDrawerOption[];
    toggleDrawerOpen: () => void;
    setDrawerOptions: (newDrawerOptions: IDrawerOption[]) => void;
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
    const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([]);


    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);

    }, []); /* useCallback é uma função que serve para armazenar funções */

    const handleSetDrawerOptions = useCallback((NewDrawerOptions: IDrawerOption[]) => {
        setDrawerOptions(NewDrawerOptions);

    }, []);

    return(
        <DrawerContext.Provider value={{ isDrawerOpen, drawerOptions, toggleDrawerOpen, setDrawerOptions: handleSetDrawerOptions }}>
            {children}
        </DrawerContext.Provider>
    )
}