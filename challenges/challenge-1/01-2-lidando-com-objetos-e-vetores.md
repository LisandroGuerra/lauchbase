<h1 align="center">
    <img alt="Launchbase" src="https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png" width="400px" />
</h1>

<h3 align="center">
  Challenge 1-2: Dealing with objects and vectors
</h3>

<blockquote align="center">“It is not enough to know, it is preferable to know how to apply. It is not enough to want, it is necessary to know how to want.”</blockquote>

<p align="center">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%23F8952D">
  </a>

  <a href="LICENSE" >
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F8952D">
  </a>

</p>

<p align="center">
  <a href="#rocket-sobre-o-desafio">About the challenge</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#calendar-entrega">Delivery</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licence</a>
</p>

## :rocket: About the challenge

Challenges to strengthen some concepts, among them:

- **Objects**;
- **Vectors**.

### Construction and printing of objects

Create a program that stores Rocketseat company data inside an object called `company`. The data to be stored are:

- Name: Rocketseat
- Color: Purple
- Spot: Computer programming
- Address:

  - Street: Rua Guilherme Gembala
  - Number: 260

_Obs .: To store the company address data you can create interleaved objects, for example:_

```js
const user = {
  name: "Lisandro",
  company: {
    name: "Rocketseat"
  }
};
```

Print on screen using `console.log` the name of the company and its address in the following format:

```
The company Rocketseat is located at Street Guilherme Gembala, 260
```

_Obs. To print on canvas, use the format of template strings, for example_

```js
console.log (`The user name is ${user.name}`);
```

### Vectors and objects

Create a program with an object to store data from a programmer such as `name`,` age` and `technologies` that he uses to work.

A programmer can work with several technologies, so store those technologies in an array.

Technologies must also be objects containing `name` and` specialty`, use the technologies below:

```js
{name: 'C ++', specialty: 'Desktop'}
{name: 'Python', specialty: 'Data Science'}
{name: 'JavaScript', specialty: 'Web / Mobile'}
```

For example:

```js
const object = {
  property: [
    {name: "C ++", specialty: "Desktop"},
    {name: "JavaScript", specialty: "Web / Mobile"}
  ]
};
```

Print on screen the name and specialty of the first technology that the user uses in the following format:

```
User Carlos has 32 years old and uses C ++ technology with expertise in Desktop
```

## :calendar: Delivery

These challenges **do not need to be delivered** and will not receive correction, but you can add them to your Github. It is a good way to demonstrate your knowledge for future opportunities.

## :memo: Licence

This project is under the MIT license. See the [LICENSE](../LICENSE) file for more detais.

---

Built with :purple_heart: by [Rocketseat](https://rocketseat.com.br) :wave: [Join our community!](https://discordapp.com/invite/gCRAFhc)
