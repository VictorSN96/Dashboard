import { useCallback } from "react";




export const UseDebounce = () =>{
    
    const debounce = useCallback((func: ()=> void) =>{

    setTimeout(()=>{
        func();
    }, 300);    
    }, []);

    return{ debounce };
};