import React from 'react';
import Header from './Header';
import Display from './Display';
import Hello from './hello'; 
import FormComponent from '../../../exp1/src/FormComponent';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Display />
        <Hello />
      </main>
    </>
  );
}
