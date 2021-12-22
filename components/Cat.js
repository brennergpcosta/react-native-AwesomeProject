import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';


const Cat = (props) => {
    const [isHungry, setIsHungry] = useState(true);
    const [title, setTitle] = useState('POUR ME SOME MILK, PLEASE!')

    const changeHunger = () => {
        setTitle(() => 'Thank you!');
        setIsHungry((prev) => !prev);
        setTimeout(() => {
            setTitle('Pour me some Milk, PLEASE!');
            setIsHungry((prev) => !prev);
        }, 2000);
    }

    return (
        <View>
            <Text style={{textAlign: 'center', fontSize: '20px'}}>
                I'm {props.name}, and I'm {isHungry ? 'Hungry' : 'Not Hungry'}
            </Text>
            <Button onPress={changeHunger} disabled={!isHungry} title={title}/>
        </View>
    )
}

export default Cat;