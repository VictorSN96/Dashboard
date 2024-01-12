import { Environment } from "../../../environment";
import { Api } from "../axios-config";

const getAll = async (page = 1, filter = ''): Promise<any> =>{
    try{
        const urlRelativa = `/pessoas?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&nomeCompleto_like=${filter}`;

        const { data } = await Api.get( urlRelativa ); // Desestruturação: chamada para a URL relativa no Bancd de Dados //
    }  catch (error){
        
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

