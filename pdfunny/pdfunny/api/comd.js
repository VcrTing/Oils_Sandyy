
const { exec, execSync } = require('child_process');

const comd = function(_m) {
    execSync(_m)
}

module.exports = comd