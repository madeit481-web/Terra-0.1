# Project: Terra-0.1

## Overview
This project is a simple web application demonstrating basic HTML, CSS, and JavaScript functionalities. It aims to provide a clean and responsive user interface.

## Project Outline
- **Initial Setup:** Basic `index.html`, `style.css`, and `main.js` for a web page.
- **Dark/Light Mode Feature:**
    - A toggle button in `index.html` to switch between themes.
    - CSS styles defined in `style.css` using CSS variables to manage colors for both dark and light themes.
    - JavaScript logic in `main.js` to handle theme switching, save user preference to `localStorage`, and apply the theme on page load.

## Plan for Current Change: Implement Dark/Light Mode

### Steps:
1.  **Update `index.html`:** Add a theme toggle button.
2.  **Update `style.css`:**
    *   Define CSS variables for colors (e.g., `--text-color`, `--background-color`).
    *   Create a `.dark-mode` class to override these variables for the dark theme.
3.  **Update `main.js`:**
    *   Get references to the theme toggle and the `body` element.
    *   Implement a function to toggle the `dark-mode` class on the `body`.
    *   Add an event listener to the toggle button.
    *   Implement logic to save and load the theme preference using `localStorage`.
    *   Apply the initial theme based on `localStorage` or system preference.
4.  **Verify:** Test the dark/light mode functionality.
5.  **Commit and Push:** Stage, commit, and push the changes to the GitHub repository.
