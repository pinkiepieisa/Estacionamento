import axios from "axios";
import { useCallback, useState } from "react";
import { API } from "../constants/api";

export type Proprietario = {
    id_proprietario: number;
    nome: string;
    cpf: string;
};

export type ProprietarioDados = {
    nome: string;
    cpf: string;
};

export function useProprietarios() {
    const [proprietarios, setProprietarios] = useState<Proprietario[]>([]);

    const listar = useCallback(async () => {
        const res = await axios.get(API + "/proprietario");
        setProprietarios(res.data);
    }, []);

    async function cadastrar(dados: ProprietarioDados) {
        await axios.post(API + "/proprietario", dados);
    }

    async function alterar(id: number | string, dados: ProprietarioDados) {
        await axios.put(API + "/proprietario/" + id, dados);
    }

    async function excluir(id: number) {
        try {
            await axios.delete(API + "/proprietario/" + id);
            await listar();
        } catch (e: any) {
            throw new Error(e.response?.data?.erro ?? "Não foi possível excluir.");
        }
    }

    return { proprietarios, listar, cadastrar, alterar, excluir };
}
