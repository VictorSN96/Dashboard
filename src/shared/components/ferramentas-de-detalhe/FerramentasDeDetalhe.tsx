import { Box, Button, Divider, Icon, Paper, Skeleton, Theme, Typography, useMediaQuery, useTheme } from "@mui/material";



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
    mostrarBotaoSalvareVoltar = true,

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
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down ('sm'));
    const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down ('md'));
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
                >
                    <Typography 
                        variant="button" 
                        whiteSpace="nowrap" 
                        textOverflow="ellipsis" 
                        overflow="hidden"
                    >
                        Salvar
                    </Typography>
                </Button>
            )}
            {mostrarBotaoSalvarCarregando &&(
                <Skeleton 
                    width={110}
                    height={60}
                />
            )}

            {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando && !smDown) &&(
                <Button
                    color="primary"
                    variant="outlined"
                    onClick={aoClicarEmNovo}
                    disableElevation 
                    endIcon={<Icon>add</Icon>}
                >
                    <Typography 
                        variant="button" 
                        whiteSpace="nowrap" 
                        textOverflow="ellipsis" 
                        overflow="hidden"
                    >
                        {textoBotaoNovo}
                    </Typography>
                </Button>
            )}
            {(mostrarBotaoNovoCarregando && !smDown) &&(
                <Skeleton 
                width={110}
                height={60}
            />
            )}
            
            {(mostrarBotaoSalvareVoltar && !mostrarBotaoSalvareVoltarCarregando && !smDown && !mdDown) &&(
                <Button
                    color="primary"
                    variant="outlined"
                    onClick={aoClicarEmSalvareVoltar}
                    disableElevation 
                    endIcon={<Icon>save</Icon>}
                >
                    <Typography 
                        variant="button" 
                        whiteSpace="nowrap" 
                        textOverflow="ellipsis" 
                        overflow="hidden"
                    >
                        Salvar e Voltar
                    </Typography>
                </Button>
            )}
            {/*{(mostrarBotaoSalvareVoltarCarregando && !smDown && !mdDown) &&(
                <Skeleton 
                    width={1}
                    height={1}
                />
            )}*/}
            {(mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) &&(    
                <Button
                    color="primary"
                    variant="outlined"
                    onClick={aoClicarEmVoltar}
                    disableElevation 
                    endIcon={<Icon>arrow_back</Icon>}
                >
                    <Typography 
                        variant="button" 
                        whiteSpace="nowrap" 
                        textOverflow="ellipsis" 
                        overflow="hidden"
                    >
                        Voltar
                    </Typography>
                </Button>
            )}
            {mostrarBotaoVoltarCarregando &&(    
                <Skeleton 
                    width={110}
                    height={60}
                />
            )}

            {
                (
                    mostrarBotaoVoltar &&
                    (mostrarBotaoNovo || mostrarBotaoApagar || mostrarBotaoSalvar || mostrarBotaoSalvareVoltar)
            ) && (
                <Divider variant="middle" orientation="vertical" />
            )
            }
            
            {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando)&&(
                <Button
                    color="secondary"
                    variant="outlined"
                    onClick={aoClicarEmApagar}
                    disableElevation 
                    endIcon={<Icon>delete</Icon>}
                >
                    <Typography 
                        variant="button" 
                        whiteSpace="nowrap" 
                        textOverflow="ellipsis" 
                        overflow="hidden"
                    >
                        Apagar
                    </Typography>
                </Button>
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

