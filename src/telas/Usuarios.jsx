import { StyleSheet, View } from "react-native"
import 'react-native-get-random-values'
import {v4 as uuid} from 'uuid'
import { Cabecalho } from "../componentes/Cabecalho"
import { Formulario } from "../componentes/Formulario"
import { Lista } from "../componentes/Lista"
import { useState } from "react"

export function Usuarios(){

    const [listaUsuarios, setListaUsuarios] = useState([])

    const adicionarUsuario = (nome, email, telefone ) => {
        let novoUsuario = {
            codigo: uuid(),
            nome: nome,
            email: email,
            telefone: telefone
        }

        setListaUsuarios([...listaUsuarios, novoUsuario])
        console.log(novoUsuario)
        
    }

    const removerUsuario = codigo => {

        setListaUsuarios(
            listaUsuarios.filter(usuario => usuario.codigo !== codigo)
        )

    }


    return(
        <View style={estilos.conteiner}>
            <Cabecalho titulo="Usuarios"/>
            <Formulario adicionar={adicionarUsuario}/>
            <Lista
                colecao={listaUsuarios}
                remover={removerUsuario}
            />

        </View>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: '#080a0c'
    }
})