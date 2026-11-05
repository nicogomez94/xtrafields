export function sentenceCaseLines(lines, language) {
  return lines.map((line, index) => {
    const lower = line.toLocaleLowerCase(language);
    return index === 0
      ? lower.replace(/^\p{L}/u, (letter) => letter.toLocaleUpperCase(language))
      : lower;
  });
}
