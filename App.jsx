import { StyleSheet, StatusBar, View } from 'react-native';
import {Inicial} from './src/telas/Inicial';
import { Usuarios } from './src/telas/Usuarios';
import { Login } from './src/telas/Login';
import { Sobre } from './src/telas/Sobre';
import { Cadastro } from './src/telas/Cadastro';

export default function App() {
  return (
    <View style={estilos.container}>
      <StatusBar style="light-content" />
      <Inicial/> 
          

    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
  }
});
