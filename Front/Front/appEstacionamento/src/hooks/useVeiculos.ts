import axios from "axios";
import { useCallback, useState } from "react";
import { API } from "../constants/api";

export type Veiculo = {
    id_veiculo: number;
    placa: string;
    ano: number;
    mensalidade: string; 
    fk_proprietario: number;
};

export type VeiculoDados = {
    placa: string;
    ano: number;
    mensalidade: number;
    fk_proprietario: number;
};

export function useVeiculos() {
    const [veiculos, setVeiculos] = useState<Veiculo[]>([]);

    const listar = useCallback(async () => {
        const res = await axios.get(API + "/veiculo");
        setVeiculos(res.data);
    }, []);

    async function cadastrar(dados: VeiculoDados) {
        await axios.post(API + "/veiculo", dados);
    }

    async function alterar(id: number | string, dados: VeiculoDados) {
        await axios.put(API + "/veiculo/" + id, dados);
    }

    async function excluir(id: number) {
        await axios.delete(API + "/veiculo/" + id);
        await listar();
    }

    return { veiculos, listar, cadastrar, alterar, excluir };
}
