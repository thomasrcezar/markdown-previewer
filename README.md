# Markdown Previewer

## Project Overview
The Markdown Previewer is a web application that allows users to enter Markdown text and see a real-time preview of the rendered HTML. This tool is particularly useful for writers and developers who need to quickly see how their Markdown will appear in HTML format. Built with React and styled using Bootstrap, this project demonstrates the power of real-time web technologies.

## Features
- **Real-Time Markdown Editing**: Users can type Markdown into a textarea and see the HTML preview update as they type.
- **Full Markdown Support**: The application uses the Marked library to convert Markdown to HTML, supporting a wide range of Markdown syntax.
- **Responsive Design**: Utilizes Bootstrap for styling to ensure the application is usable on all devices.

## Technologies Used
- HTML
- CSS
- JavaScript
- [React](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [Marked](https://marked.js.org/)

## User Stories
This app fulfills the following user stories:
1. **Editor View**: I can see a `textarea` element with a corresponding `id="editor"`.
2. **Preview View**: I can see an element with a corresponding `id="preview"`.
3. **Synced Preview**: When I enter text into the `#editor` element, the `#preview` element is updated as I type to display the content of the textarea.
4. **Markdown to HTML**: When I enter GitHub flavored markdown into the `#editor` element, the text is rendered as HTML in the `#preview` element as I type.
5. **Default Markdown Text**: When my markdown previewer first loads, the default text in the `#editor` field should contain valid markdown that represents at least one of each of the following elements: a heading element (H1 size), a sub-heading element (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.
6. **Default Preview Content**: When my markdown previewer first loads, the default markdown in the `#editor` field should be rendered as HTML in the `#preview` element.

## Setup and Installation
To set up this project locally, follow these steps:
1. Clone the repository:
    https://github.com/thomasrcezar/markdown-previewer.git
2. Navigate to the project directory:
    cd markdown-previewer
3. Install the necessary dependencies:
    npm install
4. Start the application:
    npm start
5. Open `http://localhost:3000` in your browser to view the app.

## Contribution
Contributions are welcome! If you have suggestions or improvements, please fork the repository and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

## License
Distributed under the MIT License. See `LICENSE` for more information.
