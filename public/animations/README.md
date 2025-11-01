# Rive Animations

Place your `.riv` animation files in this directory.

## How to get Rive animations:

1. **Create your own**: Visit [rive.app](https://rive.app) to create custom animations
2. **Use community files**: Browse the [Rive Community](https://rive.app/community/) for free animations
3. **Download examples**: Get started with sample animations from Rive's resources

## Usage:

Once you have a `.riv` file, place it in this folder and reference it in your React components:

```jsx
import RiveAnimation from '../components/RiveAnimation';

<RiveAnimation 
  src="/animations/your-animation.riv"
  autoplay={true}
  style={{ width: '400px', height: '400px' }}
/>
```

