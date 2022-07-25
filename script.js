const formElements = document.forms.calculator.elements,
      moneyBefore = document.querySelector('#money-before'),
      moneyAfter = document.querySelector('#money-after'),
      diagramAfter = document.querySelector('.diagram-after');

[...formElements].forEach(formItem => {
  formItem.addEventListener( 'change', () => showValue() );
});

function showValue() {
  const deposit = formElements.deposit.value,
        interest = formElements.interest.value / 100,
        term = formElements.months.value / 12;

  moneyBefore.textContent = deposit;
  const calculatedValue = calculate(deposit, interest, term);
  moneyAfter.textContent = calculatedValue;
  diagramAfter.style.height = calculatedValue / 100 + 'px';
}

function calculate(initial, interest, term) {
  return Math.round(initial * (1 + interest * term));
}

showValue();