const numberSequence = index => {
  if (index < 3) {
    return index - 1;
  }
  return numberSequence(index - 1) + numberSequence(index - 2);
};

module.exports = numberSequence;
