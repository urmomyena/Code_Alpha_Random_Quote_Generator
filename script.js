const quotes = [
  { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
  { text: "The world is full of beautiful things, just waiting for you to notice them.", author: "Unknown" },
  { text: "Every moment is a fresh beginning.", author: "T.S. Eliot" },
  { text: "Create the life you can't wait to wake up to.", author: "Josie Spinardi" },
  { text: "Nothing can dim the light that shines from within.", author: "Maya Angelou" },
  { text: "Stay close to what makes you feel alive.", author: "Unknown" },
  { text: "In a gentle way, you can shake the world.", author: "Mahatma Gandhi" },
  { text: "Do it with passion or not at all.", author: "Rosa Nouchette Carey" },
  { text: "Stars can’t shine without darkness.", author: "D.H. Sidebottom" },
  { text: "Your vibe attracts your tribe.", author: "Unknown" }
];

const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const tweetBtn = document.getElementById("tweet");

function getRandomQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  const quote = quotes[random];

  // Remove and re-add fade class for animation
  quoteEl.classList.remove("fade");
  authorEl.classList.remove("fade");

  void quoteEl.offsetWidth;
  void authorEl.offsetWidth;

  quoteEl.textContent = `"${quote.text}"`;
  authorEl.textContent = `— ${quote.author}`;

  quoteEl.classList.add("fade");
  authorEl.classList.add("fade");

  // Update tweet link
  const tweetText = `"${quote.text}" — ${quote.author}`;
  tweetBtn.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
}

newQuoteBtn.addEventListener("click", getRandomQuote);
window.onload = getRandomQuote;
