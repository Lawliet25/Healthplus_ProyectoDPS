import * as React from 'react';
import { View, Text, Button, Image, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import stylesApp from '../src/styles/StylesApp';

const DATA = [
  {
    id: '1',
    title: 'Productos',
    src:require('../src/img/productos.png'),
  },
  {
    id: '2',
    title: 'Promociones',
    src:require('../src/img/promociones.png'),
  },
  {
    id: '3',
    title: 'Pedidos',
    src:require('../src/img/pedidos.png'),
  },
  {
    id: '4',
    title: 'Carrito',
    src:require('../src/img/carrito.png'),
  },
  {
    id: '5',
    title: 'Perfil',
    src:require('../src/img/perfil.png'),
  },
  {
    id: '5',
    title: 'Salir',
    src:require('../src/img/salir.png'),
  },
];

const Item = ({ title, img }) => (
  <View style={stylesApp.Subcontainer}>
    <View style={stylesApp.ImageContainer}>
      <Image style={stylesApp.Imgs} source={img} />
    </View>
    <View style={stylesApp.TextContaner}>
      <Text style={stylesApp.titulomenu}>{title}</Text>
    </View>
  </View>
);

function Home({ navigation }) {
  const renderItem = ({ item }) => (
    <Item title={item.title} img={item.src} />
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
export default Home;