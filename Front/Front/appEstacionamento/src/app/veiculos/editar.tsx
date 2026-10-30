import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, Text } from "react-native";
import CampoTexto from "../../components/CampoTexto";
import { estilos } from "../../constants/estilos";
import { avisar } from "../../hooks/avisar";
import { useProprietarios } from "../../hooks/useProprietarios";
import { useVeiculos } from "../../hooks/useVeiculos";

export default function EditarVeiculo() {

    const dados = useLocalSearchParams();

    const [placa, setPlaca] = useState(String(dados.placa));
    const [ano, setAno] = useState(String(dados.ano));
    const [mensalidade, setMensalidade] = useState(String(dados.mensalidade));
    const [fkProprietario, setFkProprietario] = useState<number>(Number(dados.fk_proprietario));

    const { proprietarios, listar } = useProprietarios();
    const { alterar } = useVeiculos();

    useEffect(() => {
        listar();
    }, [listar]);

    function salvar() {
        if (!placa || !ano || !mensalidade) {
            avisar("Atenção", "Preencha todos os campos.");
            return;
        }

        alterar(String(dados.id), {
            placa,
            ano: Number(ano),
            mensalidade: Number(mensalidade.replace(",", ".")),
            fk_proprietario: fkProprietario
        })
            .then(() => router.replace("/veiculos"))
            .catch(() => avisar("Erro", "Não foi possível salvar as alterações."));
    }

    return (
        <ScrollView style={estilos.container}>

            <Text style={estilos.titulo}>Editar Veículo</Text>

            <CampoTexto titulo="Placa" valor={placa} alterar={setPlaca} />
            <CampoTexto titulo="Ano" valor={ano} alterar={setAno} />
            <CampoTexto titulo="Mensalidade" valor={mensalidade} alterar={setMensalidade} />

            <Text style={estilos.label}>Selecione o Proprietário:</Text>

            {proprietarios.map(item => (
                <Pressable
                    key={item.id_proprietario}
                    style={[
                        estilos.opcao,
                        fkProprietario === item.id_proprietario && estilos.selecionado
                    ]}
                    onPress={() => setFkProprietario(item.id_proprietario)}
                >
                    <Text style={estilos.textoOpcao}>{item.nome}</Text>
                </Pressable>
            ))}

            <Pressable style={estilos.botaoEditar} onPress={salvar}>
                <Text style={estilos.textoBotaoEscuro}>Salvar Alterações</Text>
            </Pressable>

        </ScrollView>
    );
}
