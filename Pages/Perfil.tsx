import React from 'react'
import { View,Image, StyleSheet,Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Cajaestadistica from '../Componentes/Cajaestadistica'
import BarraInferior from '../Componentes/BarraInferior'


function Perfil() {
  return (
    <View style={styles.container}>
        <Image
          style={styles.imagen}
          source={{ uri: 'https://concepto.de/wp-content/uploads/2018/10/bosque2-e1539893598295.jpg' }}
        />
        <Image
          style={styles.imagen2}
          source={{ uri: 'https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg' }}
          
          />
        <Text style={styles.texto}>Rodrigo Torres</Text>
        <Text style={styles.numero}>+51 915 131 135</Text>
        <View style={styles.botones}>
            <TouchableOpacity style={styles.boton}>
                <Icon name="user-plus" size={20} color="green" />
                <Text style={styles.textob}>AGREGAR AMIGOS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.boton}>
                <Icon name="users" size={20} color="green" />
                <Text style={styles.textob}>MIS AMIGOS</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.borde}></View>
        <Text style={styles.textoe}>Estadisticas</Text>
        <View style={styles.estadis}>
            <View style={styles.filaEstadis}>
                <Cajaestadistica namei="recycle" puntaje='20' des='Cantidad Total'/>
                <Cajaestadistica namei="calendar" puntaje='20' des='Cantidad Total'/>
            </View>
            <View style={styles.filaEstadis}>
                <Cajaestadistica namei="star" puntaje='20' des='Cantidad Total'/>
                <Cajaestadistica namei="trophy" puntaje='20' des='Cantidad Total'/>
            </View>  
        </View>
        <View style={styles.borde}></View>

        <View style={styles.texic}>
            <Icon name="cog" size={30} color="black" />
            <Text>Configuracion</Text>
        </View>
        <View style={styles.texic}>
            <Icon name="life-ring" size={30} color="black" />
            <Text>Soporte</Text>
        </View>
        <View style={styles.texic}>
            <Icon name="sign-out" size={30} color="red" />
            <Text>Cerrar sesion</Text>
        </View>

        
        
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        marginTop:40,
        alignItems:'center'
    },
    imagen:{
        width:'100%',
        height:200,
    },
    imagen2:{
        borderColor:'white',
        borderWidth:4,
        width:150,
        height:150,
        borderRadius:50,
        marginTop:-100,
    },
    texto:{
        color:'green',
        fontSize:30,
        
    },
    numero:{
        color:'gray',
        fontSize:15
    },
    botones:{
        marginTop:10,
        flexDirection:'row',
        gap:15
    },
    boton:{
        flexDirection:'row',
        gap:10,
        backgroundColor:'lightgreen',
        padding:10,
        borderRadius:10,
        height:50,
        alignItems:'center'
    },
    textob:{
        color:'green',
        fontSize:15
    },
    borde:{
        borderWidth:1,
        borderColor:'gray',
        width:'100%',
        marginTop:20
    },
    textoe:{
        color:'green',
        marginLeft:10,
        width:'100%',
        fontSize:20
    },
    estadis:{
        marginTop:20,
        gap:20,
        padding:10,
    },

    filaEstadis: {
        flexDirection:'row',
        gap:10,
        width:'100%',
    },
    texic:{
        flexDirection:'row',
        alignItems:'center',
        gap:10,
        width:'100%',
        padding:10,
    }

    


})

export default Perfil