import React from "react";
import { useRoute } from "@react-navigation/native";
import { FlatList,StyleSheet } from "react-native";

import Cesta from './componentes/Cesta'

export default function Produtor(){
    const route = useRoute();
    const { nome, imagens, cestas} = route.params;



   return  <FlatList

    data={cestas} 
    renderItem= {({item}) => <Cesta {...item} produtor={{nome, imagens}} />} 
    />
}
