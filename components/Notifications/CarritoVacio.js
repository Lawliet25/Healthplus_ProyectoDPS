import {Box,HStack, Center,Text,View,Button} from "native-base";
import React from "react";
import Colors from "../../Data/Colores";
import {FontAwesome}  from "@expo/vector-icons"
import {useNavigation} from "@react-navigation/native"

const CarritoVacio = () =>{
   const navigation = useNavigation()
  return(
    
    <Box flex={1} bg={Colors.backgroundColor}> 
      <Center h="80%">
        <Center w={200} h={200}bg={Colors.blanco} rounded="full" >
          <FontAwesome name="shopping-basket" size={64} color={Colors.backgroundColor} />
        </Center>
        <Text color={Colors.blanco} bold mt={10}>
         Sin informacion que mostrar
        </Text>
      </Center>
      <Button  w="70%" h="60" borderRadius="150" marginRight="auto" marginLeft="auto" bg={Colors.secondaryColor}
         onPress={() => navigation.navigate('Productos')}
      >
        Ir a productos
      </Button>
    </Box>

  );
}

export default CarritoVacio;