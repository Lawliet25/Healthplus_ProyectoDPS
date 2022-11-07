import {HStack, Text} from "native-base";
import React from "react";
import Colors from "../../Data/Colores"
import {useNavigation} from "@react-navigation/native" 

function HomeTop(){
  const navigation = useNavigation()
  return (
    <HStack 
      space={3} 
      w="full"
      px={6} 
      bg={Colors.backgroundColor} 
      py={5} 
      alignItems="center"
      safeAreaTop
      >
     
      <Text 
        color={Colors.blanco} 
        fontSize="20"
        fontWeight="bold"  
        marginRight="auto" marginLeft="auto"
        >
        LISTADO DE PRODUCTOS
      </Text>
     </HStack >
     
  )


}

export default HomeTop;