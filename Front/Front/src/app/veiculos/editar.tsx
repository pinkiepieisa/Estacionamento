import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, Text } from "react-native";
import CampoTexto from "../../components/CampoTexto";
import { estilos } from "../../constants/estilos";
import { useProprietarios } from "../../hooks/useProprietarios";
import { useVeiculos } from "../../hooks/useVeiculos";

export default function EditarVeiculo() {

    const dados = useLocalSearchParams();

    const [placa, setPlaca] = useState(String(dados.placa));
    const [modelo, setModelo] = useState(String(dados.modelo));
    const [cor, setCor] = useState(String(dados.cor));
    const [proprietarioId, setProprietarioId] = useState<number | null>(Number(dados.proprietario_id));

    const { proprietarios, listar } = useProprietarios();
    const { alterar } = useVeiculos();

    useEffect(() => {
        listar();
    }, [listar]);

    function salvar() {
        alterar(String(dados.id), { placa, modelo, cor, proprietario_id: proprietarioId })
            .then(() => router.replace("/veiculos"));
    }

    return (
        <ScrollView style={estilos.container}>

            <Text style={estilos.titulo}>Editar Veículo</Text>

            <CampoTexto titulo="Placa" valor={placa} alterar={setPlaca} />
            <CampoTexto titulo="Modelo" valor={modelo} alterar={setModelo} />
            <CampoTexto titulo="Cor" valor={cor} alterar={setCor} />

            <Text style={estilos.label}>Selecione o Proprietário:</Text>

            {proprietarios.map(item => (
                <Pressable
                    key={item.id}
                    style={[
                        estilos.opcao,
                        proprietarioId === item.id && estilos.selecionado
                    ]}
                    onPress={() => setProprietarioId(item.id)}
                >
                    <Text style={estilos.textoOpcao}>{item.nome}</Text>
                </Pressable>
            ))}

            <Pressable style={estilos.botaoEditar} onPress={salvar}>
                <Text style={estilos.textoBotaoEscuro}>Salvar Alterações</Text>
            </Pressable>

        </ScrollView>
    );
}
