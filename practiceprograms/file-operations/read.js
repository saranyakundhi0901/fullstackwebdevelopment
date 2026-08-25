const fs = require('fs');

fs.readFile('task.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('Error reading file:', err);
        return;
    }

    console.log('File content:');
    console.log(data);
});