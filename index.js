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
  const alphabetColumns = ["A", "B", "C"];
  const numberRows = [1, 2, 3];
  // const numberRows = [...Array(10).keys()] // create array of numbers from 0 to 9
  // const alphabetColumns = [...Array(26)].map((_, i) => String.fromCharCode(i + 97)); // create array of letters from a to z
  const grid = new Array();

  for (let column = 0; column < alphabetColumns.length; column++) {
    const row = numberRows.map((number, rowIndex) => {
      return { column: alphabetColumns[column], row: rowIndex + 1 };
    });

    grid.push(row);
  }

  console.log("grid:", grid);
  return grid;
}

createGrid();
