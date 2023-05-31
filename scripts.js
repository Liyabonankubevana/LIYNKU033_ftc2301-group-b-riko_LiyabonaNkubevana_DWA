// scripts.js

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");
const body = document.querySelector("body");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData( event.target );
  const { dividend, divider } = Object.fromEntries( entries );

// First User story
  const interger = Math.floor( dividend / divider );
  result.innerHTML = interger

// Second User story
  if ( dividend === "" || divider === "" ) {
    result.innerText = "Division not performed. Both values are required in inputs. Try again.";
    return;
  }

// Third user story
  if ( dividend < 0 || divider < 0 ) {
    result.innerText = "Division not performed. Invalid number provided. Try again.";
    console.error("Invalid number provided");
    return;
  }

// Last user story
  if ( isNaN(dividend) || isNaN(divider )) {
    body.innerHTML = "Something critical went wrong. Please reload the page.";
    console.error("It is not a number");
    return
  }

});