// noteCalculations.js
import { tunings } from "./musicData";

export const calculateNotes = (tuning, numFrets, capoFret = 0) => {
  return tuning.map((stringTuning) => {
    const stringNotes = [];
    const rootNote = stringTuning.replace(/[0-9]/g, "");
    const octave = parseInt(stringTuning.match(/[0-9]/)[0]);
    let currentOctave = octave;
    const notes = tunings.notes;
    let currentIndex = notes.indexOf(rootNote);

    // Apply capo offset
    currentIndex = (currentIndex + capoFret) % notes.length;
    if (capoFret > 0 && currentIndex < notes.indexOf(rootNote)) {
      currentOctave++;
    }

    for (let fret = 0; fret < numFrets; fret++) {
      stringNotes.push(notes[currentIndex] + currentOctave);
      currentIndex = (currentIndex + 1) % notes.length;
      if (currentIndex === 0) currentOctave++;
    }

    return stringNotes;
  });
};