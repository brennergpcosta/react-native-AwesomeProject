import React from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        border: 'solid #c3c3c3 1px',
        width: '12rem'
    },
    sectionHeader: {
        padding: 10,
        paddingLeft: 2,
        width: '12rem',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    sectionItem: {
        padding: 10,
        fontSize: 14,
    }
});

const UsingSectionList = () => {
    return (
        <View style={styles.container}>
            <SectionList
                sections={[
                    { title: 'D', data: ['Devin', 'Dan', 'Dominic'] },
                    { title: 'J', data: ['Jackson', 'James', 'Jillian',
'Jimmy', 'Joel', 'John', 'Julie'] }
                ]}
                renderItem={({item}) => <Text style={styles.sectionItem}>{item}</Text>}
                renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                keyExtractor={(item, index) => index}
            />
        </View>
    );
};

export default UsingSectionList;