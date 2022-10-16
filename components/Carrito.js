import * as React from 'react';
import { View, Text, Button, Image, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import stylesApp from '../src/styles/StylesApp';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const DATA = [
  {
    id: '1',
    title: 'Caja de Tylenol',
    cantidad: '2 unidades',
    oferta: 'Precio de oferta: $2.00',
    src:require('../src/img/img4.png'),
  },
  
  {
    id: '5',
    title: 'Cerebrofos',
    cantidad: '60 tabletas',
    precio: '$6.00',
    src:require('../src/img/img5.jpg'),
  },


 
];

const Item = ({ title, cantidad, precio,oferta, img }) => 
( 
  <View style={stylesApp.Subcontainer}>
   
    <View style={stylesApp.ImageContainer}>    
      <Image style={stylesApp.Imgs} source={img} />
    </View>
   
   
    <View style={stylesApp.TextContaner}>
      <Text style={stylesApp.titulo}>{title}</Text>
      <Text>{cantidad}</Text>
      <Text style={stylesApp.ofertas}>{precio}</Text>
      <Text>{oferta}</Text>
    </View>
    
     <View style={stylesApp.ImageContainer}>    
      <AntDesign name="pluscircle" size={24} color="black" /> 
      <Ionicons name="ios-trash-outline" size={30} color="blue" />
    </View>
      
  </View>
 
);

function Promociones() {
  const renderItem = ({ item }) => (
    <Item title={item.title} cantidad={item.cantidad} precio={item.precio} oferta={item.oferta} img={item.src} />
  );

  return (
    <View style={stylesApp.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default Promociones;
