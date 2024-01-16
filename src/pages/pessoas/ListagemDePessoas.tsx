import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo } from "react";

import { FerramentasDaListagem } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";
import { PessoaService } from "../../shared/services/api/pessoas/PessoasService";
import { UseDebounce } from "../../shared/hooks";




export const ListagemDePessoas: React.FC = () =>{
    const [searchParams, setSearchParams] = useSearchParams();/* interação com input de busca e a URL usado pelo react router dom*/ 
    const { debounce } = UseDebounce();

    const busca = useMemo(() =>{
        return searchParams.get('busca') || '';
    },[searchParams]);

    useEffect(()=>{

        debounce(()=>{
            PessoaService.getAll(1, busca)
                .then((result)=> {
                    if (result instanceof Error){
                        alert(result.message);
                    } else {
                        console.log(result);
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

        </LayoutBaseDePagina>
    );
};
    
