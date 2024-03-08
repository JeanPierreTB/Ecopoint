import React, { useState } from 'react'
import { TouchableOpacity,Text,StyleSheet,View,Image, Alert } from 'react-native'
import facebook from '../assets/facebook.png'
import google from '../assets/google.png'
import ios from '../assets/ios.png'
import { TextInput } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Types/types';
import Usuario from "../Clases/Usuario";

type IniciodesesionProps = {
    navigation: StackNavigationProp<RootStackParamList, 'sesion'>; 
};

const Iniciodesesion: React.FC<IniciodesesionProps> = ({ navigation }) => {
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');

  const handleclik = () => {
    const campos=[email,password];
    if(campos.some(campo=>!campo)){
        Alert.alert('Error',"Completa los campos")
    }
    else{
        const usuario=new Usuario(email,password)
        usuario.islogin(navigation)
        setemail('');
        setpassword('');
    }

    
  };
  
  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Iniciar sesion</Text>
        <View style={styles.sesion1}>
            <View>
                <Text style={styles.textoboton}>Correo Electronico</Text>
                <TextInput style={styles.boton} keyboardType="email-address" value={email} onChange={(e)=>setemail(e.nativeEvent.text)}/>
            </View>
            <View>
                <Text style={styles.textoboton}>Contraseña</Text>
                <TextInput style={styles.boton} secureTextEntry={true}  value={password} onChange={(e)=>setpassword(e.nativeEvent.text)}/>
                <Text style={styles.contra}>¿Olvido tu contraseña?<Text style={styles.negrita} onPress={()=>navigation.navigate('ocontra')}> Cambiala aqui</Text></Text> 
            </View>
        </View>
        <TouchableOpacity style={styles.botonentrada} onPress={()=>handleclik()}>
            <Text style={styles.textoentrada}>INICIAR SESION</Text>
        </TouchableOpacity>
        <Text style={styles.des}>Al iniciar sesion,aceptas las Condiciones de Servicio y la Politica de Privacidad</Text>
        
            
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
        
        <Text style={styles.textoinicio}>¿No tiene una cuenta? <Text style={styles.negrita} onPress={()=>navigation.navigate('registrarte')}>Registrate</Text></Text>
        
        
    </View>
  )
}


const styles=StyleSheet.create({
    container:{
        marginTop:-70,
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    titulo:{
        fontWeight:'bold',
        fontSize:40,
        margin:40
    },
    sesion1:{
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
    contra:{
        textAlign:'right',
        margin:5,
        fontSize:12
    },
    negrita:{
        fontWeight:'bold'
    },
    botonentrada:{
        margin:20,
        backgroundColor:'lightgreen',
        padding:10,
        borderRadius:10,
        width:300
    },
    textoentrada:{
        textAlign:'center',
        fontSize:20
    },
    des:{
        marginTop:50,
        width:250,
        textAlign:'center',
        fontSize:12
    },
    textoinicio:{
        color:'gray',
        fontSize:15,
        marginTop:15
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
        marginTop:5,
        flexDirection:'row',
        gap:20
    }
    
   
});

export default Iniciodesesion;
