// Consejos.tsx
import React from 'react';
import { View, Text,StyleSheet} from 'react-native';
import { ConsejosProps } from '../Types/types';
import CajaConsejos from '../Componentes/CajaConsejos';


const Consejos: React.FC<any> = ({ navigation}:ConsejosProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Consejos destacados</Text>
        <CajaConsejos url="https://graffica.info/wp-content/uploads/2017/02/logoreciclaje-icono.jpg" des="Es un proceso en cual se puede obtener beneficios ambientales"/>
        <CajaConsejos url="https://graffica.info/wp-content/uploads/2017/02/logoreciclaje-icono.jpg" des="Es un proceso en cual se puede obtener beneficios ambientales"/>
        <CajaConsejos url="https://graffica.info/wp-content/uploads/2017/02/logoreciclaje-icono.jpg" des="Es un proceso en cual se puede obtener beneficios ambientales"/>
        <CajaConsejos url="https://graffica.info/wp-content/uploads/2017/02/logoreciclaje-icono.jpg" des="Es un proceso en cual se puede obtener beneficios ambientales"/>

        
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    marginTop:40,
    flex:1,
    
  },
  texto:{
    textAlign:'center',
    fontWeight:'bold',
    fontSize:30
  }
})

export default Consejos;




