const vowels = ["a", "e", "i", "o", "u"];

const btn = document.getElementById("submit");
btn.addEventListener("click", () => {
  let counter = 0;
  document.getElementById("vowelstext").innerText = "";
  let valueOfText = document.getElementById("text").value;
  valueOfText = valueOfText.toLowerCase();
  let words = [];
  for (let i = 0; i < valueOfText.length; i++) {
    let letters = valueOfText[i];
    words.push(letters);
  }
  words.forEach(word => {
    vowels.forEach(vowel => {
      if (word == vowel) {
        counter++;
        document.getElementById("vowelstext").innerText += vowel;
      }
    });
    document.getElementById("count").innerText = counter;
  });
});
