import { Alert, Platform } from "react-native";

// Alert.alert não funciona no navegador (npm run web), então usamos window.alert nele
export function avisar(titulo: string, mensagem: string) {
    if (Platform.OS === "web") {
        window.alert(titulo + "\n" + mensagem);
    } else {
        Alert.alert(titulo, mensagem);
    }
}
