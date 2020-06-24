let user = {
    name: "Mariana",
    transactions: [],
    balance: 0
  };

function createTransaction(transaction){
    if (transaction.type === 'debit'){
        user.balance -= transaction.value
    }
    else{
        user.balance += transaction.value
    }
    user.transactions.push(transaction)
}

//Relatórios
function getHigherTransactionByType(transactionType){
    const transactions = user.transactions
    let higherTransaction
    for (let transaction of transactions){
        if (transaction.type === transactionType){
            if (higherTransaction === undefined){
                higherTransaction = transaction
            }
            else{
                if (higherTransaction.value < transaction.value){
                    higherTransaction = transaction
                }
            }

        }
    }
    return higherTransaction

}

function getAverageTransactionValue(){
    const transactions = user.transactions
    let totalValue = 0
    let averageTransaction
    for (let transaction of transactions){
        totalValue += transaction.value
    }
    averageTransaction = totalValue / transactions.length

    return averageTransaction    
}

function getTransactionsCount(){
    //getTransactionsCount(); // { credit: 5, debit: 3 }
    const transactions = user.transactions
    let creditCount = 0
    let debitCount = 0
    for (let transaction of transactions) {
        if (transaction.type === 'credit'){
            creditCount++
        }
        else{
            debitCount++
        }
    }

    return {credit: creditCount, debit: debitCount}
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });


console.log(user.balance); // 60

console.log(getHigherTransactionByType("credit")) // { type: 'credit', value: 120 }

console.log(getHigherTransactionByType("debit")) // { type: 'debit', value: 80 }

console.log(getAverageTransactionValue()) // 70

console.log(getTransactionsCount()) // { credit: 2, debit: 2 }