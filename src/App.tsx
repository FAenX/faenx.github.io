import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Layout, Resume } from './components';
import { styleProps } from "./components/resume";

const style = {
  backgroundColor: "red",
}

function App() {
  return (
    <Layout>
      <Resume />     
    </Layout>
  );
}

export default App;
