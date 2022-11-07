import {Text,View,Box} from 'native-base'
import Colors from "../../Data/Colores"
import React from 'react'
import CarritoTop from "../../components/HEADERS/CarritoTop"
import CarritoMain from "../../components/MAINS/CarritoMain"

function CartScreen (){
  return(
    <Box flex={1} bg={Colors.secondaryColor}>
      
      <CarritoTop/>
      <CarritoMain/>

    </Box>
 )
}

export default CartScreen; 