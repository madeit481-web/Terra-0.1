# Project: Terra-0.1

## Overview
This project is a simple web application demonstrating basic HTML, CSS, and JavaScript functionalities. It aims to provide a clean and responsive user interface.

## Project Outline
- **Initial Setup:** Basic `index.html`, `style.css`, and `main.js` for a web page.
- **Dark/Light Mode Feature:**
    - A toggle button in `index.html` to switch between themes.
    - CSS styles defined in `style.css` using CSS variables to manage colors for both dark and light themes.
    - JavaScript logic in `main.js` to handle theme switching, save user preference to `localStorage`, and apply the theme on page load.
    - Localized theme toggle text to Korean.
- **Improved Image Display:**
    - Replaced `loremflickr.com` random image generation with curated, high-quality, royalty-free image URLs for each menu item to ensure accurate matching.
    - Implemented a loading mechanism to hide the image (`opacity: 0`) until it's fully loaded (`onload` event), then make it visible (`opacity: 1`), to improve perceived loading speed and prevent flickering.
- **Trendy Background:**
    - Implemented a subtle, modern gradient background using CSS variables, adapting to both light and dark modes.

## Plan for Current Change: Match Images to Names & Trendy Background

### Steps:
1.  **Update `main.js`:**
    *   Replaced `imageKeyword` with `imageUrl` in the `dinnerMenus` array, using specific, curated URLs for each food item.
    *   Modified the `displayMenu` function to use `menu.imageUrl` directly.
2.  **Update `style.css`:**
    *   Implemented a subtle gradient background for the `body` element, defined using CSS variables that adapt to light and dark modes.
3.  **Verify:** Test if food images now consistently match their names, load quickly, and if the background is aesthetically pleasing in both themes.
4.  **Commit and Push:** Stage, commit, and push the changes to the GitHub repository.