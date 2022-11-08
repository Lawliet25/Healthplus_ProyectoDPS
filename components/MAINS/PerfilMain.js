import {View,Center,Box, VStack,Flex,Button, ScrollView,HStack, Text ,Image} from 'native-base';
import {Input,Heading} from 'native-base'
import React from 'react';
import Colors from "../../Data/Colores"
import PerfilTabs from "../Notifications/PerfilTabs"
import { MaterialIcons,FontAwesome5,FontAwesome,Entypo  } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native"

function PerfilMain() {
  
  const navigation = useNavigation()

  return (
    
    
    <Box h="full" bg={Colors.underline} px={5}>
     
      {/*Mantiene los items del login en el centro*/}
      <Text mr="auto" ml="auto"mb={2} mt={2} bold color={Colors.backgroundColor} fontSize={18}> Actualizar informacion</Text> 
      <FontAwesome name="user-circle"size={150} color="black"  style={{ marginLeft:'auto',marginRight:'auto'}} />
      
      <VStack space={5}>
        
        {/*INPUT PARA NOMBRE USER*/}
        <Input
          InputLeftElement= {<FontAwesome5 name="user-alt"size={30} color={Colors.backgroundColor} /> }
          variant="underline"
          placeholder="NOMBRE"
          w="90%"
          fontWeight='bold'
          fontSize="20"
          marginTop="5"
          pl={3}
          color={Colors.backgroundColor}
          borderBottomColor={Colors.backgroundColor}
          borderBottomWidth="2"
        />
        {/*INPUT PARA DUI USER*/}
         <Input
          InputLeftElement= {<FontAwesome name="vcard" size={30} color={Colors.backgroundColor} /> }
          variant="underline"
          placeholder="DUI"
          w="90%"
          fontWeight='bold'
          fontSize="20"
          pl={3}
          color={Colors.backgroundColor}
          borderBottomColor={Colors.backgroundColor}
          borderBottomWidth="2"
        />
        {/*INPUT PARA Telefono*/}
        <Input
          InputLeftElement= {<Entypo name="phone" size={30} color={Colors.backgroundColor} /> }
          variant="underline"
          placeholder="TELEFONO"
          w="90%"
          fontWeight='bold'
          fontSize="20"
          pl={3}
          color={Colors.backgroundColor}
          borderBottomColor={Colors.backgroundColor}
          borderBottomWidth="2"
        />
         {/*INPUT PARA correos*/}
        <Input
          InputLeftElement= {<MaterialIcons name="email" size={30} color={Colors.backgroundColor} /> }
          variant="underline"
          placeholder="CORREO"
          w="90%"
          fontWeight='bold'
          fontSize="20"
          pl={2}
          color={Colors.backgroundColor}
          borderBottomColor={Colors.backgroundColor}
          borderBottomWidth="2"
        />
         {/*INPUT PARA CONTARASEÑA*/}
         <Input
          InputLeftElement= {<FontAwesome5 name="key" size={30} color={Colors.backgroundColor}  /> }
          variant="underline"
          type="password"
          placeholder="••••••••"
          pl={2}
          w="90%"
          fontWeight='bold'
          fontSize="24"
          color={Colors.backgroundColor}
           borderBottomColor={Colors.backgroundColor}
          borderBottomWidth="2"
        />
      </VStack>

      <Button 
        my={30}
        w="50%" 
        bold
        rounded={50}
        marginRight="auto" marginLeft="auto"
          bg={Colors.backgroundColor}
          onPress={ ( )=>navigation.navigate("Home") }
        >
        Actualizar informacion
      </Button>
      
    </Box>
    
   
  )
}

export default PerfilMain;
