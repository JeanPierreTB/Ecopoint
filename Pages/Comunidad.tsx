import { View,Text ,Image,StyleSheet, ScrollView} from 'react-native'
import { ComunidadProps } from '../Types/types'
import CajaComunidad from '../Componentes/CajaComunidad'

const Comunidad: React.FC<any> = ({ navigation}:ComunidadProps) => {
return(
        <ScrollView style={styles.container}>
            <View style={styles.comunidad}>
                <Text style={styles.titulo}>Comunidad</Text>
                <Image
                 style={styles.imagen}
                 source={{ uri: 'https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg' }}
                />
            </View>
            
            <View style={styles.cajas}>
            <CajaComunidad nombre='Cesar Guitierrez' foto='https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg' com="nO SE NO SE NO SE QUE VA AQUI ES SOLO UNA PRUEBA" likes='20'/>
            <CajaComunidad nombre='Cesar Guitierrez' foto='https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg' com="nO SE NO SE NO SE QUE VA AQUI ES SOLO UNA PRUEBA" likes='20'/>
            <CajaComunidad nombre='Cesar Guitierrez' foto='https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg' com="nO SE NO SE NO SE QUE VA AQUI ES SOLO UNA PRUEBA" likes='20'/>
            <CajaComunidad nombre='Cesar Guitierrez' foto='https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg' com="nO SE NO SE NO SE QUE VA AQUI ES SOLO UNA PRUEBA" likes='20'/>
            <CajaComunidad nombre='Cesar Guitierrez' foto='https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg' com="nO SE NO SE NO SE QUE VA AQUI ES SOLO UNA PRUEBA" likes='20'/>
            <CajaComunidad nombre='Cesar Guitierrez' foto='https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg' com="nO SE NO SE NO SE QUE VA AQUI ES SOLO UNA PRUEBA" likes='20'/>
            <CajaComunidad nombre='Cesar Guitierrez' foto='https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg' com="nO SE NO SE NO SE QUE VA AQUI ES SOLO UNA PRUEBA" likes='20'/>

            </View>
            

        </ScrollView>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        marginTop:40
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
    }
})


export default Comunidad;