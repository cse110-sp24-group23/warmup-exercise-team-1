# Tests Document

## Several Browsers and Versions

Problems:

-   [x] Image rotation doesn't work on Safari 6.2 on OS X Mountain Lion

    -   Looks like one option only on the bottom left of the arch
    -   FIX: added the following code to support it:

        ```
        /* for transforming */
        -ms-transform-origin: 100% 100%;
        -moz-transform-origin: 100% 100%;
        -webkit-transform-origin: 100% 100%;
        -o-transform-origin: 100% 100%;

        /* for rotating each rating-div */
        -ms-transform: rotate(calc(4 * var(--piece-arc-degrees)));
        -moz-transform: rotate(calc(4 * var(--piece-arc-degrees)));
        -webkit-transform: rotate(calc(4 * var(--piece-arc-degrees)));
        -o-transform: rotate(calc(4 * var(--piece-arc-degrees)));
        ```

-   [x] Same rotation problem for OS X Mountain Lion on Firefox 48

## Bad internet

-   [x] little issues with loading since it is such a small app with little JS and no large dependencies

## Option Selection

Problems:

-   [x] It is very hard to tell when you’ve selected a face/slice. It is too light
    -   FIX:
        -   added text in the middle on hover and click
        -   darkens everything except the selected option on click
        -   shifts hovered option out slightly on hover

## Several Screen Sizes

-   [x] Images are too large to accomodate small screen sizes. Potentially tell mobile users to rotate to landscape?
    -   FIX: Added media tags that change --rating-img-width depending on the size of the screen (4 breakpoints)

## No JS

-   No problems: lacks text in the center (as expected, but hover and selection work fine still). Still takes you to thank you page

## Good Conditions (Normal)

-   No problems: works as expected
