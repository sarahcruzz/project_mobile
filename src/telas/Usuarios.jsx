import { StyleSheet, View } from "react-native"
import { Cabecalho } from "../componentes/Cabecalho"
import { Formulario } from "../componentes/Formulario"
import { Lista } from "../componentes/Lista"

export function Usuarios(){
    return(
        <View style={estilos.conteiner}>
            <Cabecalho titulo="Usuarios"/>
            <Formulario />
            <Lista />

        </View>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: '#080a0c'
    }
})