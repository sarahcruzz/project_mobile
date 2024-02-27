import { StyleSheet, View, Text } from "react-native"

export function Lista(){
    return(
        <View style={estilos.texto}>
            <Text style={estilos.texto}>Lista</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    texto: {
        color: '#fff',
        paddingTop: 24
    }
})