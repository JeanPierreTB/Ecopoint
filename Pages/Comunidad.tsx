import { View,Text ,Image,StyleSheet, ScrollView, TextInput,TouchableOpacity} from 'react-native'
import { ComunidadProps } from '../Types/types'
import CajaComunidad from '../Componentes/CajaComunidad'
import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Comentario from '../Clases/Comentario'
import Icon from 'react-native-vector-icons/FontAwesome';

const Comunidad: React.FC<any> = ({ navigation}:ComunidadProps) => {

    useEffect(()=>{
        
    },[])

    const Datos=async ()=>{
        try{
            const usuario=await AsyncStorage.getItem('usuario');
            const usuarioobjeto=usuario? JSON.parse(usuario):null;
            console.log(usuarioobjeto.nombre,usuarioobjeto.contraseña);
        }catch(e){
            console.error('Ocurrio un error',e)
        }
    }
return(
    <View style={styles.container2}>
        <View style={styles.comunidad}>
                <Text style={styles.titulo}>Comunidad</Text>
                <Image
                 style={styles.imagen}
                 source={{ uri: 'https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg' }}
                />
        </View>
        <ScrollView style={styles.container}>
            
            
            <View style={styles.cajas}>
             <CajaComunidad nombre='Cesar Guitierrez' foto='https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg' com="nO SE NO SE NO SE QUE VA AQUI ES SOLO UNA PRUEBA" likes='20'/>
            <CajaComunidad nombre='Cesar Guitierrez' foto='https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg' com="nO SE NO SE NO SE QUE VA AQUI ES SOLO UNA PRUEBA" likes='20'/>
            <CajaComunidad nombre='Cesar Guitierrez' foto='https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg' com="nO SE NO SE NO SE QUE VA AQUI ES SOLO UNA PRUEBA" likes='20'/>
            <CajaComunidad nombre='Cesar Guitierrez' foto='https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg' com="nO SE NO SE NO SE QUE VA AQUI ES SOLO UNA PRUEBA" likes='20'/>
            <CajaComunidad nombre='Cesar Guitierrez' foto='https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg' com="nO SE NO SE NO SE QUE VA AQUI ES SOLO UNA PRUEBA" likes='20'/>
            <CajaComunidad nombre='Cesar Guitierrez' foto='https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg' com="nO SE NO SE NO SE QUE VA AQUI ES SOLO UNA PRUEBA" likes='20'/>
            <CajaComunidad nombre='Cesar Guitierrez' foto='https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg' com="nO SE NO SE NO SE QUE VA AQUI ES SOLO UNA PRUEBA" likes='20'/>

            <View style={styles.container3}>
                <TextInput style={styles.textoinput} multiline={true} numberOfLines={4}></TextInput>
               
                    <TouchableOpacity style={styles.boton}>
                        <Icon  name="arrow-right" size={30} color="blue" />
                    </TouchableOpacity>
                
                
            </View>
            

            </View>
        
            
            
            

        </ScrollView>
        
        
    </View>
        
    )
}

const styles=StyleSheet.create({
    container:{
        /*flex:1,
        marginTop:40*/
    },
    titulo:{
        fontSize:20,
        color:'green',
        fontWeight:'bold'
    },
    comunidad:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    imagen:{
        width: 50,
        height: 50,
        borderRadius: 20,
    },
    cajas:{
        marginTop:10,
        alignItems:'center',
        width:'100%',
        height:'100%',
        gap:10,
        
    },
    textoinput:{
        borderColor:'black',
        borderWidth:2,
        borderRadius:20,
        width:'100%',
        height:60,
        textAlign:'center',
        textAlignVertical: 'top', // Esto asegura que el texto comience desde la parte superior del TextInput
        maxHeight: 120,
        flexGrow:1,
        padding:10
     
    },
    container2:{
        flex:1,
        marginTop:40,
        justifyContent:'space-between'
    },
    container3:{
        flexDirection:'row',
        width:'90%',
        alignItems:'center',
        justifyContent:'center',
        paddingBottom:10
    },boton:{
        position:'absolute',
        end:10,
        top:15
        

    }
})


export default Comunidad;