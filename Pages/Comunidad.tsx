import { View,Text ,Image,StyleSheet, ScrollView, TextInput,TouchableOpacity} from 'react-native'
import { ComunidadProps } from '../Types/types'
import CajaComunidad from '../Componentes/CajaComunidad'
import { useEffect,useState,useRef } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Comentario from '../Clases/Comentario'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Picker } from '@react-native-picker/picker';


const opciones=[
    {
     numero:'0',
     des:'-'
    },
    {
     numero:'1',
     des:'soporte'
    },{
     numero: '2',
     des:'comentario'
    },{
     numero:'3',
     des:'sugerencia'
    }
    /*'0',//-
    '1',//soporte
    '2',//comentario
    '3'//sugerencia*/
]

const Comunidad: React.FC<any> = ({ navigation}:ComunidadProps) => {


    const [selectedOption, setSelectedOption] = useState('0');
    const [texto,settexto]=useState('');
    const [comentarios,setcometarios]=useState<any[]>([]);
    const textInputRef = useRef<TextInput>(null);


    useEffect(()=>{
        mostrarcomentario();
    },[])

    const mostrarcomentario=async()=>{
        try{
            const allcoment=await Comentario.recuperarcomentarios();
            setcometarios(allcoment)
        }catch(e){
            console.log('Ocurrio un error',e)
        }
    }
    const handlePickerChange = (itemValue: string) => {
        console.log("Numero"+itemValue);
        setSelectedOption(itemValue);    
      };

      const handleclik = async () => {
        try {
          if (selectedOption === '0') {
            return alert("Selecciona un tipo de comentario");
          }
          const usuario = await AsyncStorage.getItem('usuario');
          const usuariobjeto = usuario ? JSON.parse(usuario) : null;
          console.log(texto);
          const coment = new Comentario(texto, parseInt(selectedOption));
          await coment.agregarcomentario(usuariobjeto.nombre, usuariobjeto.contraseña); // Espera a que se complete la operación de agregar comentario
          await mostrarcomentario(); // Espera a que se muestren los comentarios actualizados
          textInputRef.current?.clear();
          alert('Comentario agregado');
        } catch (e) {
          console.error("Error al recuperar el usuario");
        }
      }
      

    
        
    
      
    

    
return(
    <View style={styles.container2}>
        <View style={styles.comunidad}>
                <Text style={styles.titulo}>Comunidad</Text>
                <Image
                 style={styles.imagen}
                 source={{ uri: 'https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg' }}
                />
        </View>
        <ScrollView style={styles.container}>
            
            
            <View style={styles.cajas}>
            {comentarios && comentarios.length > 0 ? (
                comentarios.map(comentario => (
                <CajaComunidad key={comentario.id} nombre={comentario.Usuario.nombre} foto='hola' com={comentario.des} tipo={comentario.tipo}/>
            ))
            ) : (
                <Text style={styles.texto}>No hay comentarios hoy</Text>
            )}


            
            
            <View style={styles.container3}>
                <TextInput style={styles.textoinput}
                           ref={textInputRef} 
                           multiline={true} 
                           numberOfLines={4} 
                           onChangeText={(e)=>settexto(e)}
                           >

                </TextInput>
                    
                <View style={styles.pickContainer}>
                <Picker
                    style={styles.pick}
                    selectedValue={selectedOption}
                    onValueChange={handlePickerChange}>
                    {opciones.map((opcion, index) => (
                        <Picker.Item
                        key={index}
                        label={`${opcion.numero}:${opcion.des}`}
                        value={opcion.numero}
                        style={styles.picker}
                        />
                    ))}
                </Picker>

  
                </View>
                    <TouchableOpacity style={styles.boton} >
                        <Icon  name="arrow-right" size={30} color="green" onPress={()=>handleclik()}/>
                    </TouchableOpacity>
                    
                    
                
                
            </View>
            

            </View>
        
            
            
            

        </ScrollView>
        
        
    </View>
        
    )
}

const styles=StyleSheet.create({
    container:{
        /*flex:1,
        marginTop:40*/
    },
    titulo:{
        fontSize:20,
        color:'green',
        fontWeight:'bold'
    },
    comunidad:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    imagen:{
        width: 50,
        height: 50,
        borderRadius: 20,
    },
    cajas:{
        marginTop:10,
        alignItems:'center',
        width:'100%',
        height:'100%',
        gap:10,
        
    },
    textoinput:{
        borderColor:'black',
        borderWidth:2,
        borderRadius:20,
        width:'50%',
        height:60,
        textAlign:'center',
        textAlignVertical: 'top', // Esto asegura que el texto comience desde la parte superior del TextInput
        maxHeight: 120,
        flexGrow:1,
        padding:10
     
    },
    container2:{
        flex:1,
        marginTop:40,
        justifyContent:'space-between'
    },
    container3:{
        flexDirection:'row',
        width:'90%',
        alignItems:'center',
        justifyContent:'center',
        paddingBottom:10
    },boton:{
        position:'absolute',
        end:10,
        top:15,
        

    },
    picker: {
      fontSize: 12,
      color:'black'
    },
    
    pickContainer: {
        position:'absolute',
        top:4,
        end:40,
        width: '27%',
        height:'80%',
        backgroundColor: 'green',
        borderRadius: 20,
        overflow: 'hidden', // Esto asegura que el borde redondeado se aplique correctamente
      },
      pick: {
        width: '100%',
      },
      texto:{
        fontWeight:'bold',
        fontSize:20
      }
})


export default Comunidad;