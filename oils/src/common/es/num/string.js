
const _hash = function(chr) {
    return chr.charCodeAt(0)
}

const hashs = function(src) {
    let hash = 0, i, chr
    if (src.length === 0) return;
    for (i= 0; i< src.length; i++ ) {
        chr = src.charCodeAt( i )
        hash = ((hash << 5) - hash) + chr
        hash |= 0
    }
    return hash
}

const chr_first = function(src) {
    src = src ? src.substring(0, 1) : ''
    return src ? src.toUpperCase() : ''
}

// 两英文单词，A - Z 谁首字母更大，正数 则 前大于后
const chr_sort = function(chr1, chr2) {
    chr1 = chr1 ? _hash(chr_first(chr1)) : null
    chr2 = chr2 ? _hash(chr_first(chr2)) : null
    return (chr1 && chr2) ? chr1 - chr2 : null
}

export default {
    _hash,
    hashs,
    chr_sort,
    chr_first,
}