import {View,Center, Flex,Button, ScrollView,HStack, Text ,Image} from 'native-base';
import React from 'react';
import Colors from "../../Data/Colores"
import CarritoVacio from "../Notifications/CarritoVacio"
import CarritoItems from "../Notifications/CarritoItems"
import {useNavigation} from "@react-navigation/native";

function CarritoMain() {
   const navigation = useNavigation();
  return (
  
    //SI EL CARRITO ESTA VACIO  
    /* <CarritoVacio/>*/

    //SI EL CARRITO tiene Items
    <ScrollView showVerticalScrollIndicator={false}>
      <CarritoItems/>

      <Center mt={5}> 
        <HStack
          rounded={50} 
          justifyContent="space-between" 
          bg={Colors.blanco} 
          shadow={2} w="90%" 
          pl={5}
          h={45} 
          alignItems="center"
        > 
          <Text> Total </Text>
          <Button px={10} h={45} rounded={50} bg={Colors.backgroundColor} bold _text={{color:Colors.blanco,fontWeight:"semibold"}} >  
            $8.00
          </Button>
        </HStack> 
      </Center> 

      <Center px={5}> 
        <Button w="full" h={45} rounded={50} bg={Colors.backgroundColor} mt={10}
          onPress={()=>navigation.navigate("PagoScreen")}
        > 
          PAGAR
        </Button> 
      </Center> 
      
    </ScrollView> 
   

  )
}

export default CarritoMain;
