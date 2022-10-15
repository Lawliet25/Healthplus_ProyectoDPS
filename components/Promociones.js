import * as React from 'react';
import { View, Text, Button, Image, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import stylesApp from '../src/styles/StylesApp';

import {Searchbar} from 'react-native-paper';

const DATA = [
  {
    id: '1',
    title: 'Pasta de dientes Colgate',
    cantidad: '2 unidades',
    precio: 'Precio normal: $2.50 c/u',
    oferta: 'Precio de oferta: $2.00',
    src:require('../src/img/pasta.jpg'),
  },
  {
    id: '2',
    title: 'Enjuague bucal',
    cantidad: '1 litro',
    precio: 'Precio normal: $6.00',
    oferta: 'Precio de oferta: $4.50',
    src:require('../src/img/enjuague.jpeg'),
  },
  {
    id: '3',
    title: 'Protector solar',
    cantidad: '50 Uv+',
    precio: 'Precio normal: $8.00',
    oferta: 'Precio de oferta: $7.25',
    src:require('../src/img/protector.jpg'),
  },
];

const Item = ({ title, cantidad, precio,oferta, img }) => (
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
  </View>
);

function Promociones() {
  const renderItem = ({ item }) => (
    <Item title={item.title} cantidad={item.cantidad} precio={item.precio} oferta={item.oferta} img={item.src} />
  );

  return (
    <View style={stylesApp.container}>
      <Searchbar style={stylesApp.barra}/>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default Promociones;