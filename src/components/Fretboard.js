import React from "react";
import { calculateNotes } from "../utils/noteCalculations";

// Sharp to Flat Conversion Map
const sharpToFlat = {
  "A#": "Bb",
  "C#": "Db",
  "D#": "Eb",
  "F#": "Gb",
  "G#": "Ab",
};

// Function to convert sharp notes to flats
const convertToFlat = (note, useFlats) => {
  if (useFlats && sharpToFlat[note]) {
    return sharpToFlat[note]; // Convert sharp notes to flats
  }
  if (useFlats && note.includes("#")) {
    return ""; // Hide sharp notes when flats are selected
  }
  return note; // Otherwise, return the note as is
};

const Fretboard = ({ tuning, selectedScale, numFrets = 12, useFlats }) => {
  const notes = calculateNotes(tuning, numFrets);
  const fretsToLabel = [3, 5, 7, 9, 12]; // Frets that should have labels

  return (
    <div className="fretboard-container">
      <div className="fretboard">
        {tuning
          .slice()
          .reverse()
          .map((stringTuning, stringIndex) => (
            <div key={stringIndex} className="string">
              {Array.from({ length: numFrets }).map((_, fret) => {
                const note = notes[tuning.length - 1 - stringIndex][
                  fret
                ].replace(/\d/, "");
                const convertedNote = convertToFlat(note, useFlats);
                const isInScale =
                  selectedScale?.notes &&
                  selectedScale.notes.some(
                    (scaleNote) => scaleNote.replace(/\d/, "") === note
                  );

                return (
                  <div key={fret} className="fret">
                    {isInScale &&
                      convertedNote && ( // Only show notes if they exist
                        <div className="note-marker">
                          <div className="note-circle">{convertedNote}</div>
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
