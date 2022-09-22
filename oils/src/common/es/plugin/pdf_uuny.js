import axios from "axios"

const net = {
    'get': async (ink, params = { }) => {
        let res = await axios.get(ink, params)
        if (res && (res.status == 200)) { return res.data }; return res
    },
    'post': async (ink, data) => {
        let res = await axios.post(ink, data)
        if (res && (res.status == 200)) { return res.data }; return res
    }
}

const SALT = 'dan'

const URI = 'https://pdf02.svr.up5d.com/api'

const ENDPOINT = {
    'save': URI + '/pdf/html/save/?permit=' + SALT, // POST
    'fiie': (key) => `${URI}/pdf/fiie/${key}`, // GET
    'convert': (key) => `${URI}/pdf/html/convert/${key}`, // GET
}

export default {
    save: async (html) => {
        return await net['post']( ENDPOINT['save'] , { html })
    },
    convert: async (named) => {
        let res = await net['get']( ENDPOINT['convert'](named) )
        if (res && (res[0] < 404)) { return res[1] } return undefined
    },
    fiie: async (named) => {
        // ENDPOINT['fiie'](named) //
        return await net['get']( ENDPOINT['fiie'](named), { 'encoding': 'utf-8' } )
    }
}