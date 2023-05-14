// tax rates
const t1 = 0.105
const t2 = 0.175
const t3 = 0.3
const t4 = 0.33
const t5 = 0.39

const tib1 = 14000
const tib2 = 48000
const tib3 = 70000
const tib4 = 180000

let tax = 0
let kiwiSaver = 0
let netPay = 0

function calcNetIncome() {}

function calcTax(income) {
  if (income <= tib1 && income > 0) {
    calcT1(income)
  } else if (income <= tib2 && income > tib1) {
    calcT2(income)
  } else if (income <= tib3 && income > tib2) {
    calcT3(income)
  } else if (income <= tib4 && income > tib3) {
    calcT4(income)
  } else if (income > tib4) {
    calcT5(income)
  }

  netPay = income - tax
  // console.log('this is the income tax you pay each year: ' + tax)
  // console.log('this is your pay after tax: ' + netPay)
}

calcTax(50000)

function calcT1(inc) {
  tax = inc * t1
}

function calcT2(inc) {
  let t2Inc = inc - tib1
  tax = 1470 + t2Inc * t2
}

function calcT3(inc) {
  let t3Inc = inc - tib2
  tax = 7420 + t3Inc * t3
}

function calcT4(inc) {
  let t4Inc = inc - tib3
  tax = 14020 + t4Inc * t4
}

function calcT5(inc) {
  let t5Inc = inc - tib4
  tax = 50320 + t5Inc * t5
}
