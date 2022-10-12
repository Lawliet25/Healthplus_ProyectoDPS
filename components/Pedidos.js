import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import stylesApp from '../src/styles/StylesApp';

function Pedidos({ navigation }) {
  return (
    <View style={stylesApp.container}>
      <Text style={stylesApp.texto}>Pantalla de pedidos</Text>
    </View>
  );
}

export default Pedidos;