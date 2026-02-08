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
    - **Troubleshooting History:**
        - Initial attempts using `unsplash.com` and `loremflickr.com` for image sourcing led to issues (hotlinking restrictions, inconsistent matching, perceived slow loading).
        - Attempted solution with specific, directly embeddable, high-quality Pixabay URLs for each menu item to ensure accurate matching, reliability, and faster loading.
        - Previous troubleshooting step: Temporarily replaced all custom image URLs with generic `https://via.placeholder.com` URLs (with Korean text parameters) to isolate whether the image loading issue is due to the image sources themselves or the JavaScript loading mechanism.
    - **Current Troubleshooting Step:**
        *   Simplified placeholder image URLs in `main.js` to `https://via.placeholder.com/800x600` (removed Korean text parameters) and used a simple English "Error" for the fallback, to rule out URL encoding issues.
        *   Added `console.log` statements to `main.js` to trace image element selection, URL assignment, and `onload`/`onerror` events.
    - Implemented a loading mechanism to hide the image (`opacity: 0`) until it's fully loaded (`onload` event), then make it visible (`opacity: 1`), to improve perceived loading speed and prevent flickering.
- **Trendy Background:**
    - Implemented a subtle, modern gradient background using CSS variables, adapting to both light and dark modes.

## Plan for Current Change: Further Debug Image Loading with Simplified Placeholders

### Steps:
1.  **Update `main.js`:**
    *   Replaced all `imageUrl`s in the `dinnerMenus` array with `https://via.placeholder.com/800x600` (simple, no text parameter) for testing purposes.
    *   Modified the `onerror` fallback to `https://via.placeholder.com/800x600?text=Error` (simplified English text).
    *   Ensured `console.log` statements are still in place.
2.  **User Action Required (Verification):** The user needs to:
    *   Visit the updated website.
    *   Open their browser's developer console (usually by pressing F12).
    *   Report any messages or errors visible in the console, especially regarding image loading. The `net::ERR_NAME_NOT_RESOLVED` error on `via.placeholder.com` would be a very critical piece of information.
3.  **Commit and Push:** Stage, commit, and push this debugging version to the GitHub repository.