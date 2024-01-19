setInterval(()=> {
    console.log('hello peeps');
},1000)  // 1000 == after each sec it will execute again
// asynch will get offloaded and execute only when all sync gets executed

console.log('first run');
// process stays alive until kill it with ctrl+c

