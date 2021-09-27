//referring to everything in the window, console logs
console.log(this);

// logging hellothis in to window
function helloThis() {
  console.log('Inside this function, this is ' + this);
}

//loggin age to window
var child = {
  age: 10,
  ageTenYears: function () {
    console.log(this.age + 10);
  },
};

//loggin age to window
var investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      console.log(this.initialInvestment * 1.15);
    },
  },
};
helloThis()
child.ageTenYears()
investor.investment.investmentGrowth()