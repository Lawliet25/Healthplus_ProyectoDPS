import React,{ useState} from 'react';
import { StyleSheet,useWindowDimensions,} from "react-native";
import {TabView,SceneMap,TabBar} from "react-native-tab-view";
import PerfilF from "./PerfilF"
import OrdersS from "./OrdersS"
import Colors from "../../Data/Colores"
import {Text } from 'native-base';

const renderScene = SceneMap ({

  first:PerfilF,
  second:OrdersS

})

export default function PerfilTabs() {
  
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key:"first",
      title:"PERFIL"
    },
    {
      key:"second",
      title:"PEDIDOS",
    },

  ]);
  
  const renderTabsBar = (props)=>(
    <TabBar 
      {...props} 
      tabStyle={styles.tabStyle}
      indicatorStyle={{backgroundColor:Colors.negro}}
      activeColor={Colors.anaranjado}
      inactiveColor={Colors.blanco}
      renderLabel={({route,color}) => <Text style={{color, ...styles.text}} > {route.title} </Text> }
    />
  );
 
  return (
    <TabView
      navigationState={{index,routes}} 
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{with:layout.width}}
      renderTabBar = {renderTabsBar}
    />
  );
}
const styles = StyleSheet.create({
  tabStyle:{
    backgroundColor:"black",
  },
  text:{
    fontSize:13,
    fontWeight:"bold",
  }
  
  
})


