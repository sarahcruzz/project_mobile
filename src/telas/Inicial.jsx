import {StyleSheet, View, Text } from "react-native"
import { Cabecalho } from "../componentes/Cabecalho"
import { Botao } from "../componentes/Botao"

export function Inicial(){
    return(
        <View style={estilos.conteiner}>
           <Cabecalho titulo="Localizador" subtitulo="2DS-TB" />
           <Botao texto="Usuario (0)"/>
           <Botao texto="Sensores (0)"/>
           <Botao texto="Sobre (0)"/>
        </View>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: '#080a0c'
    }
})