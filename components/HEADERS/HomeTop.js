import {HStack, Text} from "native-base";
import React from "react";
import Colors from "../../Data/Colores"

function HomeTop(){
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
        fontSize="30"
        fontWeight="bold"  
         marginRight="auto" marginLeft="auto"
        >
        MENU
      </Text>

     </HStack >
  )


}

export default HomeTop;