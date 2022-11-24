const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const vkBtn = document.getElementById('vk')
const newQuoteBtn = document.getElementById('new-quote')
async function getQuote(){
    try{
        const response = await fetch('https://favqs.com/api/qotd');
        const data = await response.json();
        authorText.innerText = data.quote.author;
        if (data.quote.body.length > 120){
            quoteText.classList.add('long-quote');
        } else{
            quoteText.classList.remove('long-quote');
        }
        quoteText.innerText = data.quote.body;
        
    }catch{

    }

 
   

}

newQuoteBtn.addEventListener('click', getQuote);

getQuote();