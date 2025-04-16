import React from 'react';
import logo from './logo.svg';
// import './App.css';
import { DetailForm } from './components/DetailForm';
import { EuiProvider } from '@elastic/eui';

function App() {
  return (
    <>
    <EuiProvider colorMode='light'>
      <DetailForm/>
    </EuiProvider>
    </>
  );
}

export default App;
