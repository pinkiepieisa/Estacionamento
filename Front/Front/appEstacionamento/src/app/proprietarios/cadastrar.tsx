import { router } from "expo-router";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import CampoTexto from "../../components/CampoTexto";
import { estilos } from "../../constants/estilos";
import { useProprietarios } from "../../hooks/useProprietarios";

export default function CadastrarProprietario() {

    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");

    const { cadastrar } = useProprietarios();

    function salvar() {
        cadastrar({ nome, cpf })
            .then(() => router.replace("/proprietarios"));
    }

    return (
        <View style={estilos.container}>

            <Text style={estilos.titulo}>Cadastrar Proprietário</Text>

            <CampoTexto titulo="Nome" valor={nome} alterar={setNome} />
            <CampoTexto titulo="CPF" valor={cpf} alterar={setCpf} />

            <Pressable style={estilos.botao} onPress={salvar}>
                <Text style={estilos.textoBotao}>Cadastrar</Text>
            </Pressable>

        </View>
    );
}
