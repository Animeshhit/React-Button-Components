# React Button Components

React Button Components are reusable, interactive user interface (UI) elements that can be easily integrated into any React application. These components are designed to provide a consistent and intuitive user experience across different platforms and devices.

## Features

The React Button Components provide the following features:

- Customizable styles: The buttons can be styled according to the application's design requirements.
- Event handling: The buttons can handle various events, such as click, hover, and focus.
- Flexibility: The buttons can be used in different contexts, such as forms, navigation, and modals.

## Usage

To use the React Button Components, simply import the component and add it to your React component:

```javascript
import React from "react";
import Button from "./components/Button";

function MyComponent() {
  return (
    <div>
      <Button
        color="primary"
        size="md"
        onClick={() => console.log("Button clicked")}
      />
    </div>
  );
}
```

## Props

The React Button Components support the following props:

- `variant`:The variant of the button. Possible values are `filled`,`outline` and `text`.
- `color`: The color of the button. Possible values are `default`, `primary`, `secondary` and `danger`.
- `size`: The size of the button. Possible values are `sm`, `md`, and `lg`.
- `disabled`: Whether the button is disabled.
- `onClick`: The function to be called when the button is clicked.
- `disableShadow`:hides The shadows

## Conclusion

In conclusion, the React Button Components provide a simple and efficient way to add interactive buttons to your React application. With their customizable styles, accessibility, event handling, and flexibility, they can help you create a consistent and intuitive user experience for your users.
