function changeWord(selectedText, changedText, text) {
  const newText = text.replace(selectedText , changedText);
  return newText;
}

const kalimat1 = "Aya sangat mencintai kamu selamanya";
const kalimat2 = "Gunung semeru tak akan mampu menggambarkan besarnya cintaku padamu";

console.log(changeWord("mencintai", "membenci", kalimat1));

console.log(changeWord("semeru", "anak krakatau", kalimat2));
