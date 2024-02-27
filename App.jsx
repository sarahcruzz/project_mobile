import { StyleSheet, StatusBar, View } from 'react-native';
import {Inicial} from './src/telas/Inicial';
import { Usuarios } from './src/telas/Usuarios';

export default function App() {
  return (
    <View style={estilos.container}>
      <StatusBar style="light-content" />
      <Usuarios/>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
  }
});
