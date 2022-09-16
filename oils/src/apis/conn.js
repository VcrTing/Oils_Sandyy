
import token from './auth/token'

import service from './network/service'

import ex_service from './network/ex_service'

export default {
    ...token,
    ...service,
    ...ex_service,
    
    success_one(e) {
        try {
        const id = e.id
        } catch(e) {
        return false
        }
        return true
    },
    success_many(e) {
        if (e.length > 0) {
        return true
        }
        return false
    }
}