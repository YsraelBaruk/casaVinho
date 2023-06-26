import { StyleSheet, ScrollView, Text, View } from "react-native";

const BoxContato = ({titulo, icon, texto, descricao})=>{
    return(
        <ScrollView style={estilo.device}>
            <Text style={estilo.textoTitulo}>{titulo}</Text>
            <View style={estilo.card}>
                <Text>{icon}</Text>
                <Text style={estilo.texto}>{texto}</Text>
                <Text style={estilo.texto2}>{descricao}</Text>
            </View>
        </ScrollView>
    );
}

const estilo = StyleSheet.create({
    device: {
        marginBottom: 40,
    },
    textoTitulo: {
        fontWeight: 'bold',
        fontSize: 25,
        margin: 15,
    },
    card: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 20,
        padding: 15,
        alignItems: 'center',
    },
    texto: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    texto2: {
        fontSize: 15,
    },
});

export default BoxContato;