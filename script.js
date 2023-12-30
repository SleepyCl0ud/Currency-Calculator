{
  let calculateResult = (amount, currency) => {
    const EUR = 4.3272;
    const USD = 4.0171;
    const GBP = 5.0486;

    switch (currency) {
      case "EUR":
        return amount / EUR;

      case "USD":
        return amount / USD;

      case "GBP":
        return amount / GBP;
    }
  };

  const updateResultText = (amount, currency, result) => {
    const resultElement = document.querySelector(".js-result");
    
    resultElement.innerHTML = `${amount.toFixed(2)} PLN = <span>${result.toFixed(2)} ${currency}</span>`;
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");
   

    const amount = +amountElement.value;
    const currency = currencyElement.value;
    let result = calculateResult(amount, currency);

    updateResultText(amount, currency, result)
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
  };
  init();
}
