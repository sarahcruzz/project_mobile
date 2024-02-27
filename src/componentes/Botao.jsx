import { StyleSheet, Text, TouchableOpacity } from "react-native"

export const Botao = props => {
    return(
        <TouchableOpacity style={estilos.conteiner}>
            <Text style={estilos.texto}> Usuários </Text>
        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({
    conteiner:{
        backgroundColor: '#6a040f',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 150,
        marginTop: 24,
        marginStart: 24,
        borderRadius: 12,
        borderColor: '#dc2f02',
        borderWidth: 1
    },
    
    texto: {
        color: '#fff',
        fontSize: 20,

    }
})