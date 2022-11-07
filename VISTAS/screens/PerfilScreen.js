import {Text,View,Center} from 'native-base'
import React from 'react'
import PerfilTop from "../../components/HEADERS/PerfilTop"
import PerfilMain from "../../components/MAINS/PerfilMain"

function Perfil (){
  return(
    <>
      <PerfilTop/>
      <PerfilMain/>
    </>

  )
}

export default Perfil;