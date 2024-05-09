import React, { useState } from 'react'
import { TouchableOpacity,Text,StyleSheet,View,Image,TextInput,Alert} from 'react-native'
import facebook from '../assets/facebook.png'
import google from '../assets/google.png'
import ios from '../assets/ios.png'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Types/types';
import Usuario from '../Clases/Usuario';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';


WebBrowser.maybeCompleteAuthSession();


type RegistrateProps = {
    navigation: StackNavigationProp<RootStackParamList, 'registrarte'>;
};

export default function Registrate({ navigation }: RegistrateProps) {

  const [DNI,setDNI]=useState('');
  const [Correo,setCorreo]=useState('');
  const [Contra,setContra]=useState('');
  const [NTelefono,setNTelefono]=useState('');
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "74457487730-a5mueg90o0hkbf54m90kspn6tu1kg2c6.apps.googleusercontent.com"
  });

  React.useEffect(() => {
    handleSignInWithGoogle();
  }, [response]);

  async function handleSignInWithGoogle() {
    const user = await getLocalUser();
    console.log("info del user:" + (user?.email || 'Usuario no encontrado'));
    if (response?.type === "success") {
      const userInfoResponse = await getUserInfo(response.authentication?.accessToken);
      /*setUserInfo(userInfoResponse);
      // Enviar información del usuario al servidor
      console.log("Informacion a "+userInfoResponse.password)
      sendUserDataToServer(userInfoResponse.email, userInfoResponse.password);*/
    }
  }

  const getLocalUser = async () => {
    const data = await AsyncStorage.getItem('@user');
    if (!data) return null;
    return JSON.parse(data);
  }

  const getUserInfo = async (token:any) => {
    if (!token) return;
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me", {
        headers: { Authorization: `Bearer ${token}` }
      });

      const user = await response.json();
      console.log("Respuesta de la API de Google:", user); // Imprimir la respuesta completa
      await AsyncStorage.setItem('@user', JSON.stringify(user));
      return user;
    } catch (e) {
      console.log(e);
    }
  }


  const handleclik=()=>{
    const campos=[DNI,Correo,Contra,NTelefono];
    if(campos.some(campo=>!campo)){
        Alert.alert('Error',"Completa los campos")
    }
    
    else{
        console.log(NTelefono);
        const usuario=new Usuario(Correo,Contra,parseInt(DNI),parseInt(NTelefono));
        usuario.register(navigation);
    
        setDNI('');
        setCorreo('');
        setContra('');
        setNTelefono('');
    }
    

  }


  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Registrarse</Text>
        <View style={styles.registrate1}>
            <View>
                <Text style={styles.textoboton}>DNI</Text>
                <TextInput style={styles.boton} keyboardType="numeric" value={DNI} onChange={(e)=>setDNI(e.nativeEvent.text)}/>
            </View>
            <View>
                <Text style={styles.textoboton}>Correo Electronico</Text>
                <TextInput style={styles.boton} keyboardType="email-address" value={Correo} onChange={(e)=>setCorreo(e.nativeEvent.text)}/>
            </View>
            <View>
                <Text style={styles.textoboton}>Contraseña</Text>
                <TextInput style={styles.boton} value={Contra} onChange={(e)=>setContra(e.nativeEvent.text)}/>
            </View>
            <View>
                <Text style={styles.textoboton}>Numero de telefono</Text>
                <TextInput style={styles.boton} keyboardType="numeric" value={NTelefono} onChange={(e)=>setNTelefono(e.nativeEvent.text)}/>
            </View>
        </View>
        <TouchableOpacity style={styles.botonentrada} onPress={()=>handleclik()}>
            <Text style={styles.textoentrada}>REGISTRARSE</Text>
        </TouchableOpacity>

        <Text style={styles.textoinicio}>Inicia sesion con</Text>
        
        <View style={styles.sesion2}>
            <Image
                style={styles.apple}
                source={ios}
            />
            <TouchableOpacity
                disabled={!request}
                onPress={() => {
                  promptAsync();
                }}
            
            >
                <Image
                    style={styles.google}
                    source={google}
                />
            </TouchableOpacity>
            
            <Image
                style={styles.facebook}
                source={facebook}
            />

        </View>
        
        <Text style={styles.textoinicio}>¿Ya tienes una cuenta? <Text style={styles.negrita} onPress={()=>navigation.navigate('sesion')}>Iniciar sesion</Text></Text>
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
    },
    negrita:{
        fontWeight:"bold"
    }


})
