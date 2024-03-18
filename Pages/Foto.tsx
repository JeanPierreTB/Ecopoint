import { Camera, CameraType } from 'expo-camera';
import { useEffect, useRef, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View ,Image} from 'react-native';
import * as MediaLibrary from 'expo-media-library'
import Boton from '../Componentes/Boton';
import Usuario from '../Clases/Usuario';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../Types/types";

type FotoProps = {
    navigation: StackNavigationProp<RootStackParamList, "foto">;
};
  
export default function Foto({ navigation }: FotoProps) {

  const[Camarapermiso,setCamarapermiso]=useState(false);
  const[imagen,setimagen]=useState<string|null >(null);
  const[type,setype]=useState(CameraType.back);
  const cameraRef=useRef<Camera>(null);


  useEffect(() => {
    (async () => {
        await MediaLibrary.requestPermissionsAsync();
        const cameraStatus = await Camera.requestCameraPermissionsAsync();
        setCamarapermiso(cameraStatus.status === 'granted');
    })();
}, []);

 
const tomarfoto = async () => {
    if (cameraRef) {
        try {
            const data = await cameraRef.current?.takePictureAsync();
            console.log(data);
            setimagen(data ? data.uri : null); // Usar operador ternario para verificar si data está definido
            const usuario = await AsyncStorage.getItem('usuario');
            const usuarioObjeto = usuario ? JSON.parse(usuario) : null;
            
            if (data) { // Verificar si data está definido antes de usarlo
                Usuario.actualizarfoto(usuarioObjeto.nombre, usuarioObjeto.contraseña, data.uri);
                navigation.navigate("cuenta")
            }
        } catch(e) {
            console.log(e);
        }
    }
};



  if(Camarapermiso===false){
    return <Text>No hay acceso a la camara</Text>
  }



  return (
    <View style={styles.container}>
      
      <Camera
      style={styles.camera}
      type={type}
      ref={cameraRef}
    >
    <Text>Hello</Text>
    </Camera>

      <View>
        <Boton title='Tomar una foto'icon='camera' onpress={tomarfoto}></Boton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#000',
    justifyContent:'center',
    paddingBottom:20
  },
  camera:{
    flex:1,
    borderRadius:20
  }
});
