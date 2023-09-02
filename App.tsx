import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior='automatic'>
        <Text>Furniture App</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
