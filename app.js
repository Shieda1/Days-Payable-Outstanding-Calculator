// https://calculator.swiftutors.com/days-payable-outstanding-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const daysPayableOutstandingRadio = document.getElementById('daysPayableOutstandingRadio');
const accountsPayableRadio = document.getElementById('accountsPayableRadio');
const costofSalesRadio = document.getElementById('costofSalesRadio');
const numberofDaysRadio = document.getElementById('numberofDaysRadio');

let daysPayableOutstanding;
let accountsPayable = v1;
let costofSales = v2;
let numberofDays = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

daysPayableOutstandingRadio.addEventListener('click', function() {
  variable1.textContent = 'Accounts Payable';
  variable2.textContent = 'Cost of Sales';
  variable3.textContent = 'Number of Days';
  accountsPayable = v1;
  costofSales = v2;
  numberofDays = v3;
});

accountsPayableRadio.addEventListener('click', function() {
  variable1.textContent = 'Days Payable Outstanding (DPO)';
  variable2.textContent = 'Cost of Sales';
  variable3.textContent = 'Number of Days';
  daysPayableOutstanding = v1;
  costofSales = v2;
  numberofDays = v3;
});

costofSalesRadio.addEventListener('click', function() {
  variable1.textContent = 'Days Payable Outstanding (DPO)';
  variable2.textContent = 'Accounts Payable';
  variable3.textContent = 'Number of Days';
  daysPayableOutstanding = v1;
  accountsPayable = v2;
  numberofDays = v3;
});

numberofDaysRadio.addEventListener('click', function() {
  variable1.textContent = 'Days Payable Outstanding (DPO)';
  variable2.textContent = 'Accounts Payable';
  variable3.textContent = 'Cost of Sales';
  daysPayableOutstanding = v1;
  accountsPayable = v2;
  costofSales = v3;
});

btn.addEventListener('click', function() {
  
  if(daysPayableOutstandingRadio.checked)
    result.textContent = `Days Payable Outstanding = ${computeDaysPayableOutstanding().toFixed(2)}`;

  else if(accountsPayableRadio.checked)
    result.textContent = `Accounts Payable = ${computeAccountsPayable().toFixed(2)}`;

  else if(costofSalesRadio.checked)
    result.textContent = `Cost of Sales = ${computeCostofSales().toFixed(2)}`;

  else if(numberofDaysRadio.checked)
    result.textContent = `Number of Days = ${computeNumberofDays().toFixed(2)}`;
})

// calculation

function computeDaysPayableOutstanding() {
  return (Number(accountsPayable.value) / Number(costofSales.value)) * Number(numberofDays.value);
}

function computeAccountsPayable() {
  return (Number(daysPayableOutstanding.value) * Number(costofSales.value)) / Number(numberofDays.value);
}

function computeCostofSales() {
  return (Number(accountsPayable.value) / Number(daysPayableOutstanding.value)) * Number(numberofDays.value);
}

function computeNumberofDays() {
  return (Number(daysPayableOutstanding.value) * Number(costofSales.value)) / Number(accountsPayable.value);
}