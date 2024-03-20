import React from 'react'
import { View ,Image,Text,StyleSheet,TouchableOpacity} from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from '@react-native-async-storage/async-storage'
import Usuario from '../Clases/Usuario';



interface Props{
    foto:string,
    nombre:string,
    puntaje:string,
    tipo?:boolean,
    id:number,
    onupdate:()=>void
}

function CajaAmigos({foto,nombre,puntaje,tipo=true,id,onupdate}:Props) {

  const handleclik=async ()=>{
    const usuario = await AsyncStorage.getItem('usuario');
    const usuarioObjeto = usuario? JSON.parse(usuario):null;
    const usuarioamigo=await Usuario.agregaramigos(usuarioObjeto,id);
    alert(usuarioamigo);
    onupdate();
    
  }
  return (
    <View style={styles.container}>
      {tipo &&(
        <TouchableOpacity >
        <Icon name="user-plus" size={25} color="green" onPress={()=>handleclik()} />
        </TouchableOpacity>
      )}
        


        <View style={styles.container2}>
        <Image
            style={styles.foto}
            source={{
              uri: foto,
            }}
          />
          <Text style={styles.texto}>{nombre}</Text>
        </View>
        
        <Text style={styles.texto}>{puntaje}</Text>

        {!tipo &&(
          <TouchableOpacity >
          <Icon name="comment" size={25} color="green" />
          </TouchableOpacity>
        )}
          
    </View>
  )
}

export default CajaAmigos


const styles=StyleSheet.create({
    container:{
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'space-around',
       width:'100%',
       padding:5,
       borderRadius:20,
       backgroundColor:'lightgreen'
    },
    foto:{
        width:50,
        height:50,
        borderRadius:20
    },
    texto:{
        fontSize: 16, // Tamaño de fuente moderado
        fontWeight: 'bold', // Fuente en negrita para resaltar el nombre
        color: 'black', // Color del texto
        fontFamily: 'Roboto', // Familia de fuente (puedes cambiarla según tus preferencias)
        textTransform: 'capitalize',
    },
    container2:{
        flexDirection:'row',
        alignItems:'center',
        width:'25%',
        justifyContent:'space-between',
        marginLeft:-50
        
    }

})