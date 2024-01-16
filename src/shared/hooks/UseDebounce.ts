import { useCallback, useRef } from "react";




export const UseDebounce = (delay = 300, notDelayInFirstTime = true) =>{
    const isFirsTime = useRef(notDelayInFirstTime);
    const debouncing = useRef<NodeJS.Timeout>();
    
    const debounce = useCallback((func: ()=> void) =>{
        if(isFirsTime.current){
            isFirsTime.current = false;
            func();
        }else{
            if(debouncing.current){
                clearTimeout(debouncing.current);
            }
        }

    debouncing.current= setTimeout(()=>{func();}, delay);}, [delay]);

    return{ debounce };
};