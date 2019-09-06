const connection = require('./connection');
const { join } = require('path');
const { readFileSync } = require('fs');

const sql = readFileSync(join(__dirname, 'build.sql')).toString();

module.eexports = connection.query(sql);