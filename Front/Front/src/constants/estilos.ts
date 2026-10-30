import { StyleSheet } from "react-native";
import { cores } from "./cores";

// Estilos compartilhados por todas as telas
export const estilos = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: cores.fundo
    },
    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20
    },
    label: {
        fontSize: 16,
        marginBottom: 10
    },
    // Botão verde (cadastrar)
    cadastrar: {
        backgroundColor: cores.primaria,
        padding: 15,
        borderRadius: 8,
        marginBottom: 20
    },
    // Botão de salvar (cadastro = verde, edição = amarelo)
    botao: {
        backgroundColor: cores.primaria,
        padding: 15,
        borderRadius: 8,
        marginTop: 15,
        marginBottom: 40
    },
    botaoEditar: {
        backgroundColor: cores.editar,
        padding: 15,
        borderRadius: 8,
        marginTop: 15,
        marginBottom: 40
    },
    card: {
        backgroundColor: cores.branco,
        padding: 15,
        borderRadius: 8,
        marginBottom: 10
    },
    nome: {
        fontSize: 18,
        fontWeight: "bold"
    },
    acoes: {
        flexDirection: "row",
        marginTop: 12,
        gap: 10
    },
    editar: {
        backgroundColor: cores.editar,
        padding: 10,
        borderRadius: 5
    },
    excluir: {
        backgroundColor: cores.excluir,
        padding: 10,
        borderRadius: 5
    },
    textoBotao: {
        color: cores.branco,
        textAlign: "center",
        fontSize: 16
    },
    textoBotaoEscuro: {
        color: cores.preto,
        textAlign: "center",
        fontSize: 16
    },
    // Lista de proprietários para escolher no cadastro/edição de veículo
    opcao: {
        backgroundColor: cores.branco,
        padding: 12,
        borderWidth: 1,
        borderColor: cores.borda,
        borderRadius: 6,
        marginBottom: 8
    },
    selecionado: {
        backgroundColor: cores.selecionado,
        borderColor: cores.primaria
    },
    textoOpcao: {
        fontSize: 16
    }
});
