import { Camera, CameraType } from 'expo-camera';
import { useEffect, useRef, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View ,Image} from 'react-native';
import * as MediaLibrary from 'expo-media-library'
import Boton from '../Componentes/Boton';
import Usuario from '../Clases/Usuario';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../Types/types";
import PuntodeReciclaje from '../Clases/PuntodeReciclaje';


type FotoProps = {
    navigation: StackNavigationProp<RootStackParamList, "foto">;
};
  
export default function Foto({ navigation }: FotoProps) {

  const[Camarapermiso,setCamarapermiso]=useState(false);
  const[imagen,setimagen]=useState<string|null >(null);
  const[type,setype]=useState(CameraType.back);
  const cameraRef=useRef<Camera>(null);
  const [escaneoRealizado, setEscaneoRealizado] = useState(false); // Nuevo estado para controlar si se ha realizado un escaneo



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
                Usuario.actualizarfoto(usuarioObjeto, data.uri);
                alert('Foto actualizada');
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

  const handleBarCodeScanned = async ({ type, data }: { type: string; data: string }) => {
    if (!escaneoRealizado) { // Verificar si ya se ha realizado un escaneo
      alert(`Código ${type} escaneado: ${data}`);
      setEscaneoRealizado(true);
      const parsedData=JSON.parse(data);
      const lugarseleccionado = await AsyncStorage.getItem('puntoqr');
      const lugarseleccionadodata = lugarseleccionado? JSON.parse(lugarseleccionado):null;
      const usuario = await AsyncStorage.getItem('usuario');
      const usuarioObjeto = usuario? JSON.parse(usuario):null;
      const punto=new PuntodeReciclaje(undefined,parsedData.latitud,parsedData.longitud,parsedData.lugar,parsedData.puntos);
      const res=await punto.puntorealizadoqr(lugarseleccionadodata,usuarioObjeto);
      alert(res.mensaje);

      navigation.navigate("principal")

    }
  };


  return (
    <View style={styles.container}>
      
      <Camera
      style={styles.camera}
      type={type}
      ref={cameraRef}
      onBarCodeScanned={handleBarCodeScanned}
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
