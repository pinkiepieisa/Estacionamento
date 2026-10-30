import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import CampoTexto from "../../components/CampoTexto";
import { estilos } from "../../constants/estilos";
import { useProprietarios } from "../../hooks/useProprietarios";

export default function EditarProprietario() {

    const dados = useLocalSearchParams();

    const [nome, setNome] = useState(String(dados.nome));
    const [telefone, setTelefone] = useState(String(dados.telefone));

    const { alterar } = useProprietarios();

    function salvar() {
        alterar(String(dados.id), { nome, telefone })
            .then(() => router.replace("/proprietarios"));
    }

    return (
        <View style={estilos.container}>

            <Text style={estilos.titulo}>Editar Proprietário</Text>

            <CampoTexto titulo="Nome" valor={nome} alterar={setNome} />
            <CampoTexto titulo="Telefone" valor={telefone} alterar={setTelefone} />

            <Pressable style={estilos.botaoEditar} onPress={salvar}>
                <Text style={estilos.textoBotaoEscuro}>Salvar Alterações</Text>
            </Pressable>

        </View>
    );
}
