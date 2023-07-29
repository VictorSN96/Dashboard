import { Box, Button, Divider, Icon, Paper, Skeleton, useTheme } from "@mui/material";



interface IFerramentasDeDetalheProps{
    textoBotaoNovo?: string;

    mostrarBotaoNovo?: boolean;
    mostrarBotaoVoltar?: boolean;
    mostrarBotaoApagar?: boolean;
    mostrarBotaoSalvar?: boolean;
    mostrarBotaoSalvareVoltar?: boolean;

    mostrarBotaoNovoCarregando?: boolean;
    mostrarBotaoVoltarCarregando?: boolean;
    mostrarBotaoApagarCarregando?: boolean;
    mostrarBotaoSalvarCarregando?: boolean;
    mostrarBotaoSalvareVoltarCarregando?: boolean;

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

    mostrarBotaoNovoCarregando = false,
    mostrarBotaoVoltarCarregando = false,
    mostrarBotaoApagarCarregando = false,
    mostrarBotaoSalvarCarregando = false,
    mostrarBotaoSalvareVoltarCarregando = false,

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

            {(mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando) &&(
                <Button
                    color="primary"
                    variant="contained"
                    onClick={aoClicarEmSalvar}
                    disableElevation 
                    endIcon={<Icon>save</Icon>}
                >Salvar</Button>
            )}
            {mostrarBotaoSalvarCarregando &&(
                <Skeleton 
                    width={110}
                    height={60}
                />
            )}

            {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando) &&(
                <Button
                    color="primary"
                    variant="outlined"
                    onClick={aoClicarEmNovo}
                    disableElevation 
                    endIcon={<Icon>add</Icon>}
                >{textoBotaoNovo}</Button>
            )}
            {mostrarBotaoNovoCarregando &&(
                <Skeleton 
                width={110}
                height={60}
            />
            )}
            
            

            {(mostrarBotaoSalvareVoltar && !mostrarBotaoSalvareVoltarCarregando) &&(
                <Button
                    color="primary"
                    variant="outlined"
                    onClick={aoClicarEmSalvareVoltar}
                    disableElevation 
                    endIcon={<Icon>save</Icon>}
                >Salvar e Voltar</Button>
            )}
            {mostrarBotaoSalvareVoltarCarregando &&(
                <Skeleton 
                    width={180}
                    height={60}
                />
            )}
            {(mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) &&(    
                <Button
                    color="primary"
                    variant="outlined"
                    onClick={aoClicarEmVoltar}
                    disableElevation 
                    endIcon={<Icon>arrow_back</Icon>}
                >Voltar</Button>
            )}
            {mostrarBotaoVoltarCarregando &&(    
                <Skeleton 
                    width={110}
                    height={60}
                />
            )}

            <Divider variant="middle" orientation="vertical" />
            
            {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando)&&(
                <Button
                    color="secondary"
                    variant="outlined"
                    onClick={aoClicarEmApagar}
                    disableElevation 
                    endIcon={<Icon>delete</Icon>}
                >Apagar</Button>
            )}
            {mostrarBotaoApagarCarregando &&(
                <Skeleton 
                    width={110}
                    height={60}
                />
            )}
        </Box>
    );
}

