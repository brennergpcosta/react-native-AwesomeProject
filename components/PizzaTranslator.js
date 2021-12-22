import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native';

const PizzaTranslator = () => {
    const [text, setText] = useState('');

    return (
        <View style={{marginTop: '2rem', border: 'solid gray 1px'}}>
            {/* Executing the setText function directly in the render method inside the onChangeText will
            cause the onChangeText event to trigger every time a render happen,in other words, an infinite loop */}
            {/* <TextInput placeholder='Write in here to get pizzas!' onChangeText={setText(() => text)} /> */}
        
            <TextInput placeholder='Write in here to get pizzas!' onChangeText={text => setText(text)} />
            <Text>{text.split(' ').map(word => word && '🍕').join(' ')}</Text>
        </View>
    )
}

export default PizzaTranslator;

