import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import stylesApp from '../src/styles/StylesApp';

function Compras({ navigation }) {
  return (
    <View style={stylesApp.container}>
      <Text style={stylesApp.texto}>Pantalla de compras</Text>
    </View>
  );
}

export default Compras;