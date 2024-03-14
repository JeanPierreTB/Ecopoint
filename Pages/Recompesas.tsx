// Recompesas.tsx
import React, { useEffect, useState } from 'react';
import { View, Text,Image,StyleSheet,ScrollView } from 'react-native';
import { RecompensasProps } from '../Types/types';
import CajaObjetivo from '../Componentes/CajaObjetivo';
import Objetivo from '../Clases/Objetivo';

const Recompesas: React.FC<any> = ({ navigation }:RecompensasProps) => {
  
  const[objetivos,setobjetivos]=useState<any[]>([]);

  useEffect(()=>{
    recuperarobjetivos()
  },[]);

  const recuperarobjetivos=async ()=>{
    try{
      const allobjetivos=await Objetivo.recuperarobjetivos();
      setobjetivos(allobjetivos);
    }catch(e){
      console.log('Ocurrio un error',e)
    }
  }
  return (
    <View style={styles.recompesa}>
      {/*<View style={styles.container}>
        <Text style={styles.texto}>Proximo Recompesa:300 puntos</Text>
        <Image
              style={styles.imagen}
              source={{uri:"https://cdn-icons-png.flaticon.com/512/3299/3299954.png"}}/>
        <Text style={styles.texto}>Avatar eco-amigable</Text>
      </View> */}
      <Text style={styles.titulo}>Objetivos</Text>
       <ScrollView>

        {objetivos.map(objetivo=>(
          <CajaObjetivo key={objetivo.id} titulo={objetivo.des} recompesa={objetivo.puntos} porcentaje={0}/>
        ))}
        

      </ScrollView>
      
    </View>
  );
}

const styles=StyleSheet.create({
  recompesa:{
    flex:1,
    marginTop:40
  },
  container:{
    alignItems:'center',
    gap:10
  },
  imagen:{
    width:150,
    height:150
  },
  texto:{
    fontSize:15,
  },
  titulo:{
    fontWeight:'bold',
    fontSize:20,
  }
})



export default Recompesas;
