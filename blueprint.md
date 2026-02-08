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
    - **Current Troubleshooting Step:** Temporarily replaced all custom image URLs with generic `https://via.placeholder.com` URLs to isolate whether the image loading issue is due to the image sources themselves or the JavaScript loading mechanism.
    - Implemented a loading mechanism to hide the image (`opacity: 0`) until it's fully loaded (`onload` event), then make it visible (`opacity: 1`), to improve perceived loading speed and prevent flickering.
- **Trendy Background:**
    - Implemented a subtle, modern gradient background using CSS variables, adapting to both light and dark modes.

## Plan for Current Change: Isolate Image Loading Issue with Placeholder Images

### Steps:
1.  **Update `main.js`:**
    *   Replaced all `imageUrl`s in the `dinnerMenus` array with `https://via.placeholder.com/800x600?text=[Menu Name]` for testing purposes.
    *   Confirmed the `displayMenu` function correctly uses `menu.imageUrl`.
    *   Re-verified that theme text localization and image loading mechanisms are intact.
2.  **Verify (User Confirmation):** The user needs to confirm if these placeholder images now appear on the website.
3.  **Commit and Push:** Stage, commit, and push this troubleshooting version to the GitHub repository.