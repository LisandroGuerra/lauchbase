<h1 align="center">
    <img alt="Launchbase" src="https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png" width="400px" />
</h1>

<h3 align = "center">
  Challenge 2-3: Courses and iframe page
</h3>

<blockquote align = "center"> “You never lose when you gain knowledge!” </blockquote>

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

From the challenge 2.2 file, add a link called Contents in the header. This page should contain a grid where the 3 main courses of Rocketseat should be shown: Starter, Launchbase and GoStack. When clicking on one of the courses, a modal must be opened where an iframe will load the information of the selected course.

### Page information

- Page title
- Grid with 3 columns and 1 row where course cards will be presented

## Card information

- Course Logo ([Starter](https://skylab.rocketseat.com.br/static/64c237ccff807c054339a62d53b4b402.svg), [Launchbase](https://skylab.rocketseat.com.br/static/0828532024cb46921a6b5e941f8d788d.svg) and [GoStack](https://skylab.rocketseat.com.br/static/83a178a0653dab1d55e2ed7946465975.svg))
- Course title
- Number of course modules
- Information if the course is free or paid

## Modal

The modal must contain an iframe that fetches the course page (hint: just add `starter`,` launchbase` or `gostack` to the end of `https: // rocketseat.com.br / `). In addition to the modal close button, it is necessary to implement the functionality of maximizing the modal (hint: use the same logic implemented to close the `modalOverlay`, but work with the` modal` class and use the `contains` method of the `classList `to check whether or not the element is in the` maximize` class).

### Stylization

You are free to choose the style you prefer for this challenge, but some points are mandatory:

- The grid should be used to organize the courses
- The modal should never open maximized

## :calendar: Delivery

These challenges **do not need to be delivered** and will not receive correction, but you can add them to your Github. It is a good way to demonstrate your knowledge for future opportunities.

## :memo: Licence

This project is under the MIT license. See the [LICENSE](../LICENSE) file for more detais.

---

Built with :purple_heart: by [Rocketseat](https://rocketseat.com.br) :wave: [Join our community!](https://discordapp.com/invite/gCRAFhc)