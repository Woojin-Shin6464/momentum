const quotes = [
  { quote: "Life is either a daring adventure or nothing at all.", author: "-Helen Keller" },
  { quote: "Success is going from failure to failure without a loss of enthusiasm.", author: "-Winston Churchill" },
  { quote: "Always bear in mind that your own resolution to succeed is more important than any other.", author: "-Abraham Lincoln" },
  { quote: "Do not be afraid to give up the good to go for the great.", author: "-John D. Rockefeller" },
  { quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.", author: "-Thomas Edison" },
  { quote: "The fastest way to change yourself is to hang out with people who are already the way you want to be.", author: "-Reid Hoffman" },
  { quote: "Some people dream of success, while other people get up every morning and make it happen.", author: "-Wayne Huizenga" },
  { quote: "The only thing worse than starting something and failing … is not starting something.", author: "-Seth Godin" },
  { quote: "If you are not willing to risk the usual, you will have to settle for the ordinary.", author: "-Jim Rohn" },
  { quote: "The way to get started is to quit talking and begin doing.", author: "-Walt Disney" },
  { quote: "Knowlegde is power and money.", author: "-Bill gates" },
];

const quote = document.querySelector(".momentum-quote span:first-child");
const author = document.querySelector(".momentum-quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
