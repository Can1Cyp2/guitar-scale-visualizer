# Guitar Scale Visualizer 🎸

A React-based web application that helps guitarists visualize scales and tunings on a virtual fretboard.

## Features

- Interactive guitar fretboard display
- Multiple scale selections (Major, Minor Pentatonic, Harmonic Minor, etc.)
- Customizable tuning with preset options (Standard, Drop D, Open G, etc.)
- Root note selection
- Toggle between sharp (♯) and flat (♭) notation
- Responsive design with dark theme

## Prerequisites

- Node.js (v14 or later recommended)
- npm (v6 or later)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/guitar-scale-visualizer.git
```

2. Navigate to the project directory:
```bash
cd guitar-scale-visualizer
```

3. Install dependencies:
```bash
npm install
```

## Usage

1. Start the development server:
```bash
npm start
```

2. Open your browser and visit `http://localhost:3000`

## Project Structure

```
guitar-scale-visualizer/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Controls.js
│   │   └── Fretboard.js
│   ├── utils/
│   │   ├── musicData.js
│   │   └── noteCalculations.js
│   ├── App.js
│   └── App.css
├── package.json
└── README.md
```

## Components

- `App.js`: Main application component managing state and rendering
- `Controls.js`: Handles user input for tuning, scale, and root note
- `Fretboard.js`: Displays the interactive fretboard visualization
- `musicData.js`: Contains musical data (scales, tunings, notes)
- `noteCalculations.js`: Calculates fretboard notes based on tuning

## Customization

- Add new scales in `src/utils/musicData.js` by extending the `scales` array
- Add new tuning presets in `src/components/Controls.js` in the `tuningPresets` object
- Modify styles in `src/App.css`

## Future Improvements

- Add capo functionality
- Implement fretboard position markers
- Add sound playback for notes
- Include chord visualization
- Add export/print functionality

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss your proposed changes.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a pull request

## Acknowledgments

- Built with [React](https://reactjs.org/)
- Inspired by guitarists' need for scale visualization