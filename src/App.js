import React from 'react';
import News from './components/news.component';
import Header from './components/header.component';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <News />
      </div>
    </div>
  );
}

export default App;
