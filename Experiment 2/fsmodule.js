
const fs = require('fs');

// CREATE
fs.writeFileSync('sample.txt', 'Hello Node.js!');
console.log("File created successfully");

// READ
let data = fs.readFileSync('sample.txt', 'utf8');
console.log("File content:", data);

// UPDATE
fs.writeFileSync('sample.txt', 'Welcome to File System Module!');
console.log("File updated successfully");

// READ updated content
data = fs.readFileSync('sample.txt', 'utf8');
console.log("Updated content:", data);

// DELETE
fs.unlinkSync('sample.txt');
console.log("File deleted successfully");