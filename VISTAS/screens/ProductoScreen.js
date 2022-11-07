import {Text,View,Box} from 'native-base'
import React from 'react';
import Colors from "../../Data/Colores";
import ProductosTop from "../../components/HEADERS/ProductosTop";
import ProductosMain from "../../components/MAINS/ProductosMain";
   

function HomeScreen (){
 
  

  return(
    <Box flex={1} bg={Colors.secondaryColor}>

      <ProductosTop/>
      <ProductosMain/>
        
    </Box>
 )
}

export default HomeScreen;