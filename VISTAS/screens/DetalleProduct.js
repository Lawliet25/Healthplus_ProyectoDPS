import React from "react"
import {Text,View,Box} from 'native-base'
import Colors from "../../Data/Colores"
import DetalleProductoMain from "../../components/MAINS/DetalleProductoMain"

function DetalleProductoScreen (){
  return(
    <View flex={1}>
      <DetalleProductoMain/>
    </View>
 )
}

export default DetalleProductoScreen;