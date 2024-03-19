import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Cabecalho } from '../componentes/Cabecalho';

export function Sobre() {
  return (
    <View style={styles.container}>
        <Cabecalho titulo="Sobre"/>
        <Text style={styles.title}>página teste</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});
