import React from 'react'
import { View ,Text,StyleSheet} from 'react-native'

interface Objetivo{
    titulo:string,
    recompesa:string,
    porcentaje:number
}

function CajaObjetivo({titulo,recompesa,porcentaje}:Objetivo) {

  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>{titulo}</Text>
        <View style={styles.circulo}>
            <Text style={styles.porcentaje}>{porcentaje}%</Text>
        </View>
        <Text>Nivel de progreso</Text>
        <Text>Recompesa al completar:{recompesa} puntos</Text>
        <View style={styles.prueba}></View>
    </View>
  )
}

const styles=StyleSheet.create({
    prueba:{
        width:100,
        height:20,
        backgroundColor:'green',
        
    },
    circulo:{
        width:100,
        height:100,
        borderRadius:50,
        backgroundColor:'yellow',
        alignItems:'center',
        justifyContent:'center',
        borderWidth:2,
        
    },

    container:{
        marginTop:20,
        alignItems:'center',
        gap:5
    },
    titulo:{
        color:'green'
    },
    porcentaje:{
        fontWeight:'bold',
        fontSize:30
    }
})

export default CajaObjetivo