import { View,StyleSheet,Text} from 'react-native'
import { RecorridoProps } from '../Types/types'
import MapView from 'react-native-maps';

const Recorrido: React.FC<any> = ({ navigation}:RecorridoProps) => {
    return(
        <View style={styles.container}>
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
    )
};

const styles=StyleSheet.create({
    container:{
        marginTop:30
    },
    mapStyle: {
        width: '100%',
        height: '100%',
    },
})

export default Recorrido;