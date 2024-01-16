import { useSearchParams } from "react-router-dom";

import { FerramentasDaListagem } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";
import { useEffect, useMemo } from "react";




export const ListagemDePessoas: React.FC = () =>{
    const [searchParams, setSearchParams] = useSearchParams();/* interação com input de busca e react router dom*/ 

    const busca = useMemo(() =>{
        return searchParams.get('busca') || '';
    },[searchParams]);

    useEffect(()=>{

        //CidadesService
    }, []);

    return(
        <LayoutBaseDePagina
            titulo='listagem de Pessoas'
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
    
