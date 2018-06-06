'use strict';

const path = require('path');
const fs = require('fs-extra');
const root = process.cwd();
const rootSrc = path.join(root, 'package.json');
const rootPackage = require(rootSrc);
const lib = 'angular-keyboard-nav';
const libSrc = path.join(root, 'dist', lib, 'package.json');
const libPackage = require(libSrc);

updatePackage();
copyFiles();

/**
 * Migrate needed package.json properties to project dist.
 */
function updatePackage() {
  const properties = [
    'author',
    'bugs',
    'description',
    'homepage',
    'keywords',
    'license',
    'repository',
    'version'
  ];

  properties.forEach(key => {
    if (!libPackage[key] && rootPackage[key]) {
      libPackage[key] = rootPackage[key];
    }
  });

  fs.writeJsonSync(libSrc, libPackage, { spaces: 2 });
}

/**
 * Copy needed files to the project dist folder.
 */
function copyFiles() {
  const files = [
    'README.md'
  ];

  files.forEach(file => {
    const src = path.join(root, file);
    const dest = path.join(root, 'dist', lib, file);

    fs.copySync(src, dest);
  });
}
