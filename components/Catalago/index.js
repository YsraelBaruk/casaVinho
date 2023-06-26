import estilo from './estilo';
import {View, FlatList, ScrollView } from 'react-native';
import vinho from './dados';
import Card from './Vinho';

export default function Catalogo(props) {
  return (
    <View style={estilo.container}>      
      <ScrollView>
        <FlatList               
          data={vinho}
          renderItem={({item})=>
            <Card props={props} vinho={item}/>
          }
          keyExtractor={item => item.id}          
        />         
      </ScrollView>
    </View>
  );
}
