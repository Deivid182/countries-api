# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

### Screenshot

![](https://res.cloudinary.com/dqsvp22du/image/upload/v1691775655/Screenshot_from_2023-08-11_11-39-44_eqhzkd.png)

This is how looks my solution. I didn't added the toggle theme but eventually i will do it

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

### Links

- Code: [Add solution URL here](https://your-solution-url.com)
- Demo: [Add live site URL here](https://your-live-site-url.com)

## My process

I started this project by initializing a vite project and then I built the interface using tailwind at first place. Then I fetched the data of all countries. What I found a little hard was to consume some parts such as the borders countries or the official name of each country.

### Built with

- ReactJS
- TailwindCSS
- Font Awesome
- React Router Dom

### What I learned

I think that the best thing I learned from this challenge was that I implemented some kinda debounce method using setTimeOut function and in second place the way of formatting data returned by an api that sometimes ypou have to implement your own functions so you can show good results without errors.

The next code explains better what I did:

```js
export function getBorderCountryNames(items) {

  let borders = items.map(border => border.substring(0, border.length - 1));

  const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
  const newBorders = borders.map(border => regionNames.of(border))

  return newBorders
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Useful resources

- [Phind](https://www.phind.com/) - I like to use this tool based on chat gpt when I don't know how to apply some style or things like that
- [MDN Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames) - This article from MDN helped me format country codes

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/Deivid182)
- Twitter - [@yourusername](https://twitter.com/DaveDev5173)
