import React from 'react';
import {View, Text} from 'react-native';

const ViewComponents = () => {
    return(
        <View
        style={{
            flexDirection: "row",
            flex: 1,
            height: 100,
            padding: 20,
            backgroundColor: 'red'
        }}
        >
            
            <Text>
                Hola Mundo!
            </Text>
        </View>
    );
}

export default ViewComponents;