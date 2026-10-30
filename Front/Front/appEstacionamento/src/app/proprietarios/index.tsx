import { router, useFocusEffect } from "expo-router";
import { useCallback } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { estilos } from "../../constants/estilos";
import { avisar } from "../../hooks/avisar";
import { useProprietarios } from "../../hooks/useProprietarios";

export default function Proprietarios() {

    const { proprietarios, listar, excluir } = useProprietarios();

    useFocusEffect(
        useCallback(() => {
            listar();
        }, [listar])
    );

    return (
        <View style={estilos.container}>

            <Text style={estilos.titulo}>Gerenciar Proprietários</Text>

            <Pressable
                style={estilos.cadastrar}
                onPress={() => router.push("/proprietarios/cadastrar")}
            >
                <Text style={estilos.textoBotao}>Cadastrar Proprietário</Text>
            </Pressable>

            <FlatList
                data={proprietarios}
                keyExtractor={item => String(item.id_proprietario)}
                renderItem={({ item }) => (
                    <View style={estilos.card}>

                        <Text style={estilos.nome}>{item.nome}</Text>
                        <Text>CPF: {item.cpf}</Text>

                        <View style={estilos.acoes}>

                            <Pressable
                                style={estilos.editar}
                                onPress={() => router.push({
                                    pathname: "/proprietarios/editar",
                                    params: {
                                        id: item.id_proprietario,
                                        nome: item.nome,
                                        cpf: item.cpf
                                    }
                                })}
                            >
                                <Text style={estilos.textoBotao}>Editar</Text>
                            </Pressable>

                            <Pressable
                                style={estilos.excluir}
                                onPress={() => excluir(item.id_proprietario)
                                    .catch(e => avisar("Erro ao excluir", e.message))}
                            >
                                <Text style={estilos.textoBotao}>Excluir</Text>
                            </Pressable>

                        </View>
                    </View>
                )}
            />

        </View>
    );
}
