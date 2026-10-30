import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, Text } from "react-native";
import CampoTexto from "../../components/CampoTexto";
import { estilos } from "../../constants/estilos";
import { avisar } from "../../hooks/avisar";
import { useProprietarios } from "../../hooks/useProprietarios";
import { useVeiculos } from "../../hooks/useVeiculos";

export default function CadastrarVeiculo() {

    const [placa, setPlaca] = useState("");
    const [ano, setAno] = useState("");
    const [mensalidade, setMensalidade] = useState("");
    const [fkProprietario, setFkProprietario] = useState<number | null>(null);

    const { proprietarios, listar } = useProprietarios();
    const { cadastrar } = useVeiculos();

    useEffect(() => {
        listar();
    }, [listar]);

    function salvar() {
        if (!placa || !ano || !mensalidade || fkProprietario === null) {
            avisar("Atenção", "Preencha todos os campos e escolha o proprietário.");
            return;
        }

        cadastrar({
            placa,
            ano: Number(ano),
            mensalidade: Number(mensalidade.replace(",", ".")),
            fk_proprietario: fkProprietario
        })
            .then(() => router.replace("/veiculos"))
            .catch(() => avisar("Erro", "Não foi possível cadastrar o veículo."));
    }

    return (
        <ScrollView style={estilos.container}>

            <Text style={estilos.titulo}>Cadastrar Veículo</Text>

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

            <Pressable style={estilos.botao} onPress={salvar}>
                <Text style={estilos.textoBotao}>Cadastrar</Text>
            </Pressable>

        </ScrollView>
    );
}
