import { Box, Button, Divider, Icon, Paper, useTheme } from "@mui/material";




export const FerramentasDeDetalhe:React.FC = () =>{
    const theme = useTheme();
    return(
        <Box
        gap={1} 
        marginX={1} 
        padding={1} 
        paddingX={2} 
        display="flex" 
        alignItems="center" 
        height={theme.spacing(5)} 
        component={Paper}
        >

            <Button
                color="primary"
                variant="contained"
                disableElevation 
                endIcon={<Icon>add</Icon>}
            >Novo</Button>
            <Button
                color="primary"
                variant="outlined"
                disableElevation 
                endIcon={<Icon>save</Icon>}
            >Salvar</Button>
            <Button
                color="primary"
                variant="outlined"
                disableElevation 
                endIcon={<Icon>save</Icon>}
            >Salvar e Voltar</Button>
            <Button
                color="primary"
                variant="outlined"
                disableElevation 
                endIcon={<Icon>arrow_back</Icon>}
            >Voltar</Button>

            <Divider variant="middle" orientation="vertical" />
            
            <Button
                color="secondary"
                variant="outlined"
                disableElevation 
                endIcon={<Icon>delete</Icon>}
            >Apagar</Button>
        </Box>
    );
}

