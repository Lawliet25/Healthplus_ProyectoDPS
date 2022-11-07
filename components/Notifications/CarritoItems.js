import {Box,HStack,VStack, Center,Text,View,Button,Pressable,Image} from "native-base";
import React from "react";
import Colors from "../../Data/Colores";
import CartItems from "../../Data/CarritoItems"
import {FontAwesome} from "@expo/vector-icons"

import { SwipeListView } from 'react-native-swipe-list-view';

const Swiper = () =>(
  <SwipeListView
    rightOpenValue={-50}
    previewRowKey="0"
    previewOpenValue={-40}
    previewOpenDelay={3000}
    data = {CartItems.slice(0,3)}
    renderItem = {renderitem}
    renderHiddenItem = {hiddenItem}
    showsVerticalScrollIndicator={false}
  />
);
//Genera los items
const renderitem =(data) =>(
  <Pressable>
    <Box ml={6} mb={3} mt={3}>
      <HStack
        alignItems="center" 
        bg={Colors.blanco} 
        shadow={1} 
        rounded={10} 
        overflow="hidden"
      >
        <Center w="25%" bg={Colors.backgroundColor}>
          <Image source= {data.item.src} alt={data.item.nombre} w="full" h={24} />
        </Center>
        <VStack w="60%" px={1} space={2}> 
          <Text isTruncated color={Colors.negro} ml={2}  bold fontSize={13}>
            {data.item.nombre}
          </Text>
          <Text bold color={Colors.ligthBlack} ml={2} fontSize={14}>
            {data.item.precio}
          </Text>
        </VStack>
        <Center >
          <Button bg={Colors.backgroundColor} _pressed={{background:Colors.backgroundColor}} _text={{color:Colors.blanco}} >
            2
          </Button>
        </Center>
      </HStack>
    </Box>
  </Pressable>
);
//Genera el icono de eliminar 
const hiddenItem= () =>(
  <Pressable 
    w={50} mt={3}
    roundedTopRight={10} 
    roundedBottomRight={10} 
    h="78%" ml="auto" 
    justifyContent="center" 
    bg={Colors.rojo}
   >
    <Center alignItems='center' space={2}>
      <FontAwesome name="trash"size={24} color={Colors.blanco}  />
    </Center>
  </Pressable>
);

const CarritoItems = () =>{
  return(
    <Box mr={6}>
      <Swiper/>
    </Box>
  );
}
export default CarritoItems;