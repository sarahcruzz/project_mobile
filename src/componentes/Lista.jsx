import { StyleSheet, View, FlatList } from "react-native"
import { Usuario } from "./Usuario"

export function Lista(){

    const listaUsuarios =[
        {
            codigo: '1',
            nome: 'João',
            email: 'joao@gmail.com',
            telefone: '(19) 98769-7975'
        },

        {
            codigo: '2',
            nome: 'Maria',
            email: 'maria@gmail.com',
            telefone: '(19) 98300-6547'
        },

        {
            codigo: '3',
            nome: 'Carlos',
            email: 'carlos@gmail.com',
            telefone: '(19) 99550-6767'
        }

    ]

    return(
        <View>
            <FlatList
                data={listaUsuarios}
                keyExtractor={ (item) => {item.codigo} }
                renderItem={ ({item}) => (
                    <Usuario 
                        nome={item.nome}
                        email={item.email}
                        telefone={item.telefone}
                    />
                ) }
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    texto: {
        color: '#fff',
        paddingTop: 24
    }
})