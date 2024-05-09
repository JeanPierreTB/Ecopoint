// Principal.tsx
import React, { useState } from "react";

import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../Types/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PuntodeReciclaje from "../Clases/PuntodeReciclaje";
import MapViewDirections from "react-native-maps-directions";
import Usuario from "../Clases/Usuario";

type PrincipalProps = {
  navigation: StackNavigationProp<RootStackParamList, "principal">;
};

export default function Principal({ navigation }: PrincipalProps) {
  

  return (
    <View style={styles.container}>
      <Text>Hola</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 40,
  },
  input: {
    borderColor: "black",
    width: 200,
    height: 30,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: "center",
  },
  imagen: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  principal1: {
    marginTop: 35,
    flexDirection: "row",
    backgroundColor: "lightgreen",
    padding: 10,
    width: "100%",
    borderRadius: 10,
    justifyContent: "space-between",
  },
  principal2: {},
  mapStyle: {
    width: 600,
    height: 650,
  },
});
