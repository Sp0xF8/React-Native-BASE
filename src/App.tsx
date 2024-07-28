import React from 'react';
import {Text, View} from 'react-native';


import StackManager from './StackManagement';
import { ThemeProvider } from './contexts/ThemeManager';
import { UserProvider } from './contexts/LoginManager';

//safe area provider
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <UserProvider>
          <StackManager/>
        </UserProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}


export default App;
