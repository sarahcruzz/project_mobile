import { StyleSheet, Text, View, FlatList } from "react-native"
import { Usuario } from "./Usuario"

export function Lista({colecao, remover}){

    return(
        <View>
            <FlatList
                data={colecao}
                keyExtractor={ item => item.codigo }
                renderItem={ ({item}) => (
                    <Usuario 
                        nome={item.nome}
                        email={item.email}
                        telefone={item.telefone}
                        remover={() => remover(item.codigo)}
                    />
                ) }
                ListEmptyComponent={() => (
                    <Text style={estilos.texto}>Nenhum usuário cadastrado</Text>
                )}
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    texto: {
        color: '#fff',
        paddingTop: 24, 
        textAlign: 'center'
    }
})