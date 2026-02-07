# Lotto Number Generator

## Overview

This is a simple web application that generates random lottery numbers. It is built with HTML, CSS, and JavaScript, and it uses modern web development practices, including Web Components.

## Detailed Outline: Features and Design

*   **Lotto Number Generation**:
    *   Generates 6 unique random numbers between 1 and 45.
    *   Displays the generated numbers in a visually appealing manner.
    *   A button to trigger the number generation.
*   **Theme Switching (Dark/Light Mode)**:
    *   Allows users to toggle between a light theme and a dark theme.
    *   Remembers the user's last chosen theme using `localStorage`.
    *   Smooth transitions for theme changes.
    *   UI elements (background, text, numbers, buttons) adapt to the selected theme.

## Current Plan

*   **`index.html`**: Set up the basic structure of the application, including a title, a container for the lottery numbers, a button to generate new numbers, and a theme toggle button.
*   **`style.css`**: Style the application with a modern and visually appealing design, including distinct styles for light and dark themes, and smooth transitions.
*   **`main.js`**: Implement the logic for generating and displaying the lottery numbers, and handle theme switching, including loading and saving user preferences.