import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    head:{
        paddingVertical: 19,
        paddingStart:8,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
    },
    head_title:{
        fontSize: 18,
        fontWeight: '500',
        color: '#444',
        marginHorizontal: 7
    },
    body:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    slides:{
       flexDirection: 'row',
       width: 400,
       height: 420
    },
    foto:{
        marginTop: 50,
        width: 400,
        height: 300,
    },
    info:{
        width: 350,
        textAlign: 'left',
        marginBottom: 35,        
    },
    nome: {
        fontSize: 40,
        textAlign: 'center',
    },
    valor: {
        color: 'black',
        fontSize: 20,
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    desc: {
        color: 'black',
        fontSize: 20,
        marginTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
    },
});

export default styles;