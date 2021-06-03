import React from 'react';
import{
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
    StatusBar
} from 'react-native';

const Scroll = () =>{
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.text}>
                “Todo nuestro sueño se puede hacer realidad 
                si tenemos el coraje de perseguirlos” 
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: StatusBar.currentHeight
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20
    },
    text: {
        fontSize: 42
    },
});

export default Scroll;