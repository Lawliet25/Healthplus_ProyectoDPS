import {View,Text} from "react-native";
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../../VISTAS/screens/HomeScreen";
import ProductoScreen from "../../VISTAS/screens/ProductoScreen";
import DetalleProduct from "../../VISTAS/screens/DetalleProduct";
import DescuentosScreen from "../../VISTAS/screens/DescuentosScreen";
import PagoScreen from "../../VISTAS/screens/PagoScreen";
import CartScreen from "../../VISTAS/screens/CartScreen";
import CarritoVacio from "../Notifications/CarritoVacio";

const Stack = createNativeStackNavigator() 

const StackNav =() =>{
  return(

   <Stack.Navigator 
      initialRouteName="Home" screenOptions={{
      headerShown:false,}}
    >
      <Stack.Screen name="Home" component={HomeScreen} / >
      <Stack.Screen name="Productos" component={ProductoScreen} / >
      <Stack.Screen name="DetalleProducto" component={DetalleProduct} / >
      <Stack.Screen name="Descuento" component={DescuentosScreen} / >
      <Stack.Screen name="PagoScreen" component={PagoScreen} / >
      <Stack.Screen name="Carrito" component={CartScreen} / >
       <Stack.Screen name="PedidoVacio" component={CarritoVacio} / >
  
    </Stack.Navigator>

  )
}

export default StackNav;