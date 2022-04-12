const sentence = "hello there from lighthouse labs";

// split the string into characters
sentence.split("").forEach((char, index) => {
  // print each character individually. Timer is based on the index of the string array.
  setTimeout(() => process.stdout.write(char), index * 50);
  if (index === sentence.length - 1) {
    // if at the end of string, print a new line.
    setTimeout(() => process.stdout.write('\n'), (index + 1) * 50);
  }
});

