<h1 align="center">
    <img alt="Launchbase" src="https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png" width="400px" />
</h1>

<h3 align="center">
  Challenge 1-1: First steps with JS
</h3>

<blockquote align="center">“Wanting to win means already being halfway.”</blockquote>

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

## :rocket: About the challenge

Challenges to strengthen some concepts, among them:

- **Variables**;
- **Conditionals**;
- **Operators**.

### BMI calculation

Create a program to calculate a person's BMI and obesity level.

Start by creating constants to store a person's `name`,` weight`, `height` and `gender`, for example:

```js
const name = "Carlos";
const weight = 84;
const height = 1.88;
```

From this data, store in a constant called `bmi` the calculation of the body mass index defined by the formula below:

```js
weight / (height * height);
```

Based on the value obtained through this calculation, display the following messages:

- `IF` the` BMI` greater than or equal to `30`: Carlos you are overweight;
- `IF` the` BMI` less than `29.9`: Carlos you are not overweight;


### Retirement calculation

Create a program to calculate a person's retirement.

_Obs .: This calculation is fictitious, within retirement there are many other factors to be taken into account:)_

Start by creating constants to store `name`, `gender`, `age` and `contribution` (in years), for example:

```js
const name = "Silvana";
const gender = "F";
const age = 48;
const contribution = 23;
```

Based on the values ​​above, use the following formulas to calculate whether the person is able or not to retire, and at the end print a message on screen.

- The minimum contribution time for **men** is **35 years** and, for **women**, **30 years**;
- Using the rule 85-95, the sum of the age and the contribution time of the **man** must be at least **95 points**, while the **woman** must be at least **85 points** in the sum;

Based on the rules above, print the messages on the screen:

- `IF` the person is retired: `Silvana, you can retire!`;
- `IF` the person is NOT retired: `Silvana, you still cannot retire!`;


_Tip: You can join two conditions, see the example below_

```js
if (condition1) {
  if (condition2) {
    // Condition 1 and 2 passed
  } else {
    // Condition 1 passed, but condition 2 did not
  }
} else {
  // Condition 1 has not passed
}
```

## :calendar: Delivery

These challenges **do not need to be delivered** and will not receive correction, but you can add them to your Github. It is a good way to demonstrate your knowledge for future opportunities.

## :memo: Licence

This project is under the MIT license. See the [LICENSE](../LICENSE) file for more detais.

---

Built with :purple_heart: by [Rocketseat](https://rocketseat.com.br) :wave: [Join our community!](https://discordapp.com/invite/gCRAFhc)
