var originalBillAmount = document.querySelector('.bill-amount-input');
var tipPercentage = document.querySelector('.tip-percentage-input');
var numberOfPeoplePaying = document.querySelector('.number-of-people-input');

var calculateBtn = document.querySelector('.calculate-btn');

var errorBillAmount = document.querySelector('.error-bill-amount');
var errorTipPercentage = document.querySelector('.error-tip-percentage');
var errorNumberOfPeople = document.querySelector('.error-number-of-people');

var tipAmount = document.querySelector('.tip-amount');
var tipPerPerson = document.querySelector('.tip-per-person');
var totalPerPerson = document.querySelector('.total-per-person');
var totalToPay = document.querySelector('.total-to-pay');

calculateBtn.addEventListener('click', calculateButtonHelper);


function calculateButtonHelper() {
  toggleUserInput();
  let totalTipAmount = calculateTotalTipAmount(originalBillAmount.value, tipPercentage.value);
  let tipPerPerson = calculateTipPerPerson(totalTipAmount,numberOfPeoplePaying.value);
  let totalBillPerPerson = calculateTotalBillPerPerson(originalBillAmount.value, numberOfPeoplePaying.value, tipPerPerson);
  let totalOfEntireBill = calculateTotalOfEntireBill(originalBillAmount.value, totalTipAmount);
  displayCalculations(totalTipAmount, tipPerPerson, totalBillPerPerson, totalOfEntireBill);
};

function toggleUserInput() {
  toggleErrorHelper(originalBillAmount);
  toggleErrorHelper(tipPercentage);
  toggleErrorHelper(numberOfPeoplePaying);
};

function toggleErrorHelper(input) {
  if(input.vale == ''){
    input.classList.add('input-error');
  } else {
    input.classList.remove('input-error');
  }
};

function calculateTotalTipAmount(originalBillAmount, tipPercentage) {
  let tipPercent = tipPercentage / 100;
  let totalTipAmount = originalBillAmount * tipPercent;
  return totalTipAmount;
};

function calculateTipPerPerson(tipAmount, numberOfPeoplePaying) {
  let tipPerPerson = tipAmount / numberOfPeoplePaying;
  return tipPerPerson;
};

function calculateTotalBillPerPerson(originalBillAmount, numberOfPeoplePaying, tipPerPerson) {
  let billBeforeTipPerPerson = originalBillAmount / numberOfPeoplePaying;
  let totalBillPerPerson = parseInt(billBeforeTipPerPerson) + parseInt(tipPerPerson);
  return totalBillPerPerson;
};

function calculateTotalOfEntireBill(originalBillAmount, totalTipAmount) {  
  let totalOfEntireBill = parseInt(originalBillAmount) + parseInt(totalTipAmount);
  return totalOfEntireBill;
};

function displayCalculations(totalTipAmount, tipPerPersonNumber, totalPerPersonNumber, totalToPayNumber) {
  tipAmount.innerText = `$${totalTipAmount}`;
  tipPerPerson.innerText = `$${tipPerPersonNumber}`;
  totalPerPerson.innerText = `$${totalPerPersonNumber}`;
  totalToPay.innerText = `$${totalToPayNumber}`;
}