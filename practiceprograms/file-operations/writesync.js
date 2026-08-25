const fs = require('fs');

try {
    fs.writeFileSync('task.txt', 'Hello, this is new content.');

    console.log('File written successfully.');
} catch (err) {
    console.log('Error:', err);
}