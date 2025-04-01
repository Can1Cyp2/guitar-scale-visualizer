export const tunings = {
  standard: ["E2", "A2", "D3", "G3", "B3", "E4"],
  notes: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
  octaves: [1, 2, 3, 4, 5, 6],
};

export const scales = [
  {
    name: "Major",
    intervals: [2, 2, 1, 2, 2, 2, 1],
  },
  {
    name: "Minor Pentatonic",
    intervals: [3, 2, 2, 3, 2],
  },
  {
    name: "Harmonic Minor",
    intervals: [2, 1, 2, 2, 1, 3, 1],
  },
  {
    name: "Melodic Minor",
    intervals: [2, 1, 2, 2, 2, 2, 1],
  },
  {
    name: "Natural Minor",
    intervals: [2, 1, 2, 2, 1, 2, 2],
  },
  {
    name: "Pentatonic Major",
    intervals: [2, 2, 3, 2, 3],
  },
];

export const getScaleNotes = (rootNoteWithOctave, intervals) => {
  const allNotes = [];
  const notes = tunings.notes;
  const rootParts = rootNoteWithOctave.match(/([A-G#]+)(\d)/);
  let currentNote = rootParts[1];
  let currentOctave = parseInt(rootParts[2]);

  let currentIndex = notes.indexOf(currentNote);

  allNotes.push(`${currentNote}${currentOctave}`);

  intervals.forEach((interval) => {
    currentIndex += interval;
    while (currentIndex >= notes.length) {
      currentIndex -= notes.length;
      currentOctave++;
    }
    currentNote = notes[currentIndex];
    allNotes.push(`${currentNote}${currentOctave}`);
  });

  return allNotes;
};
