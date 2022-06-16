

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Card from './components/Card'

const App = () => (
  <SafeAreaView style={styles.container}>
    <Card title='Eddard Stark' text='Winter is Coming'></Card>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default App;
