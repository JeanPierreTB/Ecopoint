import React from 'react'
import { View,Text,Image, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


interface Comunidad{
    nombre:string,
    foto:string,
    com:string,
    likes:string,
}

function CajaComunidad({nombre,foto,com,likes}:Comunidad) {
  return (
    <View style={styles.container}>
        <Text>{nombre}</Text>
        <View style={styles.caja}>
            <Image
            style={styles.imagen}
            source={{ uri: foto }}
            />
            <Text style={styles.texto}>{com}</Text>
        </View>
        <View style={styles.likes}>
            <View style={styles.dislikes}>
                <Icon name="thumbs-up" size={20} color="black"/>
                <Text>{likes}</Text>
                <Icon name="thumbs-down" size={20} color="red" />
            </View>
            <Icon name="comment" size={20} color="green" />
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        width:'90%',
        height:120,
        borderWidth:1,
        borderRadius:20,
        padding:10,
        
    },
    caja:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    imagen:{
        width:50,
        height:50,
        borderRadius:20,
        
    },
    texto:{
        width:280,
        height:60,
        textAlignVertical:'center'
        
    },
    likes:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    dislikes:{
        flexDirection:'row',
        gap:10,

    }
})

export default CajaComunidad