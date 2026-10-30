import axios from "axios";
import { useCallback, useState } from "react";
import { API } from "../constants/api";

export type VeiculoDados = {
    placa: string;
    modelo: string;
    cor: string;
    proprietario_id: number | null;
};

export function useVeiculos() {
    const [veiculos, setVeiculos] = useState<any[]>([]);

    // GET /veiculos (o back-end já devolve o Proprietario junto, via include)
    const listar = useCallback(async () => {
        const res = await axios.get(API + "/veiculos");
        setVeiculos(res.data);
    }, []);

    // POST /veiculos
    async function cadastrar(dados: VeiculoDados) {
        await axios.post(API + "/veiculos", dados);
    }

    // PUT /veiculos/:id
    async function alterar(id: number | string, dados: VeiculoDados) {
        await axios.put(API + "/veiculos/" + id, dados);
    }

    // DELETE /veiculos/:id (depois atualiza a lista)
    async function excluir(id: number) {
        await axios.delete(API + "/veiculos/" + id);
        await listar();
    }

    return { veiculos, listar, cadastrar, alterar, excluir };
}
