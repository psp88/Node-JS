// npm - global command, comes with node
// npm --version

// local dependancy - use it only in this particular project
// npm i <packageName>
// npm uninstall <packageName>

// global dependancy - use it in any project
// npm install -g <packageNmae>

// package.json - manifest file (stores imp. info about project/package)
// manual approach (create package.json in the root , create properties etc)
// npm init (step by step)
// npm init -y (everything default)

// just do npm install and the dependencies in the package.json will be automatically installed


const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newitems = _.flattenDeep(items)
console.log(newitems);
console.log("hello people");

// npm run script_name to run the command for nodemon
// nodemon instead of node used to not every time to do the command to run the code 
// while nodemon do it automatically instead of node

// npm uninstall packagename
