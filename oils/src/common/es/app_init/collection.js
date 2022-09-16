
const collect_collection = function(sponser, enroller) {
    let collect = [ ]
    
    return new Promise((rej, rev) => {
        for (let s of sponser) {
            collect.push(s)
        }
    
        let need = false
        for (let e of enroller) {
            need = true
            for (let c of collect) {
                if (c.member_code == e.member_code) {
                    need = false
                }
            }
    
            if (need) { collect.push(e) }
        }
    
        rej(collect) 
    })
}

export default collect_collection