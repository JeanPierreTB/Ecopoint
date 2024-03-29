import React, { useEffect, useState } from 'react'
import { View ,Text,StyleSheet, ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Types/types';
import CajaRanking from '../Componentes/CajaRanking';
import Usuario from '../Clases/Usuario';

type SoporteProps = {
    navigation: StackNavigationProp<RootStackParamList, 'soporte'>; 
  };

function Soporte({navigation}:SoporteProps) {

  const[ranking,setranking]=useState<any>([]);

  useEffect(()=>{
   obteneranking();
  },[])

  const obteneranking=async()=>{
    try{
        const datos= await Usuario.obtenerranking();
        setranking(datos) 
    }catch(e){
        console.error('Ocurrio un error',e)
    }
  }
  return (
    <View style={styles.container}>
        <Text style={styles.texto}>Rankings de Usuarios</Text>

        <View style={styles.titulos}>
                <Text style={styles.titulo}>Puesto</Text>
                <Text style={styles.titulo}>Usuario</Text>
                <Text style={styles.titulo}>Puntaje</Text>
        </View>

        <ScrollView style={styles.container2}>
            <View style={styles.container3}>

                {ranking?.map((ranki:any,index:number)=>(
                    <CajaRanking id={ranki.id} key={ranki.id} puesto={index+1} nombre={ranki.nombre} foto={ranki.foto} puntaje={ranki.puntaje}/>
                ))}
                
            </View>
            

        </ScrollView>
        
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        gap:20
    },
    texto:{
        fontSize:30,
        color:'green',
        fontWeight:'bold'
    },container2:{
        
        width:'100%',
        height:'100%',
        
        
    },titulo:{
      fontWeight:'bold',
      fontSize:20
    },titulos:{
        
        width:'100%',
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'space-around'
        
    },container3:{
        gap:20,
        backgroundColor: '#FFD700',
        borderRadius:20,
        padding:10
    
    }
    
})

export default Soporte