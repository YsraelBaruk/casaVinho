import { FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons';
import {View, ScrollView, FlatList} from 'react-native';
import BoxContato from './Box';
import estilo from './estilo';

export default function Contato() {
  const conex = [
    {
      id: "1",
      titulo: "Entre em contato conosco para comprar nossos produtos",
    },
    {
      id: "2",
      icon: <FontAwesome name="phone" size={50} color="#400303" />,
      texto: "Telefone:",
      descricao: "+55 21 000000000",
    },
    {
      id: "3",
      icon: <Entypo name="location-pin" size={50} color="#400303" />,
      texto: "Endereço:",
      descricao: "Av. 123, 222 - Rio de Janeiro RJ ",
    },
    {
      id: "4",
      icon: <MaterialIcons name="email" size={50} color="#400303" />,
      texto: "Email:",
      descricao: "preferida@adega.com.br",
    },
    {
      id: "5",
      icon: <FontAwesome name="instagram" size={50} color="#400303" />,
      texto: "Instagram:",
      descricao: "@adegapreferida",
    }
  ];
 
  return (
    <ScrollView>
        <View style={estilo.container}>
          <FlatList
            data={conex}
            renderItem={({item})=>
              <BoxContato
                  titulo={item.titulo}
                  icon={item.icon}
                  texto={item.texto}
                  descricao={item.descricao}
              />
            }
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
  );
}