import React, { useEffect, useRef } from 'react';
import {Text, View} from 'react-native';


import StackManager from './StackManagement';
import { ThemeProvider } from './contexts/ThemeManager';
import { UserProvider } from './contexts/LoginManager';

//safe area provider
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';



function App(): React.JSX.Element {

  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <ThemeProvider>
          <UserProvider>
            <StackManager/>
          </UserProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}


export default App;
