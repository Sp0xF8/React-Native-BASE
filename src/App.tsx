import React from 'react';
import {Text, View} from 'react-native';


import StackManager from './StackManagement';
import { ThemeProvider } from './contexts/ThemeManager';
import { UserProvider } from './contexts/LoginManager';


function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <UserProvider>
        <StackManager/>
      </UserProvider>
    </ThemeProvider>
  );
}


export default App;
