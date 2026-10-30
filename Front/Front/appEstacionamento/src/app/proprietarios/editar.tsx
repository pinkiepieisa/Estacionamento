import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import CampoTexto from "../../components/CampoTexto";
import { estilos } from "../../constants/estilos";
import { useProprietarios } from "../../hooks/useProprietarios";

export default function EditarProprietario() {

    const dados = useLocalSearchParams();

    const [nome, setNome] = useState(String(dados.nome));
    const [cpf, setCpf] = useState(String(dados.cpf));

    const { alterar } = useProprietarios();

    function salvar() {
        alterar(String(dados.id), { nome, cpf })
            .then(() => router.replace("/proprietarios"));
    }

    return (
        <View style={estilos.container}>

            <Text style={estilos.titulo}>Editar Proprietário</Text>

            <CampoTexto titulo="Nome" valor={nome} alterar={setNome} />
            <CampoTexto titulo="CPF" valor={cpf} alterar={setCpf} />

            <Pressable style={estilos.botaoEditar} onPress={salvar}>
                <Text style={estilos.textoBotaoEscuro}>Salvar Alterações</Text>
            </Pressable>

        </View>
    );
}
