//Contains the reducer logic for quotes.
const GETQUOTE = "GETQUOTE"

const initialState = {
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
  colors: ["pink", "#FF6347", "#FFDEAD", "#3CB371", "#48D1CC", "#9370DB", "#778899"],
  currentQuote: { text: "", author: "" },
  currentColor: ""
};

export const getQuote = () => {
    type: GETQUOTE
};

const quoteReducer = (state = initialState, action) => {
    switch(action.type) {
        case GETQUOTE:
            const randomIndex = Math.floor(Math.random() * state.quotes.length);
            const randomColorIndex = Math.floor(Math.random() * state.colors.length);
            return {
                currentQuote: state.quotes[randomIndex],
                currentColor: state.colors[randomColorIndex]
            }
        default:
            return state;
    }
};

export default quoteReducer;