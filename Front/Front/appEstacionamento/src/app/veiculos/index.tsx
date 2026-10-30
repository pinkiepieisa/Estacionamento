import { router, useFocusEffect } from "expo-router";
import { useCallback } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { estilos } from "../../constants/estilos";
import { useProprietarios } from "../../hooks/useProprietarios";
import { useVeiculos } from "../../hooks/useVeiculos";

export default function Veiculos() {

    const { veiculos, listar, excluir } = useVeiculos();
    const { proprietarios, listar: listarProprietarios } = useProprietarios();

    useFocusEffect(
        useCallback(() => {
            listar();
            listarProprietarios();
        }, [listar, listarProprietarios])
    );

    function nomeDoDono(fk: number) {
        return proprietarios.find(p => p.id_proprietario === fk)?.nome ?? "-";
    }

    function formatarMensalidade(valor: string) {
        return "R$ " + Number(valor).toFixed(2).replace(".", ",");
    }

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
                keyExtractor={item => String(item.id_veiculo)}
                renderItem={({ item }) => (
                    <View style={estilos.card}>

                        <Text style={estilos.nome}>{item.placa}</Text>
                        <Text>Ano: {item.ano}</Text>
                        <Text>Mensalidade: {formatarMensalidade(item.mensalidade)}</Text>
                        <Text>Proprietário: {nomeDoDono(item.fk_proprietario)}</Text>

                        <View style={estilos.acoes}>

                            <Pressable
                                style={estilos.editar}
                                onPress={() => router.push({
                                    pathname: "/veiculos/editar",
                                    params: {
                                        id: item.id_veiculo,
                                        placa: item.placa,
                                        ano: item.ano,
                                        mensalidade: item.mensalidade,
                                        fk_proprietario: item.fk_proprietario
                                    }
                                })}
                            >
                                <Text style={estilos.textoBotao}>Editar</Text>
                            </Pressable>

                            <Pressable
                                style={estilos.excluir}
                                onPress={() => excluir(item.id_veiculo)}
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
