import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import stylesApp from '../src/styles/StylesApp';

function Perfil({ navigation }) {
  return (
    <View style={stylesApp.container}>
      <Text style={stylesApp.texto}>Mi perfil</Text>
    </View>
  );
}

export default Perfil;