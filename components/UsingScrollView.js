import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

const UsingScrollView = () => {
    const logo = {
        uri: 'https://reactnative.dev/img/tiny_logo.png',
        width: 64,
        height: 64
    }

    const fontSize = 96;

    return (
        <ScrollView style={{marginTop: '2rem'}}>
            <Text style={{fontSize: fontSize}}>Scroll me plz</Text>
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Text style={{fontSize: fontSize}}>If you like</Text>
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Text style={{fontSize: fontSize}}>Scrolling down</Text>
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Text style={{fontSize: fontSize}}>What's the best</Text>
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Text style={{fontSize: fontSize}}>Framework around?</Text>
        </ScrollView>
    )
}

export default UsingScrollView;