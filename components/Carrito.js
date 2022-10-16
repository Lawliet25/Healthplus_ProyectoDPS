import * as React from 'react';
import { View, Text, Button, Image, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import stylesApp from '../src/styles/StylesApp';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const DATA = [
  {
    id: '1',
    title: 'Caja de Tylenol',
    cantidad: '2 unidadades',
    oferta: 'Precio de oferta: $2.00',
    src:require('../src/img/img4.png'),
  },
  
  {
    id: '2',
    title: 'Cerebrofos',
    cantidad: '1 unidad',
    oferta: '$3.00',
    src:require('../src/img/img5.jpg'),
  },

  {
    id: '3',
    title: 'Cerebrofos',
    cantidad: '1 unidad',
    oferta: '$3.00',
    src:require('../src/img/enjuague.jpeg'),
  },

{
    id: '4',
    title: 'Cerebrofos',
    cantidad: '1 unidades',
    oferta: '$3.00',
    src:require('../src/img/protector.jpg'),
  },
 
];

  
const Item = ({ title, cantidad, precio,oferta, img, }) => 
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

function Carrito() {
  const renderItem = ({ item }) => (
    <Item title={item.title} cantidad={item.cantidad} precio={item.precio} oferta={item.oferta} img={item.src} titleAPP={item.titleAPP}/>
  );
  return (
    <View style={stylesApp.container}>

      <Text style={stylesApp.tituloCart}> Listado de compras 
        <MaterialCommunityIcons name="cart-variant" size={24} color="white" /> 
      </Text>
       
      <FlatList
        data={DATA}
        renderItem={renderItem}
        
        keyExtractor={(item) => item.id} />

      <Button title="Buscar Mas productos"/> 
      
      <View style={stylesApp.footerCART}>
       
        <Text style={stylesApp.totalPagoCart}>
          TOTAL: $11 DOLARES 
        </Text>

        <Text style={stylesApp.continuarPago}>
          CONTINUAR <AntDesign name="arrowright" size={15} color="white" />
        </Text>
      </View>
      
    </View>
  );
}


export default Carrito
