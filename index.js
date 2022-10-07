// Functions/Methods

// 1. Count duplicates
// Counts the number of duplicates in an array/string
function countDuplicates() {
  const input = "adsjfdsfsfjsdjfhacabcsbajda";

  let duplicateCount = {};
  const sortedArray = input
    .split("")
    .sort()
    .join("")
    .match(/(.)\1+/g); // regex to group letters by match

  sortedArray.forEach((group) => {
    duplicateCount[group[0]] = group.length;
  });

  console.log("duplicateCount:", duplicateCount);
}

// 2. Sorting Algorithm
// Sorts the array by letter count
function sort() {
  const input = ["You", "are", "beautiful", "looking"];
  letterCountArr = input
    .map((item) => {
      return {
        letterCount: item.length,
        word: item,
      };
    })
    .sort((a, b) => (a.letterCount > b.letterCount ? 1 : -1));
  console.log("letterCountArr:", letterCountArr);
}

// 3. Create Grid
// Coordinate System Algorithm (Spreadsheet or Grid)
function createGrid() {
  const alphabetRows = ["A", "B", "C"];
  const columns = 3;
  const arr = new Array();

  for (let column = 0; column < columns; column++) {
    const row = alphabetRows.map((letter, rowIndex) => {
      return { x: column, y: rowIndex + 1 };
    });

    arr.push(row);
  }

  console.log("arr:", arr);
  return arr;
}
