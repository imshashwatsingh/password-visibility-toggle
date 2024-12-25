# Password Visibility Toggle App

This is a simple React-based application that allows users to toggle the visibility of a password input field. The user can switch between "text" and "password" input types using a button, making it easier to view or hide the entered content. Tailwind CSS is used for styling the UI.

## Features

- **Password Visibility Toggle**: Toggle between "text" and "password" types for the input field to show or hide the text.
- **Responsive UI**: Designed with Tailwind CSS for a clean and modern interface.
- **Interactive and Dynamic**: State management using React's `useState` hook.


## Tech Stack

- **React**: Frontend JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.

## Getting Started

Follow these instructions to get a copy of the project running on your local machine.

### Prerequisites

- Node.js installed (>=16.0.0)
- npm package manger

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/imshashwatsingh/password-visibility-toggle.git
   ```

2. Navigate to the project directory:
   ```bash
   cd password-visibility-toggle
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open the app in your browser:
   ```
   http://localhost:5173
   ```

## Project Structure

```
src/
├── App.js           # Main application component
├── index.js         # Entry point of the React app
└── index.css        # Global CSS (includes Tailwind classes)
```

## Code Explanation

### Core Functionalities

1. **State Management**:
   - `isPass` is a boolean state managed using React's `useState` hook.
   - It determines whether the input field is displayed as a password (`type="password"`) or plain text (`type="text"`).

   ```javascript
   const [isPass, setIsPass] = useState(false);
   ```

2. **Toggle Logic**:
   - The `handleClick` function toggles the `isPass` state when the button is clicked.
   - This dynamically changes the `type` attribute of the input field.

   ```javascript
   const handleClick = () => {
     setIsPass((prev) => !prev);
   };
   ```

3. **UI Components**:
   - An `<input>` field for the password or text.
   - A `<button>` to toggle the visibility of the input content.

   ```javascript
   <input
     id="input"
     type={isPass ? "text" : "password"}
     class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
     placeholder="Type something..."
   />
   ```

4. **Styling**:
   - Tailwind CSS classes are used for responsive and visually appealing UI design.

   ```html
   <div class="flex items-center space-x-2 p-4 bg-gray-100 rounded-lg shadow-md">
   ```

## Customization

You can easily customize the app by:
- Changing the button icon (`◓`) to a more descriptive one, such as an "eye" emoji or a FontAwesome icon.
- Modifying Tailwind CSS classes for a different visual theme.
- Adding additional functionality, such as input validation or integration with a form.

## Future Improvements

- Add animations or transitions to the toggle action.
- Support custom icons for "Show" and "Hide" states.
- Include additional accessibility features, such as ARIA attributes.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

Enjoy building with React and Tailwind CSS! Feel free to fork this repository and contribute.

