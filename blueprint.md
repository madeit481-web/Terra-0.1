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
    - **Troubleshooting History & Diagnosis:**
        - Initial attempts using `unsplash.com` and `loremflickr.com` for image sourcing led to issues (hotlinking restrictions, inconsistent matching, perceived slow loading).
        - Attempted solution with specific, directly embeddable, high-quality Pixabay URLs for each menu item, but `net::ERR_NAME_NOT_RESOLVED` indicated a network/DNS resolution issue on the user's side, preventing access to external image domains.
    - **Current Solution (Local Placeholders):**
        *   Created local SVG placeholder image files (`images/steak.svg`, `images/pasta.svg`, etc.) for each menu item, containing the food name as text on a plain white background.
        *   Created a local SVG error image (`images/error.svg`) for fallback.
        *   `main.js` updated to reference these local image paths.
    - Implemented a loading mechanism to hide the image (`opacity: 0`) until it's fully loaded (`onload` event), then make it visible (`opacity: 1`), to improve perceived loading speed and prevent flickering.
- **Trendy Background:**
    - Implemented a subtle, modern gradient background using CSS variables, adapting to both light and dark modes.

## Plan for Current Change: Implement Local Placeholder Images

### Steps:
1.  **Generate Local SVG Images:** Created 7 SVG files (e.g., `images/steak.svg`) with food names as text for each menu item, plus `images/error.svg` as a fallback.
2.  **Update `main.js`:**
    *   Updated `imageUrl`s in the `dinnerMenus` array to reference the new local SVG paths.
    *   Modified the `onerror` fallback to `images/error.svg`.
3.  **Verify:** Confirm that the local SVG placeholder images are now displaying correctly on the website, addressing the `net::ERR_NAME_NOT_RESOLVED` issue.
4.  **Commit and Push:** Stage, commit, and push this version to the GitHub repository.