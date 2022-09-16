
const { exec } = require('child_process');

const comd = function(_m, call) {
    exec(_m, function(err, stdout, stderr) { call(stdout, stderr) })
}

module.exports = comd