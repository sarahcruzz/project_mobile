import { StyleSheet, View, Text, TouchableOpacity } from "react-native"

export function Usuario({nome, email, telefone, remover}){
    return(
        <View style={estilos.conteiner}>
            <View style={estilos.conteinerDados}>
                <Text style={estilos.texto}>{nome}</Text>
                <Text style={estilos.texto}>{email}</Text>
                <Text style={estilos.texto}>{telefone}</Text>
            </View>

            <TouchableOpacity 
                style={estilos.botao} 
                onPress={remover}
            >
                <Text style={estilos.textoBotao}>-</Text>
            </TouchableOpacity>

        </View>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        flexDirection: 'row',
        margin: 5
    },
    conteinerDados: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    texto: {
        color: '#000',
        fontSize: 16
    },
    botao: {
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginStart: 10,
        backgroundColor: '#f00',
        borderRadius: 5,    
    },
    textoBotao: {
        color: '#fff',
        fontSize: 26
    }
})
