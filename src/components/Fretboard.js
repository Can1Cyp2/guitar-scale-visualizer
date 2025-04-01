// Fretboard.js
import React from "react";
import { calculateNotes } from "../utils/noteCalculations";

const sharpToFlat = {
  "A#": "Bb",
  "C#": "Db",
  "D#": "Eb",
  "F#": "Gb",
  "G#": "Ab",
};

const convertToFlat = (note, useFlats) => {
  if (useFlats && sharpToFlat[note]) {
    return sharpToFlat[note];
  }
  if (useFlats && note.includes("#")) {
    return "";
  }
  return note;
};

const Fretboard = ({ tuning, selectedScale, numFrets = 12, useFlats, capoFret }) => {
  const notes = calculateNotes(tuning, numFrets, capoFret);
  const fretsToLabel = [3, 5, 7, 9, 12];

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
                      convertedNote && (
                        <div className="note-marker">
                          <div className="note-circle">{convertedNote}</div>
                        </div>
                      )}
                    {fretsToLabel.includes(fret) &&
                      stringIndex === tuning.length - 1 && (
                        <span className="fret-number">{fret}</span>
                      )}
                    {fret === capoFret && stringIndex === 0 && (
                      <div className="capo-marker">Capo</div>
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