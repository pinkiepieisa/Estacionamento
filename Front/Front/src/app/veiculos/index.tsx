import { router, useFocusEffect } from "expo-router";
import { useCallback } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { estilos } from "../../constants/estilos";
import { useVeiculos } from "../../hooks/useVeiculos";

export default function Veiculos() {

    const { veiculos, listar, excluir } = useVeiculos();

    // Atualiza a lista sempre que a tela recebe foco
    useFocusEffect(
        useCallback(() => {
            listar();
        }, [listar])
    );

    return (
        <View style={estilos.container}>

            <Text style={estilos.titulo}>Gerenciar Veículos</Text>

            <Pressable
                style={estilos.cadastrar}
                onPress={() => router.push("/veiculos/cadastrar")}
            >
                <Text style={estilos.textoBotao}>Cadastrar Veículo</Text>
            </Pressable>

            <FlatList
                data={veiculos}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <View style={estilos.card}>

                        <Text style={estilos.nome}>{item.placa}</Text>
                        <Text>Modelo: {item.modelo}</Text>
                        <Text>Cor: {item.cor}</Text>
                        <Text>Proprietário: {item.Proprietario?.nome}</Text>

                        <View style={estilos.acoes}>

                            <Pressable
                                style={estilos.editar}
                                onPress={() => router.push({
                                    pathname: "/veiculos/editar",
                                    params: {
                                        id: item.id,
                                        placa: item.placa,
                                        modelo: item.modelo,
                                        cor: item.cor,
                                        proprietario_id: item.proprietario_id
                                    }
                                })}
                            >
                                <Text style={estilos.textoBotao}>Editar</Text>
                            </Pressable>

                            <Pressable
                                style={estilos.excluir}
                                onPress={() => excluir(item.id)}
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
