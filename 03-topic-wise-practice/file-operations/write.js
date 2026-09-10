const fs=require('fs');
fs.writeFile('newfile.txt', 'Hello, World!', (err) => {
    if (err) {
        console.log('Error writing file:', err);
        return;
    }
    console.log('File written successfully!');
});