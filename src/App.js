import React from 'react';
import {connect} from 'react-redux';
import {getQuote} from "./quoteSlice"
import './App.css';

class Presentational extends React.Component {
  componentDidMount() {
    this.props.getQuote();
    document.body.style.backgroundColor = this.props.currentColor;
  }

  render() {
    const { currentQuote, currentColor, getQuote } = this.props;
    return (
      <div className="container vh-100 d-flex justify-content-center align-items-center" style={{color: currentColor}}>
        <div className="card" id="quote-box" style={{color: currentColor}}>
          <p id="text">{currentQuote.text}</p>
          <p className="text-end"id="author">- {currentQuote.author}</p>
          <div>
            <a 
              id="tweet-quote" 
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${currentQuote.text}" - ${currentQuote.author}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-default target float-start"
              style={{backgroundColor: currentColor}}
            ><i className="fa-brands fa-x-twitter"></i></a>
            <button 
              className="btn btn-default target float-end" 
              id="new-quote" 
              onClick={getQuote}
              style={{backgroundColor: currentColor}}
              >New Quote</button>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  currentQuote: state.currentQuote,
  currentColor: state.currentColor
});

const mapDispatchToProps = (dispatch) => ({
  getQuote: () => dispatch(getQuote())
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

function App() {
  return (
    <Container />
  );
}

export default App;
