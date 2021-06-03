import React,  {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';

const TextoComponents = () => {
    const [titleText, setTitleText] = useState('Hola Mundo');
    const bodyText = useState('Este es un ejemplo de anidación de textos');
    
    const onPressTitle = () => {
        setTitleText('Has presionado el texto');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.baseText}>
                <Text style={styles.titleText} onPress={onPressTitle}>
                {titleText}
                {"\n"}
                {"\n"}
                </Text>
                <Text numberOfLines={2}>{bodyText}</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    baseText: {
        textAlign: 'center'
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default TextoComponents;