# ContricReaction

ContricReaction is a React component that creates concentric circles that revolve around and follow the mouse pointer. This component is customizable and can be easily integrated into any React application.

## Features

- Customizable number of circles
- Adjustable size and color of circles
- Rotation speed control
- Option to follow mouse pointer
- Pulsing effect for visual enhancement

## Installation

To use the ContricReaction component in your project, you can install it via npm:

```bash
npm install contric-reaction
```

## Usage

Here is a basic example of how to use the ContricReaction component in your React application:

```tsx
import React from 'react';
import ContricReaction from 'contric-reaction';

const App = () => {
  return (
    <div>
      <h1>Welcome to ContricReaction</h1>
      <ContricReaction 
        circleCount={5}
        maxSize={100}
        color="rgba(0, 0, 255, 0.3)"
        rotationSpeed={1}
        followPointer={true}
        followDelay={100}
        enablePulse={true}
      />
    </div>
  );
};

export default App;
```

## Props

| Prop            | Type     | Default Value | Description                                      |
|-----------------|----------|---------------|--------------------------------------------------|
| circleCount     | number   | 5             | Number of concentric circles to display          |
| maxSize         | number   | 100           | Base size of the largest circle in pixels        |
| color           | string   | 'rgba(0, 0, 255, 0.3)' | Color of the circles                          |
| rotationSpeed   | number   | 1             | Speed of the rotation animation                  |
| followPointer    | boolean  | true          | Whether to follow the mouse pointer              |
| followDelay     | number   | 100           | Delay in milliseconds for the follow effect      |
| enablePulse     | boolean  | true          | Whether to enable the pulsing effect             |

## Examples

You can find examples of how to use the ContricReaction component in the `examples/basic` directory. The `index.html` and `index.tsx` files demonstrate its functionality in a simple web page.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.