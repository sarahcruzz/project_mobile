import {StyleSheet, View, Text } from "react-native"
import { Cabecalho } from "../componentes/Cabecalho"
import { Botao } from "../componentes/Botao"

export function Inicial(){
    return(
        <View style={estilos.conteiner}>
           <Cabecalho/>
           <Botao texto="Usuario"/>
           <Botao texto="Usuario"/>
           <Botao texto="Usuario"/>
        </View>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: '#080a0c'
    }
})