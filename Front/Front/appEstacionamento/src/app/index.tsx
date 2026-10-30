import { View, Text, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";
import { cores } from "../constants/cores";

export default function Home() {
    return (
        <View style={estilos.container}>

            <Text style={estilos.titulo}>Sistema de Estacionamento</Text>
            <Text style={estilos.subtitulo}>Gerenciamento de Cadastros</Text>

            <Pressable
                style={estilos.botao}
                onPress={() => router.push("/proprietarios")}
            >
                <Text style={estilos.textoBotao}>Proprietários</Text>
            </Pressable>

            <Pressable
                style={estilos.botao}
                onPress={() => router.push("/veiculos")}
            >
                <Text style={estilos.textoBotao}>Veículos</Text>
            </Pressable>

        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 25,
        backgroundColor: cores.fundo
    },
    titulo: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center"
    },
    subtitulo: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 35
    },
    botao: {
        backgroundColor: cores.primaria,
        padding: 15,
        borderRadius: 8,
        marginBottom: 15
    },
    textoBotao: {
        color: cores.branco,
        fontSize: 18,
        textAlign: "center"
    }
});
