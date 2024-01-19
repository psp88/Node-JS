const { readFile } = require('fs')

console.log('first path started');
// CHECK FILE PATH
readFile('./content/first.txt' , 'utf8', (err,result) => {
    if(err){
        console.log(err);
        return
    }
    console.log(result);
    console.log('first part done');
})
console.log('start next part');
