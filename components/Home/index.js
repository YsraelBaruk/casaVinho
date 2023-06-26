import React from "react";
import { ImageBackground, View, Text } from "react-native-web";

import imgCapa from '../../assets/vinhos/capa.jpg';
import estilos from "./estilo";

export default function TelaInicial () {
    return (
        <ImageBackground
            blurRadius={10}
            style={estilos.container}
            source={imgCapa}
        >
            <Text style={estilos.titulo}>Adega Preferida</Text>
            <Text style={estilos.subtitulo}>Aqui você encontra os melhores e mais saborosos vinhos.</Text>
        </ImageBackground>
    )
}