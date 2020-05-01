'use strict';
const fs = require('fs');
const assert = require('assert');

const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'))

if("time" in data){
    console.log("Test Success!")
}else{
    console.log("Test Failure!")
    process.exit(1)
}

