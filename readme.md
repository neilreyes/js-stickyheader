# Simple Sticky Header

A vanilla JS snippet that will make the site header stick on window while scrolling.

## Code Preview :

```js
const onScroll = (
    event,
    siteHeaderTag = "#masthead",
    className = "scrolling"
) => {
    // Get siteHeader
    const siteHeader = document.querySelector(siteHeaderTag);
    // If siteHeader does exists and more than one return false
    if (!siteHeader || document.querySelectorAll(siteHeaderTag).length > 1) {
        // Bail out
        return false;
    }

    // Get the amount of scroll
    let scrollY = window.scrollY;
    // Cache body tag
    const body = document.querySelector("body");
    // Get the height of siteHeader
    const siteHeaderHeight = siteHeader.offsetHeight;

    // If the amount of scrollY is more than the height of siteHeader (in px) add a class name to the body otherwise remove className
    if (scrollY > siteHeaderHeight) {
        body.classList.add(className);
    } else {
        body.classList.remove(className);
    }
};

// Bind onScroll function when window scrolls
window.addEventListener("scroll", onScroll(siteHeader));
```

## Add the following CSS rules to the stylesheet file

```css
// Default State
#mastHead {
    width: 100%;
    height: 100px;
    background-color: transparent;
}

// header style while on scroll
.scrolling #mastHead {
    position: fixed;
    background-color: white;
    top: 0;
    left: 0;
}
```
