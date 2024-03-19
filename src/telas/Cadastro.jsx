import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Cabecalho } from '../componentes/Cabecalho';

export function Cadastro() {
  return (
    <View style={styles.container}>
        <Cabecalho titulo="Cadastro" />
        <View style={styles.content}>
            <TextInput style={styles.input} placeholder="Nome" />
            <TextInput style={styles.input} placeholder="Email" />
            <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />
            <Button title="Cadastrar" />
        </View>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 6
  },
  content: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
  },
});
