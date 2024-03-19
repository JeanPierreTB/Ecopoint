import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,ScrollView } from 'react-native';

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../Types/types";
import Usuario from '../Clases/Usuario';
import AsyncStorage from '@react-native-async-storage/async-storage'


type CuentaProps = {
  navigation: StackNavigationProp<RootStackParamList, "cuenta">;
};

function Cuenta({ navigation }: CuentaProps) {
  const[Nombre,setNombre]=useState('');
  const[Telefono,setTelefono]=useState('');
  const[DNI,setDNI]=useState('');
  const[Contrasena,setContrasena]=useState('');
 
  const handleclik=async ()=>{
    console.log('Hola');
    const campos=[Nombre,Telefono,DNI,Contrasena];
    if(campos.some(campo=>!campo)){
      Alert.alert('Error','Completa todos los campos');
    }
    else{
      const usuarioid = await AsyncStorage.getItem('usuario');
      const usuarioObjeto = usuarioid? JSON.parse(usuarioid):null;
      const usuario=new Usuario(Nombre,Contrasena,parseInt(DNI),parseInt(Telefono));
      const respuesta=await usuario.actualizadatos(usuarioObjeto);
      if(respuesta.res){
        Alert.alert('Exito','Campos actualizados');
        navigation.navigate("perfil");
        
      }else{
        Alert.alert('Error','Error,intentelo mas tarde')
      }


    }
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
      style={{ flex: 1, marginTop: 10 }}
    >
    <View style={styles.container}>
      <Text style={styles.titulo}>Mi cuenta</Text>
      <View style={styles.cuenta}>
        <View style={styles.inputContainer}>
          <Text style={styles.texto}>Usuario</Text>
          <TextInput style={styles.input} value={Nombre} onChange={(e)=>setNombre(e.nativeEvent.text)}/>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.texto}>Telefono</Text>
          <TextInput style={styles.input} value={Telefono} onChange={(e)=>setTelefono(e.nativeEvent.text)}/>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.texto}>DNI</Text>
          <TextInput style={styles.input} value={DNI} onChange={(e)=>setDNI(e.nativeEvent.text)}/>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.texto}>Contraseña</Text>
          <TextInput style={styles.input} value={Contrasena} onChange={(e)=>setContrasena(e.nativeEvent.text)} />
        </View>

        <TouchableOpacity style={styles.boton} onPress={()=>handleclik()}>
          <Text style={styles.textob}>Confirmar</Text>
        </TouchableOpacity>

        
          
        <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate("foto")}>
          <Text style={styles.textob}>Actualizar foto</Text>
        </TouchableOpacity>
        
        

        
      </View>
    </View>
    </ScrollView>
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

