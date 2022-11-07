import * as React from 'react';
import {NativeBaseProvider,StatusBar} from "native-base";
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./VISTAS/screens/LoginScreen"
import RegisterScreen from "./VISTAS/screens/RegisterScreen"
import PerfilScreen from "./VISTAS/screens/PerfilScreen"
import BottomNav from "./components/NAVIGATION/BottomNav"


const Stack = createNativeStackNavigator();
export default function App(){
 return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar hidden={true}/>
          <Stack.Navigator 
            initialRouteName="Login" screenOptions={{
            headerShown:false,}}>

            <Stack.Screen name="Login" component={LoginScreen} / >
            <Stack.Screen name="Register" component={RegisterScreen} / >
            <Stack.Screen name="Perfil" component={PerfilScreen} / >
            
            <Stack.Screen name="Bottom" component={BottomNav} / >

          </Stack.Navigator >
      </NavigationContainer>
    </NativeBaseProvider>
  );

}
