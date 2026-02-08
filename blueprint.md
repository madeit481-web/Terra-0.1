# Project: Terra-0.1

## Overview
This project is a simple web application demonstrating basic HTML, CSS, and JavaScript functionalities. It aims to provide a clean and responsive user interface.

## Project Outline
- **Initial Setup:** Basic `index.html`, `style.css`, and `main.js` for a web page.
- **Dark/Light Mode Feature:**
    - A toggle button in `index.html` to switch between themes.
    - CSS styles defined in `style.css` using CSS variables to manage colors for both dark and light themes.
    - JavaScript logic in `main.js` to handle theme switching, save user preference to `localStorage`, and apply the theme on page load.
- **Improved Image Display:**
    - Changed image source from `source.unsplash.com` to `loremflickr.com` for better reliability and relevance.
    - Added cache busting parameter to image URLs.
    - Implemented basic error handling for image loading with a fallback placeholder.

## Plan for Current Change: Improve Food Image Display

### Steps:
1.  **Update `main.js`:**
    *   Change the image source URL to `https://loremflickr.com/800/600/${menu.imageKeyword},food?cache=${new Date().getTime()}`.
    *   Add an `onerror` event handler to `menuImage` to display a fallback image if loading fails.
2.  **Verify:** Test if food images are now displaying correctly and beautifully.
3.  **Commit and Push:** Stage, commit, and push the changes to the GitHub repository.