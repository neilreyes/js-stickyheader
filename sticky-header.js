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
