import{Pressable,Center,Text} from "native-base";
import {StyleSheet } from "react-native";
import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import StackNav from "./StackNav"
import PerfilScreen from "../../VISTAS/screens/PerfilScreen"
import CartScreen from "../../VISTAS/screens/CartScreen"
import DescuentosScreen from "../../VISTAS/screens/DescuentosScreen"

import Colors from "../../Data/Colores"

import { Entypo,AntDesign,FontAwesome,FontAwesome5,MaterialCommunityIcons,MaterialIcons  } from '@expo/vector-icons';

const Tab= createBottomTabNavigator()
const  CustomTab = ({children,onPress }) =>
( 
  <Pressable onPress={onPress} h={70} w={70} rounded="full" bg={Colors.backgroundColor} top={-30} shadow={2} _pressed={{bg:Colors.negro}}>
    {children}
  </Pressable> 
)

const BottomNav =()=> { 
  return(
        <Tab.Navigator backBehavior="Main" initialRouteName="Main" screenOptions={{
          tabBarShowLabel:false,
          tabBarStyle:{...styles.tab},
          headerShown:false,
          tabBarHideOnKeyboard:true
          }}
        >

        <Tab.Screen name="Main" component={StackNav} options={{
          tabBarIcon:({focused})=>(
            <Center> 
              {focused ? (
                <Entypo name="home" size={35} color={Colors.backgroundColor} />
              ):(
                <AntDesign name="home" size={35} color={Colors.negro} />
              )}
            </Center>
          )
        }}/>
        
         <Tab.Screen name="Descuento" component={DescuentosScreen} options={{
           
           tabBarButton:(props) => <CustomTab {...props} />,

            tabBarIcon:({focused})=>(
            <Center> 
              {focused ? (
                
                <MaterialCommunityIcons name="shopping-outline" size={35} color={Colors.blanco} />
              ):(
                <MaterialIcons name="local-offer" size={35} color={Colors.blanco} />
              )}
            </Center>
          )
        }}/>
        
        <Tab.Screen name="Perfil" 
          component={PerfilScreen} options={{
          tabBarIcon:({focused})=>(
          <Center> 
              {focused ? (
                <FontAwesome name="user" size={35} color={Colors.backgroundColor} />
              ):(
                <AntDesign name="user" size={35} color={Colors.negro} />
              )}
            </Center>
          )
        }}/>

    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
 tab:{
   elevation:0,
   backgroundColor:Colors.blanco,
  height:60,
 },

})


export default BottomNav;