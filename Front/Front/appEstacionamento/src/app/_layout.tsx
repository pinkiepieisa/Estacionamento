import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: "Estacionamento" }} />

            <Stack.Screen name="proprietarios/index" options={{ title: "Proprietários" }} />
            <Stack.Screen name="proprietarios/cadastrar" options={{ title: "Cadastrar Proprietário" }} />
            <Stack.Screen name="proprietarios/editar" options={{ title: "Editar Proprietário" }} />

            <Stack.Screen name="veiculos/index" options={{ title: "Veículos" }} />
            <Stack.Screen name="veiculos/cadastrar" options={{ title: "Cadastrar Veículo" }} />
            <Stack.Screen name="veiculos/editar" options={{ title: "Editar Veículo" }} />
        </Stack>
    );
}
