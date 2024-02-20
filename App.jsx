import { StyleSheet, StatusBar, View } from 'react-native';
import {Inicial} from './src/telas/Inicial'


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
