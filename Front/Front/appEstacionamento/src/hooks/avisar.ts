import { Alert, Platform } from "react-native";

export function avisar(titulo: string, mensagem: string) {
    if (Platform.OS === "web") {
        window.alert(titulo + "\n" + mensagem);
    } else {
        Alert.alert(titulo, mensagem);
    }
}
