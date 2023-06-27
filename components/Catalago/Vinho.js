import { ScrollView, StyleSheet, ImageBackground, Text} from 'react-native';
import styles from './estilo';

//cover, contain, center, stretch, repeat

export default function Card({props, vinho}) {
  const irParaDetalhes = () => { props.navigation.navigate("Detalhes",vinho); };
  let img = vinho.fotos[0];
  return (
    <ScrollView>
        <Text style={estilo.top}>{vinho.titulo}</Text>
        <Text style={estilo.bottom}>{vinho.texto}</Text>

      <ImageBackground 
        style={estilo.container}
        source={require(`../../assets/vinhos/${img}`)}
        resizeMode='contain'
        imageStyle={{borderRadius: 10}}
        onClick={irParaDetalhes}
      >
        <Text style={estilo.titulo}>{vinho.nome}</Text>
        <Text style={estilo.valor}>{`R$ ${vinho.preco}`}</Text>
      </ImageBackground>
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  container: {
    width: 300,
    height: 200,
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  titulo:{
    padding: 5,
    textAlign: 'center',
    backgroundColor: '#0000009e',
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  top: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 15,
  },
  bottom: {
    fontSize: 15,
    fontWeight: 'bold',
    margin: 5,
    alignItems: 'center',
  },
  valor:{
    padding: 5,
    backgroundColor: '#0000009e',
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
    borderBottomLeftRadius: 10 ,
    borderBottomRightRadius: 10 
  }
});
