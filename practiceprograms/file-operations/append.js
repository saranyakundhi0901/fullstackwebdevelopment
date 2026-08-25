const fs=require('fs');
fs.appendFile('task.txt','\nThis is new content being appended to the file',(err)=>{
    if(err){
        console.log("Error appending to file:",err);
        return;

    }
console.log("content appended successfully!");
});

