import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TextInput } from 'react-native';

import Cat from './components/Cat';
import PizzaTranslator from './components/PizzaTranslator';
import UsingListView from './components/UsingListView';
import UsingScrollView from './components/UsingScrollView';
import UsingSectionList from './components/UsingSectionList';

export default function App() {
  return (
    <ScrollView style={{padding: '20px'}}>
      <Cat message={'Hello World'} name={'sei'} />
      <PizzaTranslator></PizzaTranslator>
      <UsingListView></UsingListView>
      <UsingSectionList></UsingSectionList>
      <UsingScrollView></UsingScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
