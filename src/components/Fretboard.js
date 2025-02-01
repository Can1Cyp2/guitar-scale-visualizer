import React from "react";
import { calculateNotes } from "../utils/noteCalculations";

const Fretboard = ({ tuning, selectedScale, numFrets = 12 }) => {
  const notes = calculateNotes(tuning, numFrets);
  const fretsToLabel = [3, 5, 7, 9, 12]; // Frets that should have labels

  return (
    <div className="fretboard-container">
      <div className="fretboard">
        {tuning.map((stringTuning, stringIndex) => (
          <div key={stringIndex} className="string">
            {Array.from({ length: numFrets }).map((_, fret) => {
              const note = notes[stringIndex][fret];
              const isInScale = selectedScale?.notes.some(
                (scaleNote) =>
                  scaleNote.replace(/\d/, "") === note.replace(/\d/, "")
              );

              return (
                <div key={fret} className="fret">
                  {isInScale && (
                    <div className="note-marker">
                      <div className="note-circle">
                        {note.replace(/\d/, "")}
                      </div>
                    </div>
                  )}
                  {/* Only display fret numbers on the bottom row */}
                  {fretsToLabel.includes(fret) &&
                    stringIndex === tuning.length - 1 && (
                      <span className="fret-number">{fret}</span>
                    )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fretboard;
