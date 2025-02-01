import React, { useState } from "react";
import Fretboard from "./components/Fretboard";
import Controls from "./components/Controls";
import { scales, tunings, getScaleNotes } from "./utils/musicData";
import "./App.css";

function App() {
  const [tuning, setTuning] = useState(tunings.standard);
  const [rootNote, setRootNote] = useState("C");
  const [selectedScale, setSelectedScale] = useState(scales[0]);

  const scaleNotes = getScaleNotes(`${rootNote}4`, selectedScale.intervals);

  return (
    <div className="App">
      <h1>Guitar Scale Visualizer</h1>
      <Controls
        selectedScale={selectedScale}
        setSelectedScale={setSelectedScale}
        tuning={tuning}
        setTuning={setTuning}
        rootNote={rootNote}
        setRootNote={setRootNote}
      />
      <Fretboard
        tuning={tuning}
        selectedScale={{ ...selectedScale, notes: scaleNotes }}
      />
    </div>
  );
}

export default App;
