import React from 'react';
import {Text, View} from 'react-native';


import StackManager from './StackManagement';
import { ThemeProvider } from './contexts/ThemeManager';


function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <StackManager/>
    </ThemeProvider>
  );
}


export default App;
