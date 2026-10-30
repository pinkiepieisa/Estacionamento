import axios from "axios";
import { useCallback, useState } from "react";
import { API } from "../constants/api";

export type Proprietario = {
    id: number;
    nome: string;
    telefone: string;
};

export function useProprietarios() {
    const [proprietarios, setProprietarios] = useState<Proprietario[]>([]);

    // GET /proprietarios
    const listar = useCallback(async () => {
        const res = await axios.get(API + "/proprietarios");
        setProprietarios(res.data);
    }, []);

    // POST /proprietarios
    async function cadastrar(dados: { nome: string; telefone: string }) {
        await axios.post(API + "/proprietarios", dados);
    }

    // PUT /proprietarios/:id
    async function alterar(id: number | string, dados: { nome: string; telefone: string }) {
        await axios.put(API + "/proprietarios/" + id, dados);
    }

    // DELETE /proprietarios/:id (depois atualiza a lista)
    // O back responde 400 com { erro } quando o proprietário ainda tem veículos
    async function excluir(id: number) {
        try {
            await axios.delete(API + "/proprietarios/" + id);
            await listar();
        } catch (e: any) {
            throw new Error(e.response?.data?.erro ?? "Não foi possível excluir.");
        }
    }

    return { proprietarios, listar, cadastrar, alterar, excluir };
}
