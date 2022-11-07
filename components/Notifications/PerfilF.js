import {View,Box,Center, Flex,Button, ScrollView,VStack, Text ,Image} from 'native-base';
import React from 'react';
import Colors from "../../Data/Colores"
import {Input,Heading} from 'native-base'

import { MaterialIcons,FontAwesome5,FontAwesome,Entypo  } from '@expo/vector-icons';

const Profile = () =>{
return (
    <Box h="full" bg={Colors.backgroundColor} px={5}>
     
      {/*Mantiene los items del login en el centro*/}
      <Image alt="logo" size="lg" marginRight="auto" marginLeft="auto"
       source ={require("../../assets/logo.png")}
      />
      <VStack space={5}>
        
        {/*INPUT PARA NOMBRE USER*/}
        <Input
          InputLeftElement= {<FontAwesome5 name="user-alt"size={30} color={Colors.underline} /> }
          variant="underline"
          placeholder="Nombre"
          w="90%"
          fontWeight='bold'
          fontSize="20"
          marginTop="5"
          pl={3}
          color={Colors.blanco}
          borderBottomColor={Colors.blanco}
          borderBottomWidth="2"
        />
        {/*INPUT PARA DUI USER*/}
         <Input
          InputLeftElement= {<FontAwesome name="vcard" size={30} color={Colors.underline} /> }
          variant="underline"
          placeholder="Dui"
          w="90%"
          fontWeight='bold'
          fontSize="20"
          pl={3}
          color={Colors.blanco}
          borderBottomColor={Colors.blanco}
          borderBottomWidth="2"
        />
        {/*INPUT PARA Telefono*/}
        <Input
          InputLeftElement= {<Entypo name="phone" size={30} color={Colors.underline} /> }
          variant="underline"
          placeholder="Telefono"
          w="90%"
          fontWeight='bold'
          fontSize="20"
          pl={3}
          color={Colors.blanco}
          borderBottomColor={Colors.blanco}
          borderBottomWidth="2"
        />
         {/*INPUT PARA correos*/}
        <Input
          InputLeftElement= {<MaterialIcons name="email" size={30} color={Colors.underline} /> }
          variant="underline"
          placeholder="correo"
          w="90%"
          fontWeight='bold'
          fontSize="20"
          pl={2}
          color={Colors.blanco}
          borderBottomColor={Colors.blanco}
          borderBottomWidth="2"
        />
         {/*INPUT PARA CONTARASEÑA*/}
         <Input
          InputLeftElement= {<FontAwesome5 name="key" size={30} color={Colors.underline}  /> }
          variant="underline"
          type="password"
          placeholder="contraseña"
          pl={2}
          w="90%"
          fontWeight='bold'
          fontSize="20"
          color={Colors.underline}
           borderBottomColor={Colors.blanco}
          borderBottomWidth="2"
        />
      </VStack>

      <Button 
        my={30}
        w="50%" 
        rounded={50}
        marginRight="auto" marginLeft="auto"
        fontWeight='bold'
          bg={Colors.secondaryColor}
        >
        Actualizar informacion
      </Button>
      
    </Box>
  )
}

export default Profile;
