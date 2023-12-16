import React from 'react'
import { View,Text, TextInput, TouchableOpacity,StyleSheet } from 'react-native'

function Cuenta() {
  return (
    <View style={styles.container}>
        <Text>Nombre</Text>
        <TextInput></TextInput>
        <Text>Email</Text>
        <TextInput></TextInput>
        <Text>Telefono</Text>
        <TextInput></TextInput>
        <Text>Contraseña</Text>
        <TextInput></TextInput>
        <TouchableOpacity>
            <Text>Confirmar</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1
    }
    
})

export default Cuenta