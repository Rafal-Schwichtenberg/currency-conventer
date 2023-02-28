const welcome = () => {
  console.log("Hi everyone :d ");
};

welcome();

const formElement = document.querySelector(".js-form");
const plnElement = document.querySelector(".js-pln");
const currencyElement = document.querySelector(".js-currency");
const resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (Event) => {
  Event.preventDefault();

  const calculateResult = (plnElement, currency) => {
    const USD = 4.44;
    const EUR = 4.82;
    const GBP = 5.57;

    switch (currency) {
      case "EUR":
        return plnElement / EUR;
      case "USD":
        return plnElement / USD;
      case "GBP":
        return plnElement / GBP;
    }
  };

  const currency = currencyElement.value;
  const pln = +plnElement.value;


  const result = calculateResult(pln, currency);

  resultElement.value = result.toFixed(2) + " " + currency;
});