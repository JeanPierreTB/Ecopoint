import React from 'react'
import { View ,Text,StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Types/types';

type SoporteProps = {
    navigation: StackNavigationProp<RootStackParamList, 'soporte'>; 
  };

function Soporte({navigation}:SoporteProps) {
  return (
    <View style={styles.container}>
        <Text style={styles.texto}>¿Necesitas ayuda?</Text>
        <View style={styles.soporte}>
            <View style={styles.icont}>
                <Icon name="question-circle" size={100} color="black" onPress={()=>navigation.navigate('pregunta')}/>
                <Text style={styles.texto}>Preguntas frecuentes</Text>
            </View>
            <View style={styles.icont}>
                <Icon name="comment" size={100} color="black" onPress={()=>navigation.navigate('enviar')}/>
                <Text style={styles.texto}>Enviar comentarios</Text>
            </View>
            
        </View>
        
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    texto:{
        fontSize:30,
        color:'green'
    },
    soporte:{
        marginTop:150,
        gap:80,
        height:'100%',

    },
    icont:{
        alignItems:'center'
    }
})

export default Soporte