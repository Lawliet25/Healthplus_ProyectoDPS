import {HStack,Center, Text} from "native-base";
import React from "react";
import Colors from "../../Data/Colores"



function PerfilTop(){
  return (

    <HStack 
      space={3} 
      w="full" px={6} 
      bg={Colors.backgroundColor} py={4} 
      alignItems="center"
      safeAreaTop
      >
        <Text 
          color={Colors.blanco} 
          fontSize="15"
          fontWeight="bold"  
          marginRight="auto" marginLeft="auto"
          >
          ELIJA UN METODO DE PAGO
        </Text>
     </HStack >
  )


}

export default PerfilTop;
