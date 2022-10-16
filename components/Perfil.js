import * as React from 'react';
import { View, Text, Buttom} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import stylesApp from '../src/styles/StylesApp';
import { FontAwesome } from '@expo/vector-icons';


function Perfil({ navigation }) {
  return (
    <View style={stylesApp.container}>
      <View style={stylesApp.profile}>
        <FontAwesome name="user-circle" size={150} color="white" />
        <Text style={stylesApp.profile}>Usuario</Text>
        <Text style={stylesApp.profile}>Nombre</Text>
        <Text style={stylesApp.barrita}>  Usuario</Text>
        <Text style={stylesApp.profile}>Email</Text>
        <Text style={stylesApp.barrita}>  usuario@gmail.com</Text>
        <Text style={stylesApp.profile}> DUI</Text>
        <Text style={stylesApp.barrita}>  012938484</Text>
      </View>
    </View>
  );
}

export default Perfil;