import { useState } from "react"
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from "react-native"

export function Formulario(){

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')

    function adicionarUsuario(){
        let novoUsuario = {
            nome: nome,
            email: email,
            telefone: telefone
        }

        console.log(novoUsuario)
    }

    return(
        <View style={estilos.conteiner}>
           <View style={estilos.conteinerCampos}>
                <TextInput 
                    style={estilos.campo}
                    placeholder='Nome'
                    keyboardType='default'
                    placeholderTextColor='#000'
                    onChangeText={setNome}
                    value={nome} 
                />

                <TextInput 
                    style={estilos.campo}
                    placeholder='Email'
                    keyboardType='email-address'
                    placeholderTextColor='#000'
                    onChangeText={setEmail}
                    value={email} 
                />

                <TextInput 
                    style={estilos.campo}
                    placeholder='Telefone'
                    keyboardType='phone-pad'
                    placeholderTextColor='#000'
                    onChangeText={setTelefone}
                    value={telefone} 
                />
           </View>

            <TouchableOpacity style={estilos.botao} onPress={adicionarUsuario}>
                <Text style={estilos.texto}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 10,
        marginVertical: 10
    },  

    conteinerCampos: {
        flex: 1,
    },

    campo: {
        height: 50,
        backgroundColor: '#fff',
        color: '#000',
        marginVertical: 5,
        padding: 10,
        borderRadius: 5,
        fontSize: 16
    },
    botao: {
        width: 60,
        height: 170,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3bb143',
        marginStart: 10,
        borderRadius: 5,
        fontSize: 16
    },
    texto: {
        color: '#fff'
    }
})