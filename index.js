'use strict';
const fs = require('fs');


const now = JSON.stringify({"time": new Date(Date.now())}, null, 4)
console.log(now)

fs.writeFileSync("data.json", now)
