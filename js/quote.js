const quotes = [
    {
        text: "피할수 없으면 즐겨라.",
        author: "- 로버트 엘리엇",
    },
    {
        text: "삶이 있는 한 희망은 있다.",
        author: "- 키케로",
    },
    {
        text: "성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다.",
        author: "- 톰 모나건",
    },
    {
        text: "사막이 아름다운 것은 어딘가에 샘이 숨겨져 있기 때문이다.",
        author: "– 생떽쥐베리",
    },
    {
        text: "당신이 할수 있다고 믿든 할수 없다고 믿든 믿는 대로 될것이다.",
        author: "- 헨리 포드",
    },
    {
        text: "자신감 있는 표정을 지으면 자신감이 생긴다.",
        author: "- 찰스다윈",
    },
];

 const QUOTE_KEY = Math.floor(Math.random() * quotes.length);

 const quoteText = quotes[QUOTE_KEY].text;
 const quoteAuthor = quotes[QUOTE_KEY].author;

 const quote = document.getElementById("quote");
 
 quote.innerText = `${quoteText} ${quoteAuthor}`;