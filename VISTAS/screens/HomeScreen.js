import {Text,View,Box} from 'native-base'
import React from 'react';
import Colors from "../../Data/Colores";
import HomeTop from "../../components/HEADERS/HomeTop"
import HomeMain from "../../components/MAINS/HomeMain";

function HomeScreen (){
  return(
    <Box flex={1} bg={Colors.secondaryColor}>
        
      <HomeTop/>
      <HomeMain/>
        
    </Box>
 )
}

export default HomeScreen;