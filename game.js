const categories = {
  animals: ["cat", "dog", "giraffe"], /* add more but idk we might needa find some way to get a database*/
  objects: ["table", "ball", "apple"],
  places: ["beach", "castle", "school"],
}


function getPromptByCategory(category) {
  if (categories[category]) {
    const words = categories[category];
    return words[Math.floor(Math.random() * words.length)];
  }
  return null; 
}

module.exports = { getPromptByCategory };