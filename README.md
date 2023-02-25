# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

This was a nice challenge for practising form validation. I also got to learn how regular expressions are formatted in JavaScript. I made use of CSS custom properties to get things done quickly.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

Desktop

![](./images/desktop.png)

Desktop-error

![](./images/desktop-error.png)

Desktop-success

![](./images/desktop-success.png)

Mobile

![](./images/mobile.png)


### Links

- Solution - [@dxiDavid](https://www.frontendmentor.io/profile/dxiDavid)
- Live Site URL: [Go live](https://intro-sign-up-form.pages.dev/)

## My process

I took the usual approach, I wrote the markup, styled it then proceeded to add the functionality for the form. The validation functions make use of JS regular expressions to make sure that the values of the input fields are correct. It wasn't very difficult to implement the logic behind form validation, though I did find myself constantly refactoring my code to avoid repeating myself.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow


### What I learned

1. I learned how to use a JavaScript regular expression to validate input data
2. I finally learned how to make a push animation for my buttons using CSS ```keyframes``` and the ```setTimeout()``` function so the user knows the they have clicked the button.

### Continued development

I might come back and try the same thing with CSS and JS frameworks. I'll also come back to add a button that displays the value of the password.

### Useful resources

- [Youtube](https://www.youtube.com/@KevinPowell) - This is where I found the best tutorials and explanations (For me) on CSS concepts and      writing functional CSS. Kevin Powel really knows his stuff and gives concise explanations.
- [w3schools](https://w3schools.com) - This website has an entire course on JavaScript with simple examples for both basic and advanced concepts.
- [CSS Tricks](https://css-tricks.com/) - This website provides very well written explanations to CSS concepts as well as examples for when you need to revisit a concept.
- [mdn](https://developer.mozilla.org/en-US/) - Always helpful to read the documentation of any language.

## Author

- Frontend Mentor - [@dxiDavid](https://www.frontendmentor.io/profile/dxiDavid)
- Twitter - [@dxidavid254](https://www.twitter.com/dxidavid254)
