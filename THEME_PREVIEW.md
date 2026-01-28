# Theme Preview Guide

## How to Experience All Themes

### Quick Theme Progression
The game automatically cycles through themes as you level up. Complete objectives to increase your level and unlock new themes:

#### Level Ranges:
- **Levels 1-2**: Night City 🌃
- **Levels 3-4**: Day City ☀️
- **Levels 5-6**: Day Village 🏘️
- **Levels 7-8**: Night Village 🌙
- **Levels 9-10**: Day Forest 🌲
- **Levels 11-12**: Night Forest 🌲🌙
- **Levels 13-14**: Sea 🌊
- **Level 15+**: Mountain ⛰️

### Visual Differences Between Themes

#### Sky Appearance
- **Night City**: Purple/blue night sky with stars
- **Day City**: Bright blue sky
- **Day Village**: Yellow-green daylight
- **Night Village**: Deep indigo night
- **Day Forest**: Green-yellow forest sky
- **Night Forest**: Dark green night sky
- **Sea**: Deep blue with teal tones
- **Mountain**: Gray-white mountain atmosphere

#### Environmental Objects
- **Cities**: Buildings, street lights, windows
- **Villages**: Cottages, lanterns, mountains
- **Forests**: Trees, bushes, fireflies (night)
- **Sea**: Water, islands, light reflections
- **Mountain**: Snow peaks, cabin lights

#### Road & Markers
Each theme has unique road colors and lane marker colors:
- Night City: Cyan markers on dark road
- Day City: Yellow markers on gray road
- Day Village: Yellow markers on brown road
- Night Village: Orange markers on dark road
- Day Forest: Green markers on brown road
- Night Forest: Green markers on very dark road
- Sea: Cyan markers on blue road
- Mountain: Gold markers on gray road

#### UI Color Scheme
All UI elements (buttons, speed meter, HUD) adapt to match the theme:
- Text colors change based on time of day
- Button borders and glows match the environment
- Speed meter shadow colors complement the sky

### Tips for Theme Appreciation

1. **Stop and Look Around**: Each theme has unique background elements
2. **Night Themes**: More dramatic lighting and glowing elements
3. **Day Themes**: Brighter, more natural lighting
4. **Nature Themes**: Dynamic environmental objects (trees, mountains)
5. **Water Theme**: Reflective surfaces and island scenery

### Theme-Specific Challenges

- **Night City**: Speed challenges with city backdrop
- **Day City**: Navigate bright daylight traffic
- **Day Village**: Peaceful but scenic driving
- **Night Village**: Quiet nights with warm lighting
- **Day Forest**: Natural environment, open roads
- **Night Forest**: Mystical night driving with fireflies
- **Sea**: Coastal driving with water views
- **Mountain**: High altitude challenges

### Photo Mode Tips

Each theme offers unique photo opportunities:
- **Night City**: Neon-lit urban landscape
- **Day City**: Busy daytime cityscape
- **Villages**: Cozy countryside scenery
- **Forests**: Natural woodland beauty
- **Sea**: Serene water and island views
- **Mountain**: Majestic peaks and snowy landscape

### Difficulty Progression

The game becomes progressively more challenging:
- Enemies spawn faster at higher levels
- Speed increases with level advancement
- New themes every 2 levels for visual variety
- Complete progression unlocks Mountain theme loop

---

## Current Implementation Details

### How Themes Load
Themes are determined by calculating from the current level:
```
Theme Index = floor((level - 1) / 2) % 8
```

This ensures:
- Level 1-2 → Theme 0 (Night City)
- Level 3-4 → Theme 1 (Day City)
- Level 5-6 → Theme 2 (Day Village)
- And so on...
- After level 15, Mountain theme repeats

### Dynamic Background Recreation
When transitioning to certain levels, the entire 3D environment rebuilds:
- Old objects are removed
- New environmental elements spawn
- Sky gradient updates
- Road colors change
- UI colors adapt

### Performance
- Optimized for smooth gameplay even with many environmental objects
- Efficient material and geometry reuse
- Adaptive quality for mobile devices

---

## Theme Color Palette Reference

### Night City
- Sky: #0a0a1a → #1a1a3e (dark purple to blue)
- Text: Cyan (#00d4ff)
- Road: #1a1a2e
- Accents: Bright cyan

### Day City
- Sky: #87ceeb → #add8e6 (light blue)
- Text: Dark blue
- Road: #505050
- Accents: Orange/yellow lights

### Day Village
- Sky: #ffff88 → #90ee90 (yellow to green)
- Text: Dark amber
- Road: #696969
- Accents: Red roofs, golden lights

### Night Village
- Sky: #191970 → #2f4f4f (indigo to dark slate)
- Text: Orange (#ffa500)
- Road: #2a2a2a
- Accents: Warm orange

### Day Forest
- Sky: #adff2f → #228b22 (lime to forest green)
- Text: Dark green
- Road: #556633
- Accents: Bright green

### Night Forest
- Sky: #191914 → #223e22 (dark to very dark green)
- Text: Lime (#00ff00)
- Road: #1a2a1a
- Accents: Green, fireflies

### Sea
- Sky: #191f70 → #008080 (navy to teal)
- Text: Cyan
- Road: #1a3a4a
- Accents: Cyan reflections

### Mountain
- Sky: #696969 → #c0c0c0 (gray to silver)
- Text: Light gray
- Road: #555555
- Accents: Golden lights

---

Enjoy exploring all 8 unique themed environments! 🎮
