import { useParams } from "react-router-dom";
import { LayoutBaseDePagina } from "../../shared/layouts";




export const DetalheDePessoas: React.FC = () =>{
    const { id = 'nova' } = useParams<'id'>();

    return(
        <LayoutBaseDePagina titulo='Detalhe de Pessoas'>
            <p>DetalheDePessoas</p>
        </LayoutBaseDePagina>
    );
};

