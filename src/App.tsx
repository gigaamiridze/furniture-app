import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './navigation';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}

export default App;
