const KK = '_8'
// const _L = cc.length
// const _LF = Math.ceil(_L / 2) - 1

const decode = function(cc) {
    cc = cc.split(KK).map(e => e.replace(KK, ''))
    return cc ? cc.reverse().join('') : ''
}
const encode = function(cc) {
    const _L = cc.length
    const _LF = Math.ceil(_L / 2) - 1
    return cc.substring(_LF, _L) + KK + cc.substring(0, _LF)
}


const test = function() {
    let ss = 'F!u7@+83rU7.53Q?'
    ss = encode(ss)
    console.log(ss)
    console.log(decode(ss))
}
// test()

module.exports = {
    decode, encode
}