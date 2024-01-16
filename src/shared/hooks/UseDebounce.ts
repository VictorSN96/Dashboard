import { useCallback, useRef } from "react";




export const UseDebounce = () =>{
    const debouncing = useRef<NodeJS.Timeout>();
    
    const debounce = useCallback((func: ()=> void) =>{
        if(debouncing.current){
            clearTimeout(debouncing.current);
        }

    debouncing.current= setTimeout(()=>{func();}, 300);}, []);

    return{ debounce };
};