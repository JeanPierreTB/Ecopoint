// Recompesas.tsx
import React from 'react';
import { View, Text,Image,StyleSheet } from 'react-native';
import { RecompensasProps } from '../Types/types';
import CajaObjetivo from '../Componentes/CajaObjetivo';

const Recompesas: React.FC<any> = ({ navigation }:RecompensasProps) => {
  return (
    <View style={styles.recompesa}>
      <View style={styles.container}>
        <Text style={styles.texto}>Proximo Recompesa:300 puntos</Text>
        <Image
              style={styles.imagen}
              source={{uri:"https://cdn-icons-png.flaticon.com/512/3299/3299954.png"}}/>
        <Text style={styles.texto}>Avatar eco-amigable</Text>
      </View>
       <View>
        <Text style={styles.titulo}>Objetivos</Text>
        <CajaObjetivo titulo='Recicla en 3 lugares diferentes esta semana' recompesa='150' porcentaje={10}/>
        <CajaObjetivo titulo='Recicla en 3 lugares diferentes esta semana' recompesa='150' porcentaje={10}/>

      </View>
      
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
