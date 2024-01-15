import { useSearchParams } from "react-router-dom";

import { FerramentasDaListagem } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";
import { useMemo } from "react";




export const ListagemDeCidade: React.FC = () =>{
    const [searchParams, setSearchParams] = useSearchParams();/* interação com input de busca e react router dom*/ 

    const busca = useMemo(() =>{
        return searchParams.get('busca') || '';
    },[searchParams]);

    return(
        <LayoutBaseDePagina
            titulo='listagem de cidades'
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
    
