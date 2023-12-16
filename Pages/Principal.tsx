// Principal.tsx
import React from 'react';
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import MapView from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Types/types';
type PrincipalProps = {
  navigation: StackNavigationProp<RootStackParamList, 'principal'>; 
};



export default function Principal({navigation}:PrincipalProps) {
  return (
    <View style={styles.container}>
      <View style={styles.principal1}>
        <View>
          <Text style={styles.titulo}>Bienvenido!</Text>
          <TextInput style={styles.input} placeholder='Ubicacion Actual' />
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
            latitude: -12.0464,
            longitude: -77.0300,
            latitudeDelta: 0.003,
            longitudeDelta: 0.003,
          }}
          mapType="standard"
        ></MapView>
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


