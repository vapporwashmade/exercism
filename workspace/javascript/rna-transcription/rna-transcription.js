//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const dnaToRna = {
  G: "C",
  C: "G",
  A: "U",
  T: "A"
};

export const toRna = (dna_strand) => {
  return dna_strand.split('').map(n => dnaToRna[n]).join('');
};