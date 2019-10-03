const fs = require('fs');
const path = require('path');

const torrentDir = '../data/';
const completeDir = path.join(torrentDir, 'completed');

const workingFilename = {};
const {dirMap} = require('../settings/dir_setting') 

console.log(dirMap)
fs.readdir(completeDir, (err, files) => {
  files.forEach(file => {
    let done = false
    try {
      for (let dir in dirMap) {
        if (dirMap.hasOwnProperty(dir)) {
          if (dirMap[dir].test(file)) {
            if (!workingFilename[file]) {
              fileMove(dir, file)
              done = true
            }
            break;
          }
        }
      }
    } finally {
      if (!done) {
        fileMove(unclassifiedDir, file)
      }
    }
  })
})

function fileMove(dir, file) {
  const fromPath = path.join(completeDir, file);
  const toPath = path.join(dir, file);
  workingFilename[file] = toPath;
  fs.rename(fromPath, toPath, function (err) {
    if (!err)
      console.log(file + ': success');
    else
      console.log(file + ': fail, ' + err);
    setTimeout(function () {
      delete workingFilename[file];
    }, 5000);
  });
}



