# Rive Animation Integration Guide

Rive animations have been successfully integrated into your Facto website! 🎉

## What's Been Set Up

1. ✅ **Rive React Package** - `@rive-app/react-canvas` installed
2. ✅ **RiveAnimation Component** - Reusable component at `src/components/RiveAnimation.jsx`
3. ✅ **Animations Folder** - `public/animations/` directory for your `.riv` files

## How to Use Rive Animations

### Step 1: Get a Rive Animation File

You have several options:

1. **Create your own** at [rive.app](https://rive.app) (free account available)
2. **Browse community animations** at [Rive Community](https://rive.app/community/)
3. **Download examples** from Rive's resources

### Step 2: Add the .riv File

Place your `.riv` file in the `public/animations/` folder. For example:
- `public/animations/hero-animation.riv`
- `public/animations/loading-spinner.riv`
- `public/animations/logo-animation.riv`

### Step 3: Use in Your Components

#### Basic Usage

```jsx
import RiveAnimation from '../components/RiveAnimation';

function MyComponent() {
  return (
    <RiveAnimation 
      src="/animations/your-animation.riv"
      style={{ width: '400px', height: '400px' }}
    />
  );
}
```

#### With State Machine (Interactive Animations)

```jsx
<RiveAnimation 
  src="/animations/interactive-button.riv"
  stateMachines="State Machine 1"
  autoplay={true}
  style={{ width: '300px', height: '300px' }}
/>
```

#### With Custom Styling

```jsx
<RiveAnimation 
  src="/animations/hero-animation.riv"
  className="hero-animation"
  style={{ 
    width: '100%', 
    height: '500px',
    maxWidth: '800px',
    margin: '0 auto'
  }}
/>
```

#### With Load Callback

```jsx
<RiveAnimation 
  src="/animations/logo.riv"
  onLoad={(rive) => {
    console.log('Animation loaded!', rive);
  }}
  style={{ width: '200px', height: '200px' }}
/>
```

## Example Integration Ideas

### 1. Hero Section Animation

Add to `src/pages/Home.jsx`:

```jsx
import RiveAnimation from '../components/RiveAnimation';

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          {/* Add animation above or beside the title */}
          <RiveAnimation 
            src="/animations/hero-animation.riv"
            style={{ width: '300px', height: '300px', margin: '0 auto 2rem' }}
          />
          <h1>Learn Something New Every Day</h1>
          <p>We create engaging mobile applications...</p>
          <a href="#projects" className="cta-button">Explore Our Projects</a>
        </div>
      </section>
      {/* rest of your content */}
    </>
  );
}
```

### 2. Animated Logo

Replace the emoji in `src/pages/Facto.jsx`:

```jsx
import RiveAnimation from '../components/RiveAnimation';

function Facto() {
  return (
    <div className="container">
      <div className="app-header">
        {/* Replace the emoji with a Rive animation */}
        <div className="app-icon-large">
          <RiveAnimation 
            src="/animations/facto-logo.riv"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <h1 className="app-title">Facto</h1>
        {/* rest of your content */}
      </div>
    </div>
  );
}
```

### 3. Loading Animation

Create a loading component:

```jsx
import RiveAnimation from './RiveAnimation';

function LoadingSpinner() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
      <RiveAnimation 
        src="/animations/loading.riv"
        style={{ width: '100px', height: '100px' }}
      />
    </div>
  );
}

export default LoadingSpinner;
```

### 4. Project Card Animations

Add animations to project cards in `src/pages/Home.jsx`:

```jsx
<div className="project-card">
  <RiveAnimation 
    src="/animations/project-icon.riv"
    style={{ width: '80px', height: '80px', marginBottom: '1rem' }}
  />
  <h3>Facto</h3>
  <p>Discover fascinating facts...</p>
</div>
```

## Component Props Reference

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `src` | string | Yes | - | Path to .riv file (relative to public folder) |
| `stateMachines` | string | No | - | Name of state machine to use |
| `autoplay` | boolean | No | true | Whether to autoplay the animation |
| `style` | object | No | {} | Inline styles for the container |
| `className` | string | No | '' | CSS class name for the container |
| `onLoad` | function | No | - | Callback when animation loads |

## Styling Tips

Add custom styles in your CSS files:

```css
/* In src/index.css or src/App.css */
.rive-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-animation {
  border-radius: 20px;
  overflow: hidden;
}

/* Make animations responsive */
.rive-container canvas {
  max-width: 100%;
  height: auto;
}
```

## Popular Rive Animation Use Cases

1. **Hero Animations** - Eye-catching animations in your hero section
2. **Loading States** - Smooth loading spinners and progress indicators
3. **Interactive Buttons** - Buttons that react to hover/click
4. **Animated Icons** - Dynamic icons that bring life to your UI
5. **Illustrations** - Animated illustrations for features/benefits
6. **Mascots** - Animated characters that guide users
7. **Background Effects** - Subtle animated backgrounds

## Resources

- 📚 [Rive Documentation](https://help.rive.app/)
- 🎨 [Rive Community](https://rive.app/community/)
- 🎓 [Rive Tutorials](https://rive.app/resources/)
- 💻 [React Runtime Docs](https://help.rive.app/runtimes/overview/react)

## Troubleshooting

### Animation not showing?
- Check that the `.riv` file path is correct
- Ensure the file is in the `public/animations/` folder
- Check browser console for errors

### Animation too large/small?
- Adjust the `width` and `height` in the `style` prop
- Use percentage values for responsive sizing

### Animation not playing?
- Ensure `autoplay={true}` is set
- Check if the animation has a state machine that needs to be specified

## Next Steps

1. Visit [rive.app](https://rive.app) to create or download animations
2. Place your `.riv` files in `public/animations/`
3. Import and use the `RiveAnimation` component in your pages
4. Customize the styling to match your design

Happy animating! 🎨✨

