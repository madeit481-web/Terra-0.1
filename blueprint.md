# Project: Terra-0.1

## Overview
This project is a simple web application demonstrating basic HTML, CSS, and JavaScript functionalities. It aims to provide a clean and responsive user interface.

## Project Outline
- **Initial Setup:** Basic `index.html`, `style.css`, and `main.js` for a web page.
- **Dark/Light Mode Feature:**
    - A toggle button in `index.html` to switch between themes.
    - CSS styles defined in `style.css` using CSS variables to manage colors for both dark and light themes.
    - JavaScript logic in `main.js` to handle theme switching, save user preference to `localStorage`, and apply the theme on page load.
- **Improved Image Display (Initial):**
    - Changed image source from `source.unsplash.com` to `loremflickr.com` for better reliability and relevance.
    - Added cache busting parameter to image URLs.
    - Implemented basic error handling for image loading with a fallback placeholder.

## Plan for Current Change: Enhance Image Quality/Speed and Localize Theme Text

### Steps:
1.  **Update `main.js`:**
    *   **Image Enhancements:**
        *   Modified `loremflickr.com` image URL to include more specific keywords (`food,plate,isolated,high-quality`) to encourage better quality and less background in images.
        *   Implemented a loading mechanism to hide the image (`opacity: 0`) until it's fully loaded (`onload` event), then make it visible (`opacity: 1`), to improve perceived loading speed and prevent flickering.
    *   **Theme Text Localization:**
        *   Translated the dark/light mode toggle text ("Enable Dark Mode!" / "Disable Dark Mode!") to Korean ("다크 모드 활성화!" / "다크 모드 비활성화!") in the `setTheme` function.
2.  **Verify:** Test if food images are now displaying more appropriately and quickly, and if the theme toggle text changes correctly in Korean.
3.  **Commit and Push:** Stage, commit, and push the changes to the GitHub repository.
