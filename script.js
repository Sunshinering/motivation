const btn = document.querySelector(".btn");
const quote = document.querySelector(".quote");
const quotesArray = [
"Learn today, lead tomorrow.",
"Knowledge is the key to unlock your potential.",
"Every small effort adds up to big success.",
"Strive for progress, not perfection.",
"Embrace the challenge; it's the path to growth.",
"Education is the passport to the future.",
"Invest in yourself through learning.",
"Success begins with a single step – start studying!",
"Dream big, study hard, achieve greatness.",
"The only limit to your success is your dedication.",
"Stop being lazy just do it",
"If not now , When ? ",
  ];
  let currentQuoteIndex = 0;


btn.addEventListener("click", () => {
    quote.innerHTML = quotesArray[currentQuoteIndex];
    currentQuoteIndex = (currentQuoteIndex + 1) % quotesArray.length;
    rotation();
  });
function rotation(){
    const rotation = Math.random() * 360;
 document.getElementById('shape').style.transform = `rotate(${rotation}deg)`;}