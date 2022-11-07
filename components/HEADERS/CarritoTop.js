import {Box,HStack, Center,Text,View} from "native-base";
import React from "react";
import Colors from "../../Data/Colores";


function CarritoTop(){
  return(
    <HStack 
      space={3} 
      w="full" px={6} 
      bg={Colors.backgroundColor} py={2} 
      alignItems="center"
      safeAreaTop
     >
        <Center w="full" >
          <Text 
            color={Colors.blanco} 
            fontSize="30"
            fontWeight="bold"  
            >
            CARRITO
          </Text>
        </Center >
     </HStack >
  );
}
export default CarritoTop;