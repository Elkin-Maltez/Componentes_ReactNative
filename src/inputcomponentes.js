import React, {useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    TextInput
} from 'react-native';

const Entradas = () => {
    const [text, onChangeText] = useState(null);
    const [number, onChangeNumber] = useState(null);

    return(
        <SafeAreaView>
            <TextInput
                autoCapitalize= 'words'
                style={styles.input}
                placeholder= 'Ingrese un texto'
                onChangeText= {text => onChangeText(text)}
                value={text}
            />
            <TextInput
                autoFocus= {true}
                style= {styles.input}
                onChangeText= {number => onChangeNumber(number)}
                value={number}
                placeholder='Ingrese un número'
                keyboardType= 'numeric'
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height:40,
        margin: 12,
        borderWidth: 1
}
});

export default Entradas;