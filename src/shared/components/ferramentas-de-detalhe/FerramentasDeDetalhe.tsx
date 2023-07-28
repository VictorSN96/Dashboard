import { Box, Button, Divider, Icon, Paper, useTheme } from "@mui/material";



interface IFerramentasDeDetalheProps{
    textoBotaoNovo?: string;
    mostrarBotaoNovo?: boolean;
    mostrarBotaoVoltar?: boolean;
    mostrarBotaoApagar?: boolean;
    mostrarBotaoSalvar?: boolean;
    mostrarBotaoSalvareVoltar?: boolean;
    aoClicarEmNovo?: () => void;
    aoClicarEmVoltar?: () => void;
    aoClicarEmApagar?: () => void;
    aoClicarEmSalvar?: () => void;
    aoClicarEmSalvareVoltar?: () => void;
}
export const FerramentasDeDetalhe:React.FC<IFerramentasDeDetalheProps> = ({
    textoBotaoNovo= 'Novo',
    mostrarBotaoNovo = true,
    mostrarBotaoVoltar = true,
    mostrarBotaoApagar = true,
    mostrarBotaoSalvar = true,
    mostrarBotaoSalvareVoltar = false,
    aoClicarEmNovo,
    aoClicarEmVoltar,
    aoClicarEmApagar,
    aoClicarEmSalvar,
    aoClicarEmSalvareVoltar,
}) =>{
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
            {mostrarBotaoNovo &&(
                <Button
                    color="primary"
                    variant="contained"
                    onClick={aoClicarEmNovo}
                    disableElevation 
                    endIcon={<Icon>add</Icon>}
                >{textoBotaoNovo}</Button>
            )}
            {mostrarBotaoSalvar &&(
                <Button
                    color="primary"
                    variant="outlined"
                    onClick={aoClicarEmSalvar}
                    disableElevation 
                    endIcon={<Icon>save</Icon>}
                >Salvar</Button>
            )}
            {mostrarBotaoSalvareVoltar &&(
                <Button
                    color="primary"
                    variant="outlined"
                    onClick={aoClicarEmSalvareVoltar}
                    disableElevation 
                    endIcon={<Icon>save</Icon>}
                >Salvar e Voltar</Button>
            )}
            {mostrarBotaoVoltar &&(    
                <Button
                    color="primary"
                    variant="outlined"
                    onClick={aoClicarEmVoltar}
                    disableElevation 
                    endIcon={<Icon>arrow_back</Icon>}
                >Voltar</Button>
            )}

            <Divider variant="middle" orientation="vertical" />
            
            {mostrarBotaoApagar&&(
                <Button
                    color="secondary"
                    variant="outlined"
                    onClick={aoClicarEmApagar}
                    disableElevation 
                    endIcon={<Icon>delete</Icon>}
                >Apagar</Button>
            )}
        </Box>
    );
}

