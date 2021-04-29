# Throttled Animation Frame

An ES6 class to throttle the window.requestAnimationFrame to a specific FPS

## Installation

```bash
yarn add throttled-animation-frame
```
```bash
npm i throttled-animation-frame
```

```javascript
import ThrottledAnimationFrame from 'throttled-animation-frame';

// We pass in the FPS that we would like our animation to run at.
const animator = new ThrottledAnimationFrame(60);

// Then call the .start() method, passing in the function we would like to run on each frame.
animator.start(() => yourFunction());

// Once we would like to stop the animation, simply call
animator.stop();
```

## License
[MIT](https://choosealicense.com/licenses/mit/)

# throttled-animation-frame
