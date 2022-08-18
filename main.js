#!/usr/bin/env node

const fs = require('fs');
const path = require('path')
console.log(path.join(__dirname, './'))

/* fse.copySync(srcDir, path.resolve('../'), function (err) {
  if (err) {                 ^
    console.error(err);      |___{ overwrite: true } // add if you want to replace existing folder or file with same name
  } else {
    console.log("success!");
  }
}); */