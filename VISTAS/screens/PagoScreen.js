import {Box,Center,FormControl,Input,ScrollView,Text,VStack,HStack,Button,Image,Spacer } from 'native-base'
import React from 'react'
import PagoTop from "../../components/HEADERS/PagoTop"
import PagoMain from "../../components/MAINS/PagoMain"


function PagoScreen (){
  return(
    <Box flex={1}>
      <PagoTop/>
      <PagoMain/>
    </Box>
 )
}
export default PagoScreen;
