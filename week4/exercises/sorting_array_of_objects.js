/*
 * Sorting array of objects
 * ===================================================================
 * Course: Programming 1: Front-End Essentials
 * Week: 4
 * Developed by: Philippe De Pauw - Waterschoot
 * Last updated: 27/09/2020
 * ===================================================================
 */

// Define a library variable with a list of objects (books)
const library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

// Sort the array, sort order based on the author
library.sort(function(obj1, obj2) {
  if (obj1.author > obj2.author) return -1;
  // Place after
  else if (obj1.author < obj2.author) return 1;
  // Place before
  else return 0; // Stay on place within the array
});

console.log(library); // Log the object to the console
