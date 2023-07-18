import { Button } from '@mui/material';
import { Routes, Route, Navigate} from 'react-router-dom';
import { useAppThemeContext, useDrawerContext } from '../shared/contexts';




export const Approutes = () =>{
    const { toggleTheme } = useAppThemeContext();
    const { toggleDrawerOpen} = useDrawerContext();

    return(
        <Routes>
            <Route 
                path="/pagina-inicial" 
                element={
                    <div>
                        <Button variant='contained' color='primary' onClick={toggleDrawerOpen}> Toggle Drawer </Button>
                        <Button variant='contained' color='primary' onClick={toggleTheme}> Temas </Button>
                    </div>
                }
            />
            
            <Route path='*' element={<Navigate to="/pagina-inicial"/>} />
        </Routes>

    );
        
}
