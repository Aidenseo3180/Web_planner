const quotes = [
{
    quotes:"Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author : "Mahatma Gandhi",
},{
    quotes:"Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
    author:"Marie Curie",
},{
    quotes:"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    author:"Buddha",
},{
    quotes:"He who has a why to live can bear almost any how.",
    author:"Friedrich Nietzsche",
},{
    quotes:"We do not remember days, we remember moments.",
    author:"Cesare Pavese",
},{
    quotes:"Don't go through life, grow through life.",
    author:"Eric Butterworth",
},{
    quotes:"The journey of a thousand miles begins with one step.",
    author:"Lao Tzu",
},{
    quotes:"You only live once, but if you do it right, once is enough.",
    author:"Mae West",
},{
    quotes:"Tough times never last but tough people do.",
    author:"Robert H. Schuller",
},{
    quotes:"Whether you think you can or you think you can’t, you’re right.",
    author:"Henry Ford",
},{
    quotes:"Strive not to be a success, but rather to be of value.",
    author:"Albert Einstein",
},{
    quotes:"Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    author:"Eleanor Roosevelt",
},{
    quotes:"Those who dare to fail miserably can achieve greatly.",
    author:"John F. Kennedy",
},{
    quotes:"Life is ten percent what happens to you and ninety percent how you respond to it.",
    author:"Charles Swindoll",
},{
    quotes:"Dream big and dare to fail.",
    author:"Norman Vaughan",
},{
    quotes:"In three words I can sum up everything I’ve learned about life: It goes on.",
    author:"Robert Frost",
}];

const quote_ = document.querySelector("#quote span:first-child");   //명언 (1번째 span)
const author_ = document.querySelector("#quote span:last-child");   //author (2번째 span)

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];   //0~16 random number (floor때문에 0~15까지)

quote_.innerText = todaysQuote.quotes;   
//todaysQuote (즉 랜덤으로 설정된 곳에 가서 quotes와 author을 부름)
author_.innerText = `- ${todaysQuote.author}`;

