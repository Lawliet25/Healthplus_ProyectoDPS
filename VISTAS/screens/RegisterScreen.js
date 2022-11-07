import {Button,Input,Heading,Text,Image,View,Box,VStack} from 'native-base'
import React from 'react'
import Colors from "../../Data/Colores"
import { MaterialIcons,FontAwesome5,FontAwesome,Entypo  } from '@expo/vector-icons';


function LoginScreen ({navigation}){
return (
    <Box flex={1} bg={Colors.backgroundColor} >
      <Image flex={1} alt="logo" 
       resiseMode="cover"
       size="lg"
       w="full"
       />
      {/*Mantiene los items del login en el centro*/}
      <Box 
        w="full"
        h="full" 
        position="absolute" 
        top ="-150"
        px="30" 
        justifyContent="center"
        marginTop="40"
        
      >
      <Heading 
        color={Colors.blanco} fontSize="30" fontWeight='bold'  textAlign='center' >REGISTRO
      </Heading>
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
          onPress={ ( )=>navigation.navigate("Bottom") }
        >
        REGISTRAR
      </Button>
      
    </Box>

    </Box>
  );
}

export default LoginScreen; 