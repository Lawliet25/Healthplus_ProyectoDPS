import * as React from 'react';
import { View, Text, Button, Image, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import stylesApp from '../src/styles/StylesApp';
import {Searchbar} from 'react-native-paper';

const DATA = [
  {
    id: '1',
    title: 'Mascarillas quirúrgicas',
    cantidad: '50 unidades',
    precio: '$5.00',
    src:require('../src/img/img1.jpg'),
  },
  {
    id: '2',
    title: 'Vick-44 jarabe para la tos',
    cantidad: '120 ml',
    precio: '$4.50',
    src:require('../src/img/img2.png'),
  },
  {
    id: '3',
    title: 'Aspirina Bayern',
    cantidad: '100 tabletas',
    precio: '$6.10',
    src:require('../src/img/img3.jpg'),
  },
  {
    id: '4',
    title: 'Tylenol',
    cantidad: '50 tabletas',
    precio: '$4.40',
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

const Item = ({ title, cantidad, precio, img }) => (
  <View style={stylesApp.Subcontainer}>
    <View style={stylesApp.ImageContainer}>
      <Image style={stylesApp.Imgs} source={img} />
    </View>
    <View style={stylesApp.TextContaner}>
      <Text style={stylesApp.titulo}>{title}</Text>
      <Text>{cantidad}</Text>
      <Text>{precio}</Text>
    </View>
  </View>
);

function Producto() {
  const renderItem = ({ item }) => (
    <Item title={item.title} cantidad={item.cantidad} precio={item.precio} img={item.src} />
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

export default Producto;
