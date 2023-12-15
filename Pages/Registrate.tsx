import React from 'react'
import { TouchableOpacity,Text,StyleSheet,View,Image,TextInput} from 'react-native'
import facebook from '../assets/facebook.png'
import google from '../assets/google.png'
import ios from '../assets/ios.png'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Types/types';

type RegistrateProps = {
    navigation: StackNavigationProp<RootStackParamList, 'registrarte'>;
};

export default function Registrate({ navigation }: RegistrateProps) {
  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Registrarse</Text>
        <View style={styles.registrate1}>
            <View>
                <Text style={styles.textoboton}>DNI</Text>
                <TextInput style={styles.boton} keyboardType="numeric"/>
            </View>
            <View>
                <Text style={styles.textoboton}>Correo Electronico</Text>
                <TextInput style={styles.boton} keyboardType="email-address"/>
            </View>
            <View>
                <Text style={styles.textoboton}>Contraseña</Text>
                <TextInput style={styles.boton}/>
            </View>
            <View>
                <Text style={styles.textoboton}>Numero de telefono</Text>
                <TextInput style={styles.boton} keyboardType="numeric"/>
            </View>
        </View>
        <TouchableOpacity style={styles.botonentrada}>
            <Text style={styles.textoentrada}>REGISTRARSE</Text>
        </TouchableOpacity>

        <Text style={styles.textoinicio}>Inicia sesion con</Text>
        
        <View style={styles.sesion2}>
            <Image
                style={styles.apple}
                source={ios}
            />
            <Image
                style={styles.google}
                source={google}
            />
            <Image
                style={styles.facebook}
                source={facebook}
            />

        </View>
        
        <Text style={styles.textoinicio}>¿Ya tienes una cuenta? <Text onPress={()=>navigation.navigate('sesion')}>Iniciar sesion</Text></Text>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginTop:-100
    },
    titulo:{
        fontWeight:'bold',
        fontSize:40,
        margin:40,
    },
    registrate1:{
        gap:10
    },
    boton:{
        borderColor:'black',
        width:300,
        height:50,
        borderWidth:1,
        borderRadius:10,
        textAlign:'center'
    },
    textoboton:{
        width:200,
        fontSize:20
    },
    botonentrada:{
        margin:30,
        backgroundColor:'lightgreen',
        padding:10,
        borderRadius:10,
        width:300
    },
    textoentrada:{
        textAlign:'center',
        fontSize:20
    },
    textoinicio:{
        color:'gray',
        fontSize:15,
        margin:5
    },
    apple:{
        
        padding:10,
        width:50,
        height:50
    },
    google:{
       
        padding:10,
        width:50,
        height:50
    },
    facebook:{
     
        padding:10,
        width:50,
        height:50
    },
    sesion2:{
        margin:5,
        flexDirection:'row',
        gap:20
    }


})
