import {HStack,Button,Box,ScrollView,Image,Heading,Text,Spacer,Pressable} from 'native-base'
import Colors from "../../Data/Colores";
import * as React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import NumericInput from "react-native-numeric-input"
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {useNavigation} from "@react-navigation/native";




function DetalleProductos ( {route} ){
  
  const [value,setValue]= useState(0);
  
  const navigation = useNavigation();
  
  //const product=route.params

  return(

    <Box SafeArea flex={1} bg={Colors.blanco} >
      <ScrollView px={5}>
           
        <Button ml="auto" rounded="full" 
          mt={5} bg={Colors.backgroundColor}
          onPress={()=>navigation.navigate("Productos")} 
        >
          <Ionicons name="arrow-undo" size={30} color={Colors.blanco} />
        </Button>

        <Image 
          //
          alt="Producto"
          w="full"
          h={300}
          resizeMode="contain"
        /> 
        <Heading bold fontSize={20} mb={2} lineHeight={22}>
          
        </Heading>
        <HStack space={2} alignItems="center" my={5} ml={2}>
         <NumericInput
          value={value}
          totalWidth={140}
          totalHeight={50}
          iconSize={30}
          step={1}
          maxValue={5}
          minValue={0}
          borderColor={Colors.negro}
          rounded
          textColor={Colors.negro}
          iconStyle={{ color:Colors.blanco }}
          rightButtonBackgroundColor={Colors.backgroundColor}
          leftButtonBackgroundColor={Colors.backgroundColor}
         />
          <Spacer/>
          <Heading bold mr={3} fontSize={21}>
            $4.50
          </Heading>
        </HStack >
        <Text bold lineHeight={23} mt={3} fontSize={15}> 
          n°1 recomendada por los médicos para aliviar el dolor y bajar la fiebre.
          Los productos de TYLENOL contienen el ingrediente activo denominado acetaminofén y tienen una fórmula especial para bajar la fiebre y aliviar
          temporalmente dolores menoress
        </Text>
        <Button
          mt={7} w="100%" h="60" borderRadius="150"
          marginRight="auto" marginLeft="auto"
          bg={Colors.backgroundColor}
          onPress={()=>navigation.navigate("Carrito")}
        >
          Agregar al carrito 
        </Button>
      </ScrollView>
    </Box>
 )
}

export default DetalleProductos;