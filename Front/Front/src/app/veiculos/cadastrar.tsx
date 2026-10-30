import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, Text } from "react-native";
import CampoTexto from "../../components/CampoTexto";
import { estilos } from "../../constants/estilos";
import { useProprietarios } from "../../hooks/useProprietarios";
import { useVeiculos } from "../../hooks/useVeiculos";

export default function CadastrarVeiculo() {

    const [placa, setPlaca] = useState("");
    const [modelo, setModelo] = useState("");
    const [cor, setCor] = useState("");
    const [proprietarioId, setProprietarioId] = useState<number | null>(null);

    const { proprietarios, listar } = useProprietarios();
    const { cadastrar } = useVeiculos();

    // Carrega os proprietários para escolher o dono do veículo
    useEffect(() => {
        listar();
    }, [listar]);

    function salvar() {
        cadastrar({ placa, modelo, cor, proprietario_id: proprietarioId })
            .then(() => router.replace("/veiculos"));
    }

    return (
        <ScrollView style={estilos.container}>

            <Text style={estilos.titulo}>Cadastrar Veículo</Text>

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

            <Pressable style={estilos.botao} onPress={salvar}>
                <Text style={estilos.textoBotao}>Cadastrar</Text>
            </Pressable>

        </ScrollView>
    );
}
