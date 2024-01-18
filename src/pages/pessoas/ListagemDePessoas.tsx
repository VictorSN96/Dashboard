import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

import { FerramentasDaListagem} from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";
import { IListagemPessoa, PessoaService } from "../../shared/services/api/pessoas/PessoasService";
import { UseDebounce } from "../../shared/hooks";




export const ListagemDePessoas: React.FC = () =>{
    const [searchParams, setSearchParams] = useSearchParams();/* interação com input de busca e a URL usado pelo react router dom*/ 
    const { debounce } = UseDebounce();

    const [rows, setRows] = useState<IListagemPessoa[]> ([]);
    const [isLoading, setIsLoading] = useState(true);
    const [totalCount, setTotalCount] = useState(0);

    const busca = useMemo(() =>{
        return searchParams.get('busca') || '';
    },[searchParams]);

    useEffect(()=>{
        setIsLoading(true);

        debounce(()=>{
            PessoaService.getAll(1, busca)
                .then((result)=> {
                    setIsLoading(false);

                    if (result instanceof Error){
                        alert(result.message);
                    } else {
                        console.log(result);

                        setTotalCount(result.totalCount);
                        setRows(result.data);
                    }
                });
            });
        }, [busca]);


    return(
        <LayoutBaseDePagina
            titulo='Listagem de Pessoas'
            barraDeFerramentas={
                <FerramentasDaListagem
                    mostrarInputBusca
                    textoDaBusca={busca}
                    textoBotaoNovo='Nova'
                    aoMudarTextoDaBusca={texto =>setSearchParams({busca: texto}, { replace: true})}/* interação com input de busca e react router dom*/ 
                />
            }
        >
            <TableContainer component={Paper} variant="outlined" sx={{ m: 1, width: 'auto'}}>{/* sx é um próprio atributo do MUI, ele pega todos os atributos da"{}" e cria uma classe CSS */}
                <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Ações</TableCell>  
                        <TableCell>Nome Completo</TableCell>  
                        <TableCell>Email</TableCell>  
                      </TableRow>  
                    </TableHead>

                    <TableBody>
                        {rows.map(row =>(
                            <TableRow key={row.id}>
                                <TableCell>Ações</TableCell>  
                                <TableCell>{row.nomeCompleto}</TableCell>  
                                <TableCell>{row.email}</TableCell>  
                            </TableRow> 
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </LayoutBaseDePagina>
    );
};
    
