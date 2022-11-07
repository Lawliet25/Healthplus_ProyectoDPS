import {View, Flex,Pressable, ScrollView, Text ,Image} from 'native-base';
import React from 'react';
import Productos from '../../Data/Productos';
import Colors from "../../Data/Colores"
import {useNavigation} from "@react-navigation/native"            


function Menu() {
  
  const navigation = useNavigation()
 

  return (
    
    <ScrollView flex={1}>
      <Flex
        direction="flex"
        px={7} 
        pt={5}
        >
        {/* GENERA EL PRODUCTO AUTOMATICAMENTE */}
        {Productos.map((product) =>(
          <Pressable 
            onPress={()=>navigation.navigate("DetalleProducto",product)}
            key={product.id} 
            w="100%" 
            bg={Colors.blanco}
            rounded="md" 
            shadow={2} 
            pt={1} 
            my={3} 
            pb={2}
            overflow="hidden"
            >
            {/* Coloca una imagen al boton del producto */}
            <Image
            source={product.src}
            alt={product.nombre}
            marginTop="3"
            marginLeft="3"
            w="25%" h={20} 
            resizeMode="contain" 
            
            />
            {/* Coloca La informacion a los productos*/}
            <Text fontWeight='bold' position="absolute" marginLeft="120" marginTop="4"paddingRight="2">
              {product.nombre}
            </Text>
            <Text position="absolute" marginLeft="120" marginTop="9" >
              10 unidades 
            </Text>
            <Text  position="absolute" marginLeft="120" marginTop="16">
              {product.precio}
            </Text>
             
          </Pressable>
        ))}
        
      </Flex>
    </ScrollView>
  );
}

export default Menu;
