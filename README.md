# CustomHooks (useLocalStorage Hook)
The useLocalStorage custom hook provides a seamless way to interact with localStorage in React applications, managing the state of a variable while ensuring it remains in sync with the stored value. This is particularly useful for persisting user preferences or settings across sessions without the complexity of manually managing local storage in each component.

#### Live Demo - https://aab007209.github.io/CustomHooks

## Screenshots of the Project
#### Initial View of the Project

![img1](https://github.com/user-attachments/assets/ce14e78d-08a7-4517-932c-1ff761eb5b04)

#### When Input is Saved into the Local Storage

![img2](https://github.com/user-attachments/assets/ae30d19e-5875-469e-96b0-690975af60e3)

#### When Input is cleared from the Local Storage

![img3](https://github.com/user-attachments/assets/00c50359-7dc9-4bcc-9295-ee45d30d7aa9)

#### On Refreshing the page after clearing the Local Storage

![img1](https://github.com/user-attachments/assets/ce14e78d-08a7-4517-932c-1ff761eb5b04)

## Learnings from the Project
### 1. **State and Local Storage Synchronization**

- **Purpose:** The custom hook ensures that the state (`value`) is synchronized with the `localStorage`.
- **Functionality Provided:** When the `updateLocalStorage` function is called, it updates both the state and the `localStorage`, ensuring that the data remains consistent. Additionally, the `clearValue` function allows for clearing the `localStorage` and resetting the state, providing a straightforward API for managing data in `localStorage`.

### 2. **useState Hook**

- **Purpose:** The `useState` hook is used to manage state within a functional component. It allows you to declare a state variable (`value` in this case) and a function to update it (`setValue`).
- **Functionality Provided:** It initializes the `value` state with data retrieved from `localStorage` or a specified initial value. This means the component can reactively update when the stored value changes.

### 3. **useCallback Hook**

- **Purpose:** The `useCallback` hook is used to memoize functions so that they don't get recreated on every render unless their dependencies change. This can help optimize performance by preventing unnecessary re-renders.
- **Functionality Provided:**
    - The `updateLocalStorage` function is memoized, ensuring that it only gets recreated if the `key` changes. This function updates the state and `localStorage` only when the new value differs from the current state.
    - The `clearValue` function is also memoized to prevent unnecessary re-creations, allowing efficient clearing of the stored value.

### 4. **Error Handling in getSavedValue**

- **Purpose:** The `getSavedValue` function includes a `try-catch` block to handle potential errors when accessing and parsing data from `localStorage`.
- **Functionality Provided:** If there's an error (e.g., if the stored value is not valid JSON), it logs the error to the console and returns a fallback initial value. This makes the custom hook robust against corrupted or invalid data.

### 5. **Dynamic Initial Value Handling**

- **Purpose:** The custom hook allows the initial value to be a function that returns a value (e.g., `initialValue()`).
- **Functionality Provided:** If the initial value is a function, it will be executed to provide the initial state. This is useful for expensive computations that should only run once when the hook is first used, rather than on every render.
