import React from 'react'
import { View,Text,StyleSheet, ScrollView } from 'react-native'
import CajaAmigos from '../Componentes/CajaAmigos';

function Misamigos() {
  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Mis amigos</Text>
        <View style={styles.container2}>
            <Text style={styles.subtitulo}>Nombre</Text>
            <Text style={styles.subtitulo}>Puntaje</Text>
            <Text style={styles.subtitulo}>Chat</Text>
        </View>
        <ScrollView>
            <View style={styles.container3}>
                {/*<CajaAmigos foto='https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg' nombre='jose' puntaje='150' tipo={false} id={1}/>
                <CajaAmigos foto='https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg' nombre='jose' puntaje='150' tipo={false} id={1}/>
                <CajaAmigos foto='https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg' nombre='jose' puntaje='150' tipo={false} id={1}/>
                <CajaAmigos foto='https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg' nombre='jose' puntaje='150' tipo={false} id={1}/>*/}
            </View>
        </ScrollView>
    </View>
  )
}

export default Misamigos;

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        gap:40
    },titulo:{
        fontSize:30,
        fontWeight:'bold'
    },container2:{
        marginLeft:10,
        flexDirection:'row',
        justifyContent:'space-around',
        width:'90%',
        
    },subtitulo:{
        fontSize:15,
        fontWeight:'bold'
    },container3:{
        marginLeft:5,
        width:'93%',
        gap:20,
    }
})