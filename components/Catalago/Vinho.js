import { ScrollView, StyleSheet, ImageBackground, Text} from 'react-native';
import styles from './estilo';


export default function Card({props, vinho}) {
  const irParaDetalhes = () => { props.navigation.navigate("Detalhes",vinho); };
  let img = vinho.fotos[0];
  return (
    <ScrollView>
        <Text style={estilo.top}> {vinho.titulo} </Text>
        <Text style={estilo.bottom}> {vinho.texto} </Text>
      <ImageBackground 
        style={estilo.container}
        source={require(`../../assets/vinhos/${img}`)}
        resizeMode='repeat'
        imageStyle={{borderRadius: 10}}
        onTouchEnd={irParaDetalhes}
      >
        <Text style={estilo.titulo}>{vinho.nome}</Text>
        <Text style={estilo.valor}>{`R$ ${vinho.preco}`}</Text>
      </ImageBackground>
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  container: {
    width: 380,
    height: 285,
    justifyContent: 'space-between',
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  titulo:{
    padding: 5,
    textAlign: 'center',
    backgroundColor: '#0000009e',
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
    borderTopLeftRadius: 10 ,
    borderTopRightRadius: 10 
  },
  top: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 15,
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
