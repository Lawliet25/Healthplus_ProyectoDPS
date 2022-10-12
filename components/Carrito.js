import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import stylesApp from '../src/styles/StylesApp';

function Carrito({ navigation }) {
  return (
    <View style={stylesApp.container}>
      <Text style={stylesApp.texto}>Carrito de compras</Text>
    </View>
  );
}

export default Carrito;