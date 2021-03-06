// 1. Object
const nodejs = {
  name: 'Node.js',
  type: 'JavaScript runtime environment',
};

// TODO: Destructure the object 'nodejs'

console.log(nodejs.name); // <= Node.js
console.log(nodejs.type); // <= JavaScript runtime environment


const {myname, type} = nodejs   

console.log(myname);
console.log(type);


// 2. Nested Object
const js = {
  name: 'JavaScript',
  type: 'programming language',
  version: 'ES6',
  tools: {
    frameworks: {
      framework1: 'AngularJS',
      framework2: 'Vue.js',
    },
    libraries: {
      library1: 'jQuery',
      library2: 'React',
    },
  },
};

// TODO: Destructure the nested object 'js'

const {name:jsname, type:jstype, version:jsversion, tools: jstools} = js
const {frameworks: jsframeworks} = jstools
const {framework1: jsframework1, framework2: jsframework2} = jsframeworks 

console.log(js);


console.log(framework1); // <= AngularJS
console.log(framework2); // <= Vue.js


// 3. Arrays
const languages = ['HTML', 'CSS', 'JavaScript'];

// TODO: Destructure the array 'languages'

console.log(markup, style, scripting); // <= HTML CSS JavaScript
console.log(markup); // <= HTML
