import { Environment } from "../../../environment";
import { Api } from "../axios-config";


interface IListagemPessoa {
    id: number;
    email: string;
    cidadeId: number;
    nomeCompleto: string;
}
interface IDetalhePessoa {
    id: number;
    email: string;
    cidadeId: number;
    nomeCompleto: string;
}

type TPessoasComTotalCount ={
    data: IListagemPessoa [];
    totalCount: number;

}

const getAll = async (page = 1, filter = ''): Promise<TPessoasComTotalCount | undefined | Error> =>{
    try{
        const urlRelativa = `/pessoas?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&nomeCompleto_like=${filter}`;

        const { data, headers } = await Api.get( urlRelativa ); // Desestruturação: chamada para a URL relativa no Banco de Dados //
    
        if (data){
            return{
                data,
                totalCount: Number(headers['x-total-count'] || Environment.LIMITE_DE_LINHAS),
            };
        }

    } catch (error){
        console.error(error);
        return new Error((error as {message: string}).message || 'Erro ao listar os registros.');

    }     
};

const getById = async (): Promise<any> =>{};

const create = async (): Promise<any> =>{};

const updateById = async (): Promise<any> =>{};

const deleteById = async (): Promise<any> =>{};

export const PessoaService = {
    getAll, 
    getById, 
    create,
    deleteById,
    updateById,

};

