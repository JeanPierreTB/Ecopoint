import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

function Cuenta() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Mi cuenta</Text>
      <View style={styles.cuenta}>
        <View style={styles.inputContainer}>
          <Text style={styles.texto}>Nombre</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.texto}>Email</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.texto}>Telefono</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.texto}>Contraseña</Text>
          <TextInput style={styles.input} />
        </View>

        <TouchableOpacity style={styles.boton}>
          <Text style={styles.textob}>Confirmar</Text>
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
    marginTop:80,
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
  },
  boton:{
    backgroundColor:'lightgreen',
    width:'80%',
    padding:10,
    borderRadius:20,
    height:60
  },textob:{
    textAlign:'center',
    marginTop:10,
    color:'green'
    
  }
});

export default Cuenta;
