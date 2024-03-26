// Recompesas.tsx
import React, { useEffect, useState } from 'react';
import { View, Text,Image,StyleSheet,ScrollView } from 'react-native';
import { RecompensasProps } from '../Types/types';
import CajaObjetivo from '../Componentes/CajaObjetivo';
import Objetivo from '../Clases/Objetivo';
import Recompesa from '../Clases/Recompesa';
import { objetivos } from '../data/Objetivos';

const Recompesas: React.FC<any> = ({ navigation }:RecompensasProps) => {
  
  const[objetivos,setobjetivos]=useState<any[]>([]);
  const[recompesasem,setrecompesasem]=useState<any>();

  useEffect(()=>{
    //poblarobjetivos(objetivos);
    obtenerecompesa();
    recuperarobjetivos()
  },[]);

  const recuperarobjetivos=async ()=>{
    try{
      const allobjetivos:any=await Objetivo.recuperarobjetivos();
      setobjetivos(allobjetivos);
    }catch(e){
      console.log('Ocurrio un error',e)
    }
  }

  const obtenerecompesa=async()=>{
    const recompesasemanal=await Recompesa.obtenerrecompesasemanal();
    console.log(recompesasemanal.imagen);
    setrecompesasem(recompesasemanal);
  }

  const poblarobjetivos = async (objetivos: any[]) => {
    alert('Hola')

    for (let i = 0; i < objetivos.length; i++) {
      const obj = new Objetivo(objetivos[i].des, objetivos[i].puntos, objetivos[i].dia);
      const res: any = await obj.agregarobjetivo();
      if (!res.res) {
        // En caso de error, puedes manejarlo aquí
        console.error("Error al agregar objetivo:", res.mensaje);
        break; // Rompe el bucle en caso de error
      }
    }
  };


  return (
    <View style={styles.recompesa}>
      <View style={styles.container}>
        <Text style={styles.texto}>Recompesa en:{recompesasem?.puntaje} puntos</Text>
        <Image
              style={styles.imagen}
              source={{uri:recompesasem?.imagen}}/>
        <Text style={styles.texto}>{recompesasem?.des}</Text>
      </View> 
      <Text style={styles.titulo}>Objetivos</Text>
       <ScrollView>

        {objetivos.map(objetivo=>(
          <CajaObjetivo key={objetivo.id} titulo={objetivo.des} recompesa={objetivo.puntos} porcentaje={objetivo.Usuarios[0]?.Objetivo_Usuario?.porcentaje}/>
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
    gap:10,
  },
  imagen:{
    width:150,
    height:150,
    borderRadius:20
  },
  texto:{
    fontSize:15,
    fontWeight:'bold'
  },
  titulo:{
    fontWeight:'bold',
    fontSize:20,
  }
})



export default Recompesas;
