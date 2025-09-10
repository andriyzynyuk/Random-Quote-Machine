import React from 'react';
import './App.css';

class QuoteBox extends React.Component {
   render() {
    return (
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="card card-center" id="quote-box">Example Quote</div>
      </div>
    );
  }
};

function App() {
  return (
    <QuoteBox />
  );
}

export default App;
