export function generate() {
  const quotes = [
    {
      author: "Albus Dumbledore",
    },
    {
      author: "Horace Slughorn",
    },
    {
      author: "Luna Lovegood",
    },
    {
      author: "Sirius Black",
    },
    {
      author: "Arthur Weasley",
    },
    {
      author: "Kingsley Shacklebolt",
    },
    {
      author: "Minerva McGonagall",
    },
    {
      author: "Albus Dumbledore",
    },
    {
      author: "Dobby",
    },
  ];

  let arrayIndex = Math.floor(Math.random() * quotes.length);
  return quotes[arrayIndex].author;
}

export function generateString() {
  const quotes = [
    {
      quote:
        "Do not pity the dead, Harry. Pity the living, and, above all those who live without love.",
    },
    {
      quote: "It is impossible to manufacture or imitate love",
    },
    {
      quote:
        "Being different isn't a bad thing. I means that you are brave enough to be yourself.",
    },
    {
      quote:
        "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.",
    },
    {
      quote:
        "Never trust anything that can think for itself if you can’t see where it keeps its brain.",
    },
    {
      quote: "Every human life is worth the same, and worth saving.",
    },
    {
      quote: "Have a biscuit, Potter.",
    },
    {
      quote:
        "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
    },
    {
      quote: "Socks are Dobby’s favorite, favorite clothes, sir!",
    },
  ];

  let arrayIndex = Math.floor(Math.random() * quotes.length);
  return quotes[arrayIndex].quote;
}
