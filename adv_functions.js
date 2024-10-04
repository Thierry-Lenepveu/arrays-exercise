// Given an array of names of people but mixing lower case and upper case letters, you will have to:
// - Create a function that contains the logic to refactor those names so it converts a name like `anTHoNY` to `Anthony`.
// - A function that accepts two parameters: an array and a callback function that is in charge of refactoring all items inside that array
// - Return the original array but with all names properly typed

function refactor_names(arrayOfNames, transforName) {
    return arrayOfNames.map(transforName).slice();
}

const people = ['JoHn', 'ChrISTiana', 'anThoNY', 'MARia', 'jaMeS', 'MIChaEl', 'jeNNIFeR'];

let refactoredNames = refactor_names(people, (originalName) =>
    originalName.slice(0, 1).toUpperCase() + originalName.slice(1).toLowerCase()
);

console.log(refactoredNames);
