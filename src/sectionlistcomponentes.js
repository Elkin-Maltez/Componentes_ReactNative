import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    SectionList,
    StatusBar
} from 'react-native';

const DATA = [
    {
        title: 'Frutas',
        data: ['Manzana', 'Banano', 'Fresa']
    },
    { 
        title: 'Comida',
        data: ['Papas fritas', 'Pollo asado', 'Nachos']
    },
    {
        title: 'Bebidas',
        data: ['Agua', 'Café', 'Gaseosa']
    },
];

const Item = ({title}) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const Listas = () => (
    <SafeAreaView style={styles.container}>
        <SectionList
            section={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem= {({item}) => <Item title={item}/>}
            renderSectionHeader={({section: {title}}) => (
                <Text style={styles.header}>{title}</Text>
            )}
        />
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal:16
    },
    item:{
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8
    },
    header:{
        fontSize: 32,
        backgroundColor: '#fff'
    },
    title:{
        fontSize:24
    }
});

export default Listas;