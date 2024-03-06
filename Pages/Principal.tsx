// Principal.tsx
import React, { useState } from 'react';
import * as Location from "expo-location";
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import MapView,{Marker,Polyline} from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Types/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PuntodeReciclaje from '../Clases/PuntodeReciclaje';
import MapViewDirections from 'react-native-maps-directions';





type PrincipalProps = {
  navigation: StackNavigationProp<RootStackParamList, 'principal'>; 
};



export default function Principal({navigation}:PrincipalProps) {

  const[origin,setorigin]=useState({
    latitude:-12.0464,
    longitude:-77.0300
  });

  const [puntosrec, setpuntosrec] = useState<any[]>([]);
  const [puntosar,setpuntosar]=useState<any[]>([]);


  React.useEffect(()=>{
    const fetchData = async () => {
      try {
        const allpoints = await PuntodeReciclaje.visualizarpuntos();
        setpuntosrec(allpoints);
      } catch (error) {
        console.log("Ocurrió un error ", error);
      }
    };
    getlocationpermission();
    fetchData();
    getpoints();

    
    
    
  },[]);


  


  async function getpoints() {
    try{
      const puntosrealizar=await PuntodeReciclaje.obtenerpuntosarelizar();
      console.log("No soy de la clase",puntosrealizar[0].latitud);
      setpuntosar(puntosrealizar);
    }catch(e){
      console.log('Ocurrio un error ',e)
    }
    


  }
  
  async function getlocationpermission(){
    let {status}=await Location.requestForegroundPermissionsAsync();
    if(status!=='granted'){
      alert('Permiso denegado');
      return;
    } 
    let location=await Location.getCurrentPositionAsync({});
    const current={
      latitude:location.coords.latitude,
      longitude:location.coords.longitude
    }

    setorigin(current);
  }


  const handlepunto = async (punto: PuntodeReciclaje) => {
    try {
      await AsyncStorage.setItem('punto', JSON.stringify(punto));
      navigation.navigate('Preciclaje');
    } catch (error) {
      console.error('Error al almacenar el punto:', error);
    }
  };
  


  return (
    <View style={styles.container}>
      <View style={styles.principal1}>
        <View>
          <Text style={styles.titulo}>Bienvenido!</Text>
          <TextInput style={styles.input} placeholder="Ubicacion Actual"  />
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('perfil')}>
          <Image
          style={styles.imagen}
          source={{ uri: 'https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg' }}
          
          />
        </TouchableOpacity>
        
      </View>
      <View style={styles.principal2}>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: origin.latitude,
            longitude: origin.longitude,
            latitudeDelta: 0.003,
            longitudeDelta: 0.003,
          }}
          mapType="standard">

            <Marker
              coordinate={origin}/>

              
            {puntosrec.map(punto=>(
              <Marker 
                key={punto.id}
                coordinate={{latitude:punto.latitud,longitude:punto.longitud}}
                title={punto.lugar}
                onPress={() => handlepunto(punto)}>
    
              <Image
                source={{uri: 'https://cdn-icons-png.flaticon.com/512/9830/9830813.png'}}
                style={{width:30,height:30}}/>
              </Marker>

            ))}

      {puntosar.map(punto => (
          <MapViewDirections
            key={punto.id}
            origin={origin}
            destination={{ latitude: punto.latitud, longitude: punto.longitud }}
            apikey="AIzaSyAw5ap8PEu1JO6Ia1k1frTPktbdTDGuuhk"
            strokeWidth={5}
            strokeColor="green"
          />
        ))}
        </MapView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 40,
  },
  input: {
    borderColor: 'black',
    width: 200,
    height: 30,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
  },
  imagen: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  principal1: {
    marginTop: 35,
    flexDirection: 'row',
    backgroundColor: 'lightgreen',
    padding: 10,
    width: '100%',
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  principal2: {},
  mapStyle: {
    width: 600,
    height: 650,
  },
});





