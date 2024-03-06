import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { RecorridoProps } from '../Types/types';
import PuntodeReciclaje from '../Clases/PuntodeReciclaje';

const Recorrido: React.FC<any> = ({ navigation }: RecorridoProps) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [transacciones, setTransacciones] = useState<any[] | null>([]);
  const [selectedPuntaje, setSelectedPuntaje] = useState('');

  const handlePickerChange = (itemValue: string) => {
    const selectedTransaccion = transacciones?.find((transaccion) => transaccion.lugar === itemValue);
    setSelectedOption(itemValue);
    setSelectedPuntaje(selectedTransaccion?.puntos.toString() || '');
  };

  const recuperarTransaccion = async () => {
    try {
      const puntos = await PuntodeReciclaje.obtenerpuntosarelizar();
      puntos ? setTransacciones(puntos) : null;
    } catch (e) {
      alert('Ocurrio un error');
    }
  }

  useEffect(() => {
    recuperarTransaccion();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Realizacion de transacciones</Text>

      <View style={styles.container3}>
        <View>
          <Text style={styles.des}>Lugar</Text>
          <Picker
            style={styles.pick}
            selectedValue={selectedOption}
            onValueChange={handlePickerChange}
            
          >
            <Picker.Item
                label='-'
                value="-"
                style={styles.picker}
            />
            {transacciones?.map((transaccion) => (
              <Picker.Item
                key={transaccion.id}
                label={transaccion.lugar}
                value={transaccion.lugar}
                style={styles.picker}
                
              />
            ))}
          </Picker>
        </View>

        <View>
          <Text style={styles.des}>Puntos</Text>
          <TextInput value={selectedPuntaje} style={styles.input} />
        </View>
      </View>

      <View style={styles.container2}>
        <TouchableOpacity style={styles.boton}>
          <Text style={styles.texto}>Cancelacion de reciclaje</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton}>
          <Text style={styles.texto}>Reclamar puntos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 40,
    margin: 40,
  },
  des: {
    width: 200,
    fontSize: 20,
  },
  pick: {
    width: '100%',
    backgroundColor: 'lightgreen',
  },
  input: {
    backgroundColor: 'lightgreen',
    width: '100%',
    height: 30,
    textAlign: 'center',
  },
  boton: {
    margin: 20,
    backgroundColor: 'lightgreen',
    padding: 10,
    borderRadius: 10,
    width: 120,
  },
  container2: {
    flexDirection: 'row',
    marginTop: 40,
  },
  texto: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  container3: {
    gap: 20,
    width: '70%',
  },
  picker: {
    fontSize: 15,
  }
});

export default Recorrido;
