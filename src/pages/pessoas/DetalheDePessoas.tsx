import { useNavigate, useParams } from "react-router-dom";

import { LayoutBaseDePagina } from "../../shared/layouts";
import { FerramentasDeDetalhe } from "../../shared/components";




export const DetalheDePessoas: React.FC = () =>{
    const { id = 'nova' } = useParams<'id'>();
    const navigate = useNavigate();

    const handleSave = () =>{
        console.log('Save');
    };

    const handleDelete = () =>{
        console.log('Delete');
    };

    return(
        <LayoutBaseDePagina 
            titulo='Detalhe de Pessoas'
            barraDeFerramentas={
                <FerramentasDeDetalhe
                    textoBotaoNovo='Nova'
                    mostrarBotaoSalvareVoltar
                    mostrarBotaoNovo={id !=='nova'}
                    mostrarBotaoApagar={id !=='nova'}

                    aoClicarEmSalvar={handleSave}
                    aoClicarEmNovo={()=> navigate('/pessoas/detalhe/nova')}
                    aoClicarEmSalvareVoltar={handleSave}
                    aoClicarEmVoltar={()=>navigate('/pessoas')}
                    aoClicarEmApagar={handleDelete}

                />
            }
        >
            <p>DetalheDePessoas</p>
        </LayoutBaseDePagina>
    );
};

