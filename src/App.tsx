import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior='automatic'>
          <Text>Furniture App</Text>
        </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
