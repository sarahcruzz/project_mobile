import {estilos} from './inicial'
import { View, Text } from "react-native"

export function Inicial(){
    return(
        <View style={estilos.conteiner}>
            <Text style={estilos.texto}>Senai Roberto Mange</Text>
            <Text style={estilos.texto}>Sarah Rodrigues 2DS-TB</Text>

        </View>
    )
}