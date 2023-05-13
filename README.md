# Pet Adoption Web

A complete, delicate React-based Single Page Application (SPA) with a simple backend.

## Description

This project is a pet adoption website model that includes various pages and features. It is built using React and designed to provide a seamless user experience.

## Accessibility Features

- Utilization of semantic HTML elements where appropriate.
- All foreground images have descriptive and accurate `alt` attributes.
- Pages remain readable and usable when zoomed in up to 200%.
- All controls and form fields are accessible and usable via both keyboard and mouse.
  - The skip link is accessible through the keyboard.
- A skip link is provided to navigate to the main content.
- All form fields are properly associated with the corresponding `<label>` element.
- Any controls have accessible text descriptions, such as button text, associated `<label>` elements, or `aria-label` attributes.
  - Error messages are not included as part of the label text.
- Animation or transition CSS is placed within a media query to block motion for users who prefer reduced motion.

## Features

This web application includes the following features without using external libraries:

1. Adaptive "Hamburger Menu":
   - A menu that is visible at larger viewport sizes but replaced with a dropdown menu at smaller viewport sizes.

2. Accordions.

3. Cards or Panels:
   - Groups of visually combined images and text.

4. Carousel:
   - Displays images, showing one at a time.

5. Filterable and Sortable Gallery:
   - A gallery that can be filtered or sorted to change the displayed items.

6. Complex Form Interaction:
   - Two select dropdowns where the selection in the first changes the options for the second.

7. Modal Form:
   - A modal form that modifies data shown in the application.

## Server Functionality

This web application includes a server that writes the modal form data into JavaScript.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

  ```
   git clone https://github.com/your/repository.git
  ```

2. Install the dependencies:
```
 cd repository
 npm install
```

3. Start the development server:
```
 npm start
```

4. Open your web browser and visit http://localhost:3000 to access the application.

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to contribute to this project by creating pull requests or reporting issues.

Enjoy exploring and interacting with our pet adoption website!
