import { StyleSheet } from 'react-native';

const stylesApp = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00033f',
  },
   Subcontainer: {
    marginVertical: 15,
    flex: 1,
    flexDirection: 'row',
    backgroundColor:'white',
    borderRadius: 15,
    padding: 10,
  },
  SubcontainerM: {
    marginVertical: 15,
    flex: 1,
    flexDirection: 'row',
    backgroundColor:'white',
    borderRadius: 15,
    padding: 10,

  },
  texto: {
    color: 'white'
  },
  titulo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  Imgs: {
    width: 60,
    height: 60,
    borderRadius: 0,
  },
 
  ImageContainer: {
    flex: 1,
  },
  TextContaner: {
    flex: 4,
    marginLeft: 30,
  },
  barra:{
   padding:5,
   marginTop:15,
   backgroundColor:'white',
   borderRadius: 25,
  },
  titulomenu:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00033f',
  },
  ofertas:{
    textDecorationLine:'line-through'
  },
  profile:{
  marginTop:25,
  alignItems:'center',
  color:'white',
  fontSize:20,
  fontWeight: 'bold',
  },
  barrita:{
   backgroundColor:'white',
   borderRadius: 10,
   marginTop:5,
   fontSize:18,
   width:300,
   height:35,
  },
  
  //apartado css para carrito de compras====================================
  tituloCart:{
    color:'white',
    textAlign:'center',
    marginTop:10,
    fontWeight: 'bold',
    fontSize:25,
    
  },
  footerCART:{
    flexDirection:'row',
    padding:5,
  },
  totalPagoCart:{
    color:'white',
    marginLeft:20,
    
    
  },
  continuarPago:{
    color:'white',
    marginLeft:70,
    

  }
  
  
//fin apartado css para carrito de compras====================================

});

export default stylesApp;
