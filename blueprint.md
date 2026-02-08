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
        - Attempted solution with specific, directly embeddable, high-quality Pixabay URLs for each menu item to ensure accurate matching, reliability, and faster loading.
        - Debugging with `via.placeholder.com` (with and without text parameters) revealed `net::ERR_NAME_NOT_RESOLVED` in the user's browser console. **This error indicates a network/DNS resolution issue on the user's side, preventing access to external image domains like `via.placeholder.com` and likely `cdn.pixabay.com`. The application's code for image loading is functionally correct, but external resources cannot be reached from the user's environment.**
    - **Current Approach:** Reverted `main.js` to use the curated Pixabay URLs (without debugging logs) for visually appealing images, acknowledging that these might still be affected by the user's network issue.
    - Implemented a loading mechanism to hide the image (`opacity: 0`) until it's fully loaded (`onload` event), then make it visible (`opacity: 1`), to improve perceived loading speed and prevent flickering.
- **Trendy Background:**
    - Implemented a subtle, modern gradient background using CSS variables, adapting to both light and dark modes.

## Plan for Current Change: Revert to Pixabay URLs and Explain Network Diagnosis

### Steps:
1.  **Update `main.js`:**
    *   Corrected previous syntax errors.
    *   Reverted `imageUrl`s in the `dinnerMenus` array to the selected Pixabay URLs.
    *   Removed all `console.log` debugging statements.
    *   Restored the Korean fallback text in the `onerror` handler.
2.  **Inform User:** Explain that the `net::ERR_NAME_NOT_RESOLVED` error points to a network/DNS issue on their end, not a code bug, and that external image hosts might be inaccessible.
3.  **Propose Local Images (If needed):** If Pixabay images also fail to load, propose that the only guaranteed solution is to host images locally within the project, which would require the user to provide suitable image files.
4.  **Verify (User Confirmation):** The user needs to visit the updated website and confirm if Pixabay images are now appearing.
5.  **Commit and Push:** Stage, commit, and push this version to the GitHub repository.
