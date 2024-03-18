import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import { CameraType } from 'expo-camera';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../Types/types";

type CuentaProps = {
  navigation: StackNavigationProp<RootStackParamList, "cuenta">;
};

function Cuenta({ navigation }: CuentaProps) {

  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  function toggleCameraType() {
    setType(type === CameraType.back ? CameraType.front : CameraType.back);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Mi cuenta</Text>
      <View style={styles.cuenta}>
        <View style={styles.inputContainer}>
          <Text style={styles.texto}>Usuario</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.texto}>Telefono</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.texto}>DNI</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.texto}>Contraseña</Text>
          <TextInput style={styles.input} />
        </View>

        <TouchableOpacity style={styles.boton}>
          <Text style={styles.textob}>Confirmar</Text>
        </TouchableOpacity>

        
          
        <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate("foto")}>
          <Text style={styles.textob}>Actualizar foto</Text>
        </TouchableOpacity>
        
        

        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
  },
  titulo: {
    marginLeft:10,
    color: 'green',
    fontWeight: 'bold',
    fontSize: 20,
  },
  cuenta: {
    marginTop:50,
    alignItems: 'center',
    gap:40,
    height:'100%',
  },
  inputContainer: {
    width:'80%'
  },
  texto: {
    color: 'gray',
    fontSize: 16,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 2,
    width: '100%',
    height: 60,
    borderRadius: 20,
    textAlign:'center'
  },
  boton:{
    backgroundColor:'lightgreen',
    width:'80%',
    padding:10,
    borderRadius:20,
    height:60
  },
  textob:{
    textAlign:'center',
    marginTop:10,
    color:'green'
  }
});

export default Cuenta;

