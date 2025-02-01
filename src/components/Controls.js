import React, { useState } from "react";
import { scales, tunings } from "../utils/musicData";

const tuningPresets = {
  "Standard (E)": ["E2", "A2", "D3", "G3", "B3", "E4"],
  "Half Step Down (Eb)": ["Eb2", "Ab2", "Db3", "Gb3", "Bb3", "Eb4"],
  "Full Step Down (D)": ["D2", "G2", "C3", "F3", "A3", "D4"],
  "Drop D": ["D2", "A2", "D3", "G3", "B3", "E4"],
  "Drop C": ["C2", "G2", "C3", "F3", "A3", "D4"],
  "Drop B": ["B1", "F#2", "B2", "E3", "G#3", "C#4"],
  "Open G": ["D2", "G2", "D3", "G3", "B3", "D4"],
  "Open D": ["D2", "A2", "D3", "F#3", "A3", "D4"],
  "Open C": ["C2", "G2", "C3", "G3", "C4", "E4"],
  "Double Drop D": ["D2", "A2", "D3", "G3", "B3", "D4"],
  DADGAD: ["D2", "A2", "D3", "G3", "A3", "D4"],
};

const Controls = ({
  selectedScale,
  setSelectedScale,
  tuning,
  setTuning,
  rootNote,
  setRootNote,
}) => {
  const [selectedPreset, setSelectedPreset] = useState("Standard (E)");

  const handlePresetChange = (e) => {
    const newPreset = e.target.value;
    setSelectedPreset(newPreset);
    setTuning(tuningPresets[newPreset]);
  };

  return (
    <div className="controls">
      <div className="root-scale-container">
        {/* Root Note Selector */}
        <div className="control-group">
          <label htmlFor="rootNote">Root Note:</label>
          <select
            id="rootNote"
            value={rootNote}
            onChange={(e) => setRootNote(e.target.value)}
          >
            {tunings.notes.map((note) => (
              <option key={note} value={note}>
                {note}
              </option>
            ))}
          </select>
        </div>

        {/* Scale Selector */}
        <div className="control-group">
          <label htmlFor="scale">Scale:</label>
          <select
            id="scale"
            value={selectedScale?.name}
            onChange={(e) =>
              setSelectedScale(scales.find((s) => s.name === e.target.value))
            }
          >
            {scales.map((scale) => (
              <option key={scale.name} value={scale.name}>
                {scale.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Tuning Selector (3x2 Grid) */}
      <div className="tuning-container">
        <label name="tuning">Tuning:</label>
        <div className="tuning-select-wrapper">
          {tuning.map((note, i) => {
            const [noteName, octave] = note.match(/([A-G#]+)(\d)/).slice(1);
            return (
              <div key={i} className="tuning-select">
                <select
                  value={noteName}
                  onChange={(e) => {
                    const newTuning = [...tuning];
                    newTuning[i] = `${e.target.value}${octave}`;
                    setTuning(newTuning);
                  }}
                >
                  {tunings.notes.map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
                <select
                  value={octave}
                  onChange={(e) => {
                    const newTuning = [...tuning];
                    newTuning[i] = `${noteName}${e.target.value}`;
                    setTuning(newTuning);
                  }}
                >
                  {tunings.octaves.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>
            );
          })}
        </div>

        {/* Tuning Preset Selector (Below the Manual Tuning) */}
        <div className="control-group">
          <label htmlFor="tuningPreset" name="tuning-preset">
            Tuning Preset:
          </label>
          <select
            id="tuningPreset"
            value={selectedPreset}
            onChange={handlePresetChange}
          >
            {Object.keys(tuningPresets).map((preset) => (
              <option key={preset} value={preset}>
                {preset}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Controls;
