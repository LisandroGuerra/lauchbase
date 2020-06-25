<h1 align="center">
    <img alt="Launchbase" src="https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png" width="400px" />
</h1>

<h3 align="center">
  Challenge 1-4: Applicaton: Banking operations 
</h3>

<blockquote align="center">“Don't compare your backstage with the other's stage!”</blockquote>

<p align="center">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%23F8952D">
  </a>

  <a href="LICENSE" >
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F8952D">
  </a>

</p>

<p align="center">
  <a href="#rocket-about-the-challenge">About the challenge</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#calendar-delivery">Delivery</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licence">Licence</a>
</p>

## :rocket: About challenge

Challenges to strengthen some concepts, among them:

- **Booleans**;
- **Organization**;
- **Padronization**;
- **Writing**.

### Intro

Create a program to perform banking transactions on user's accounts.

Start by creating an object with the user's name, transactions and balance.

The transactions must start as an empty array `[]` and the balance (balance) at `0` (zero).

```js
const user = {
  name: "Lisandra",
  transactions: [],
  balance: 0
};
```

### Add transactions

Create a `createTransaction` function to add a new transaction to a user's transaction array, this function must take as a parameter a transaction object that has the following format:

```js
{
  type: 'credit',
  value: 50.5
}
```

The `type` can be` credit` for credits or `debit` for debits, of the user's account.

When a transaction is of the type `credit` it must also add the value of the credit to the balance (balance) of the user.

If it is a `debit` transaction, it must subtract the amount of the debit from the user's balance.

_Tip .: You can use the `user.transactions.push (transaction)` method to add a new item to the transaction array._


### Reports

- Create a function called `getHigherTransactionByType` that takes the type of transaction` credit / debit` as a parameter, goes through the user's transactions and returns the **object** of the highest value transaction with that type:

```js
getHigherTransactionByType ("credit"); // {type: 'credit', value: 120}
```

- Create a function called `getAverageTransactionValue` that returns the average value of a user's transactions regardless of their type:

```js
getAverageTransactionValue (); // 83.3
```

- Create a function called `getTransactionsCount` that returns the number of transactions of each type` credit / debit`, the return of the function must be an object and follow exactly as the model presented below:

```js
getTransactionsCount (); // {credit: 5, debit: 3}
```


### Example of the final result of the project:

```js
createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // 60

getHigherTransactionByType("credit"); // { type: 'credit', value: 120 }
getHigherTransactionByType("debit"); // { type: 'debit', value: 80 }

getAverageTransactionValue(); // 70

getTransactionsCount(); // { credit: 2, debit: 2 }
```


## :calendar: Delivery

These challenges **do not need to be delivered** and will not receive correction, but you can add them to your Github. It is a good way to demonstrate your knowledge for future opportunities.

## :memo: Licence

This project is under the MIT license. See the [LICENSE](../LICENSE) file for more detais.

---

Built with :purple_heart: by [Rocketseat](https://rocketseat.com.br) :wave: [Join our community!](https://discordapp.com/invite/gCRAFhc)
