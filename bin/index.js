#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const commander = require('commander');
const chalk = require('chalk');
let projectName;
const rootDir = path.join(__dirname, '..');
const templateDir = path.join(rootDir, 'template');

  const program = new commander.Command()
  .arguments('<project-directory>')
  .usage(`${chalk.green('<project-directory>')} [options]`)

  .action(name => {
    projectName = name;
  })
  .parse(process.argv);

fs.ensureDirSync(projectName);
const appRoot = path.resolve(projectName);

try {
  fs.copySync(templateDir, appRoot);
  console.log("COPY OK");
} catch (err) {
  console.log(err);
}
