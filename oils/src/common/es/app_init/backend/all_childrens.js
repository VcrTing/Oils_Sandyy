const _get_child = function(users) {
    let res = [ ]
    for (let u of users) {
        let childs = [ ]
        if ('children' in u) {
            childs = _get_child(u[ 'children' ])
        }

        res.push(u)
        res.push(...childs)
    }

    return res
}

const _switch_child = function(child_sponsor, child_enroller) {
    let res = child_sponsor
    res = res.map(e => e.member_code)
    res = child_enroller.filter(e => {
        let f = true
        for (let mc of res) {
            if (e.member_code == mc) {
                f = false
            }
        }
        return f
    })
    child_sponsor.push(...res)
    return child_sponsor
}   

const all_childrens = function(mine_sponsor, mine_enroller) {
    return new Promise((rej, rev) => {
        const child_sponsor = _get_child([ mine_sponsor ])
        const child_enroller = _get_child([ mine_enroller ])

        rej(
            [
                _switch_child(child_sponsor, child_enroller),
                child_sponsor,
                child_enroller
            ]
        )
    })
}

export default all_childrens