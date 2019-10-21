export const trimText = (text: string, maxCharacters: number, truncateString = "...", keepFullWords = false) => {
  const trimmedText = text.trim();
  if (trimmedText.length > maxCharacters) {
    if (keepFullWords) {
      let trimmedSentence = "";

      const wordArray = trimmedText.split(" ");

      for (const word of wordArray) {
        const newSentence = `${trimmedSentence} ${word}`;

        if (newSentence.length + truncateString.length < maxCharacters) {
          trimmedSentence = newSentence;
        } else {
          return trimmedSentence.concat(truncateString);
        }
      }
    } else {
      return trimmedText.slice(0, maxCharacters).concat(truncateString);
    }
  }

  return trimmedText;
};
