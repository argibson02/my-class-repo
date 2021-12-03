// TODO: What are we importing?
// this is allow node js to read and write to the files on your computer
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()
//  target file ot logtxt, writes process arv[2] to that file, that err fucntion is and error catch
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  err ? console.error(err) : console.log('Commit logged!')
);
