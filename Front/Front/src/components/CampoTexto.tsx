import { View, Text, TextInput, StyleSheet } from "react-native";
import { cores } from "../constants/cores";

export default function CampoTexto({ titulo, valor, alterar }: any) {
    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>{titulo}</Text>

            <TextInput
                style={estilos.campo}
                value={valor}
                onChangeText={alterar}
                placeholder={"Digite " + titulo.toLowerCase()}
            />
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        marginBottom: 15
    },
    titulo: {
        fontSize: 16,
        marginBottom: 5
    },
    campo: {
        borderWidth: 1,
        borderColor: cores.borda,
        backgroundColor: cores.branco,
        borderRadius: 6,
        padding: 12
    }
});
