import { Box, Button, Icon, Paper, TextField, useTheme } from "@mui/material";


interface IBarraDeFerramentasProps{
    textoDaBusca?: string;
    mostrarInputBusca?: boolean;
    aoMudarTextoDaBusca?: (novoTexto: string) => void;
    textoBotaoNovo?: string;
    mostrarBotaoNovo?: boolean;
    aoClicarEmNovo?: () => void;
}

export const BarraDeFerramentas: React.FC<IBarraDeFerramentasProps> = ({
    textoDaBusca = '',
    mostrarInputBusca = false,
    aoMudarTextoDaBusca, 
    aoClicarEmNovo,
    textoBotaoNovo= "Novo",
    mostrarBotaoNovo= true,
}) =>{
    const theme = useTheme();

    return(
        <Box 
            gap={1} 
            marginX={1} 
            padding={1} 
            paddingX={2} /*paddingX tem os valores apenas aplicados nas laterais */
            display="flex" 
            alignItems="center" 
            height={theme.spacing(5)} 
            component={Paper}
        >
            {mostrarInputBusca &&(
                <TextField
                    size="small"
                    value={textoDaBusca}
                    onChange={(e) => aoMudarTextoDaBusca?.(e.target.value)}
                    placeholder="Pesquisar..."
                />
            )}

            <Box flex={1} display="flex" justifyContent="end">
                {mostrarBotaoNovo &&(
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={aoClicarEmNovo}
                        disableElevation /*No React componentes que são booleanos que forem receber valor True, pode se passar somente o nome do atributo que ele interpreta como True */
                        endIcon={<Icon>add</Icon>}
                    >{textoBotaoNovo}</Button>
                )}
            </Box>
        </Box>
    );
}