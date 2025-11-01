# How to Add Learning-Themed Rive Animations to Your Facto Website

Your website is now set up with Rive animation support! Currently, it's using animated emoji placeholders. Here's how to replace them with professional Rive animations that match your learning/facts theme.

## 🎯 Recommended Animation Themes for Facto

Since Facto is about learning fun facts and knowledge, look for animations related to:

- 💡 **Lightbulbs** (ideas, discovery, learning moments)
- 📚 **Books** (reading, knowledge, education)
- 🧠 **Brain** (thinking, intelligence, learning)
- ⭐ **Stars/Sparkles** (discovery, wonder, excitement)
- 🎓 **Graduation/Education** (learning, achievement)
- 🔍 **Magnifying Glass** (discovery, exploration)
- 📖 **Open Book** (reading, facts)
- 💭 **Thought Bubbles** (ideas, thinking)
- 🌟 **Glowing Effects** (eureka moments)

## 📥 Where to Find Rive Animations

### Option 1: Rive Community (Free)

1. **Visit the Rive Marketplace**
   - Go to [https://rive.app/marketplace/](https://rive.app/marketplace/)
   - Create a free account if you don't have one

2. **Search for Themed Animations**
   - Use search terms like:
     - "lightbulb"
     - "book"
     - "brain"
     - "education"
     - "learning"
     - "idea"
     - "knowledge"
     - "star"
     - "sparkle"

3. **Download the Animation**
   - Click on an animation you like
   - Click the "Download" or "Get" button
   - Save the `.riv` file

### Option 2: Create Your Own

1. **Visit [rive.app](https://rive.app)**
2. **Sign up for a free account**
3. **Use the Rive Editor** to create custom animations
4. **Export as `.riv` file**

### Option 3: Hire a Designer

- Browse "For Hire" creators on the Rive Marketplace
- Commission a custom animation that perfectly matches your brand

## 🔧 How to Add Your Animations

### Step 1: Place the .riv File

Once you have your `.riv` file, place it in the `public/animations/` folder:

```
public/
  animations/
    lightbulb-hero.riv       ← Your hero animation
    facto-icon.riv           ← Your app icon animation
```

### Step 2: Update Home Page (Hero Section)

Open `src/pages/Home.jsx` and replace the placeholder:

**Current (placeholder):**
```jsx
<div className="hero-icon-animated">💡</div>
```

**Replace with:**
```jsx
<RiveAnimation 
  src="/animations/lightbulb-hero.riv"
  className="hero-animation"
  style={{ 
    width: '100%', 
    maxWidth: '400px', 
    height: '300px', 
    margin: '0 auto 2rem' 
  }}
/>
```

### Step 3: Update Facto Page (App Icon)

Open `src/pages/Facto.jsx` and replace the placeholder:

**Current (placeholder):**
```jsx
<div className="app-icon-large">💡</div>
```

**Replace with:**
```jsx
<div className="app-icon-large">
  <RiveAnimation 
    src="/animations/facto-icon.riv"
    style={{ width: '100%', height: '100%' }}
  />
</div>
```

## 🎨 Specific Animation Suggestions

Here are some specific searches that should work well for Facto:

### For Hero Section (Home Page)
- **"lightbulb animation"** - Perfect for the "learn something new" theme
- **"book opening"** - Great for knowledge/learning
- **"brain thinking"** - Shows intelligence and learning
- **"stars sparkle"** - Conveys wonder and discovery

### For Facto App Icon
- **"lightbulb icon"** - Matches your current emoji
- **"idea bulb"** - Animated lightbulb that glows
- **"knowledge icon"** - Abstract learning symbol
- **"fact icon"** - Simple, clean icon animation

### For Project Cards (Optional)
You can also add small animations to the project cards on the home page:

```jsx
<div className="project-card">
  <RiveAnimation 
    src="/animations/small-icon.riv"
    style={{ width: '80px', height: '80px', marginBottom: '1rem' }}
  />
  <h3>Facto</h3>
  <p>Discover fascinating facts...</p>
</div>
```

## 💡 Pro Tips

### 1. Keep File Sizes Small
- Rive animations are typically very small (5-50KB)
- But check file size - aim for under 100KB for web

### 2. Test Interactivity
- Some Rive animations have interactive state machines
- Test hover effects, click interactions, etc.
- Use the `stateMachines` prop if needed:

```jsx
<RiveAnimation 
  src="/animations/interactive-button.riv"
  stateMachines="Hover"
  style={{ width: '200px', height: '200px' }}
/>
```

### 3. Match Your Brand Colors
- When creating or choosing animations, look for ones with purple tones
- Your brand colors: `#8b5cf6` (primary), `#7c3aed` (secondary)
- Many Rive animations allow color customization

### 4. Consider Animation Speed
- Make sure animations aren't too fast or distracting
- Hero animations should be subtle and smooth
- Icon animations can be more playful

## 🚀 Quick Start Example

If you want to test quickly, here's a complete example:

1. **Download any lightbulb animation** from Rive Marketplace
2. **Save it as** `public/animations/hero-lightbulb.riv`
3. **Update** `src/pages/Home.jsx`:

```jsx
import { Link } from 'react-router-dom'
import RiveAnimation from '../components/RiveAnimation'

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <RiveAnimation 
            src="/animations/hero-lightbulb.riv"
            className="hero-animation"
            style={{ 
              width: '100%', 
              maxWidth: '400px', 
              height: '300px', 
              margin: '0 auto 2rem' 
            }}
          />
          <h1>Learn Something New Every Day</h1>
          {/* rest of content */}
        </div>
      </section>
      {/* rest of page */}
    </>
  )
}
```

4. **Save and refresh** - your animation should appear!

## 🎬 Current Status

✅ Rive integration is complete and working
✅ Animated emoji placeholders are in place
⏳ Waiting for you to add themed `.riv` files

The website currently uses CSS-animated emoji (💡) as placeholders. These look good and are on-theme, but Rive animations will make your site even more professional and engaging!

## 📚 Resources

- [Rive Marketplace](https://rive.app/marketplace/) - Browse animations
- [Rive Editor](https://rive.app/) - Create your own
- [Rive Documentation](https://help.rive.app/) - Learn more
- [React Runtime Docs](https://help.rive.app/runtimes/overview/react) - Technical details

## ❓ Need Help?

If you have questions about:
- Finding the right animation
- Customizing animations
- Technical integration issues

Feel free to ask! The Rive community is also very helpful on their forums.

---

**Happy animating! 🎨✨**

