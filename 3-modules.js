// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// ./ for module made by us and no dot for built in modules

const names = require('./4-names')
const sayHi = require('./5-utlis')
const data = require('./6-alternate-flavor')

require('./7-mind-grenade') // no  console req as in 7-mind-grenade it already call the function there itself
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)