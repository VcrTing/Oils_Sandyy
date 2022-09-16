module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/pdf/test',
            handler: 'pdf.test',
            config: { }
        },
        {
            method: 'POST',
            path: '/pdf/html/save',
            handler: 'pdf.save',
            config: { }
        },
        {
            method: 'GET',
            path: '/pdf/html/convert/:key',
            handler: 'pdf.convert',
            config: { }
        },
        {
            method: 'GET',
            path: '/pdf/fiie/:key',
            handler: 'pdf.fiie',
            config: { }
        },
    ]
}