import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from './components/Home';
import Productos from './components/Productos';
import Promociones from './components/Promociones';
import Pedidos from './components/Pedidos';
import Carrito from './components/Carrito';
import Perfil from './components/Perfil';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        icon={({color, size }) => (
          <MaterialCommunityIcons
            color={color}
            size={size}
            name='exit-to-app'
          />
        )}
        label="Regresar"
        onPress={() => props.navigation.closeDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}>

      <Drawer.Screen
        name="Inicio"
        component={Home}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home-circle"
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Productos"
        component={Productos}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="heart-plus"
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Promociones"
        component={Promociones}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cash-multiple"
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Pedidos"
        component={Pedidos}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="human-dolly"
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Carrito"
        component={Carrito}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cart-variant"
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Mi perfil"
        component={Perfil}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-edit"
              size={24}
              color="black"
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
