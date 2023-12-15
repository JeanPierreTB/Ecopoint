import React from 'react'
import { View,Image,Text,StyleSheet} from 'react-native'

interface Consejos{
    url:string,
    des:string
}

export default function CajaConsejos({url,des}:Consejos) {
  return (
    <View style={styles.container}>
        <Image
            style={styles.imagen}
            source={{uri:url}} />
        <Text style={styles.texto}>{des}</Text>
    </View>
)    
}

const styles=StyleSheet.create({
    container:{
        marginTop:20,
        flex:1,
        flexDirection:'row',
        gap:20
    },
    imagen:{
        marginLeft:5,
        width:100,
        height:100,
        borderRadius:20
    },
    texto:{
        width:'70%',
        fontSize:20
    }
})

