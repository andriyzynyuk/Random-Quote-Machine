import React from 'react';
import './App.css';

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [
                { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
                { text: "So many books, so little time.", author: "Frank Zappa" },
                { text: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" },
                { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
                { text: "Happiness depends upon ourselves.", author: "Aristotle" },
                { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
                { text: "Act as if what you do makes a difference. It does.", author: "William James" },
                { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
                { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
                { text: "Everything you can imagine is real.", author: "Pablo Picasso" }
              ],
      currentQuote: {text: "", author: ""}
    }

    this.getQuote = this.getQuote.bind(this);
  }

  componentDidMount() {
    this.getQuote();
  }

  getQuote() {
    const randomIndex = Math.floor(Math.random() * this.state.quotes.length);
    this.setState({
      currentQuote: this.state.quotes[randomIndex]
    });
  }

  render() {
    return (
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="card" id="quote-box">
          <p id="text">{this.state.currentQuote.text}</p>
          <p className="text-end"id="author">-{this.state.currentQuote.author}</p>
          <div>
            <a 
              id="tweet-quote" 
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${this.state.currentQuote.text}" - ${this.state.currentQuote.author}`)}`}
              target="_blank"
              rel="noopener noreferrer"
            ><i class="fa-brands fa-x-twitter btn btn-default target"></i></a>
            <button className="btn btn-default target float-end" id="new-quote" onClick={this.getQuote}>New Quote</button>
          </div>
        </div>
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
