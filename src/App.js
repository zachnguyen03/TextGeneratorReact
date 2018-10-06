import React, { Component } from 'react';
import Header from './components/SiteHeader';
import TextSelectionForm from './components/TextSelectionForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header name = "Anh Nguyen"/>
        <TextSelectionForm />
      </div>
    );
  }
}

export default App;
