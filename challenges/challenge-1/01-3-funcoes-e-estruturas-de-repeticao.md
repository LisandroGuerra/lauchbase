<h1 align="center">
    <img alt="Launchbase" src="https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png" width="400px" />
</h1>

<h3 align="center">
  Challenge 1-3: Functions and repeating structures
</h3>

<blockquote align="center">“Whether you believe you can do something or not, you are right.”</blockquote>

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

- **Functions and methods**;
- **Repeating structures**;
- **Scopes**.

### Users and tecnologies

Create a program that stores an array of users (objects), each user has a `name` and its `technologies` (new array), for example:

```js
const users = [
  {name: "Carlos", technologies: ["HTML", "CSS"]},
  {name: "Jasmine", technologies: ["JavaScript", "CSS"]},
  {name: 'Lisandro', tecnologies: ["HTML", "CSS", "JavaScript", "Python"]},
  {name: "Tuane", technologies: ["HTML", "Node.js"]}
];
```

Scroll through the list of users with a repetition structure by printing the user information on screen:

```
Carlos works with HTML, CSS
Jarmine works with JavaScript, CSS
Lisandro works with HTML, CSS, JavaScript, Python
Tuane works with HTML, Node.js
```



### Search for technology

Based on the previous challenge, use the same user list built.

Create a function that receives data from a user object and returns `IF` user works with CSS or not. This function must return a boolean `true / false`.

For example:

```js
function checkSeUserUseCSS (user) {
  // Scroll through the user's technology array until you find if he works with CSS
  // IF found, the function returns true , otherwise returns false
}
```

Scroll through the array of users and, for each one, check if it works with CSS using the function built above, if YES, print the user's information on screen:

```js
for (let i = 0; i <users.length; i ++) {
  const userWorksWithCSS = checkSeUserUseCSS(user[i]);

  if (userWorksWithCSS) {
    console.log (`The user ${user[i].name} works with CSS`);
  }
}
```


### Sum of expenses and incomes

Create a program that calculates the sum of income and expenses of users, and at the end returns the balance (`income - expenses`).

Use the user array below:

```js
const users = [
  {
    name: "Salvio",
    revenue: [115.3, 48.7, 98.3, 14.5],
    expenses: [85.3, 13.5, 19.9]
  },
  {
    name: "Marcio",
    revenue: [24.6, 214.3, 45.3],
    expenses: [185.3, 12.1, 120.0]
  },
  {
    name: "Lucia",
    revenue: [9.8, 120.3, 340.2, 45.3],
    expenses: [450.2, 29.9]
  }
];
```

Scroll through the user array and for each user call a function called `calculatesBalance` that takes the user's incomes and expenses as a parameter:

```js
function calculatesBalance (incomes, expenses) {}
```

Create a second function that takes as an parameter an array of numbers and returns the sum of them and use it to calculate the sum of incomes and expenses within the function `calculatesBalance`:

```js
function addNumbers (numbers) {
  // Adds all numbers inside the "numbers" array
}
```

The function `calculatesBalance` must use the function `addNumbers` to calculate the sum of incomes and expenses and in the end returns the user's balance, that is `incomes - expenses`.

At the end, display all users on screen, their respective balance and `IF` the balance is POSITIVE or NEGATIVE:

```
So-and-so has a POSITIVE balance of 43.3
So-and-so has a NEGATIVE balance of -90.3
```



## :calendar: Delivery

These challenges **do not need to be delivered** and will not receive correction, but you can add them to your Github. It is a good way to demonstrate your knowledge for future opportunities.

## :memo: Licence

This project is under the MIT license. See the [LICENSE](../LICENSE) file for more detais.

---

Built with :purple_heart: by [Rocketseat](https://rocketseat.com.br) :wave: [Join our community!](https://discordapp.com/invite/gCRAFhc)
