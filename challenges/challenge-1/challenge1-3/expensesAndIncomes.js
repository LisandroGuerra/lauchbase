const users = [
    {
      name: 'Salvio',
      incomes: [115.3, 48.7, 98.3, 14.5],
      expenses: [85.3, 13.5, 19.9]
    },
    {
      name: 'Marcio',
      incomes: [24.6, 214.3, 45.3],
      expenses: [185.3, 12.1, 120.0]
    },
    {
      name: 'Lucia',
      incomes: [9.8, 120.3, 340.2, 45.3],
      expenses: [450.2, 29.9]
    },
    {
      name: 'Lisandro',
      incomes: [299.8, 120.3, 340.2, 45.3],
      expenses: [450.2, 29.9, 14.28]
    }
  ]


function addNumbers(numbers){
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue)
}


function calculatesBalance(incomes, expenses) {
  let totalIncomes = addNumbers(incomes)
  let totalExpenses = addNumbers(expenses)
  return totalIncomes - totalExpenses
}


for (let user of users) {
  let positiveOrNegative = 'POSITIVE'
  let balance = calculatesBalance(user.incomes, user.expenses).toFixed(2)

  if (balance < 0) positiveOrNegative = 'NEGATIVE'

  console.log(`${user.name} has a ${positiveOrNegative} balance of ${balance}`)
}