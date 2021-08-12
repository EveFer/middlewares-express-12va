const express = require('express')
const koderRouter = require('./routerKoders')
const server = express()

// 



// 
function factoryMiddleware() {
    return (req, res, next) => {
        console.log('Middleware factory')
        next()
    }
}

// server.use(factoryMiddleware())

// server.use(express.json())

function middleware(req, res, next) {
    console.log('Middleware externo')
    next()
}

// server.use(middleware)

// middleware a nivel de applicaicon o servidor
server.use((request, response, next) => {
    request.user = 'Fers Palacios'
    console.log('Middleware de aplicación')
    next()
})

// server.use((request, response, next) => {
//     request.user = "Karen"
//     console.log('Middleware de aplicación 2')
//     next()
// })

server.get('/', (req, res) => {
    // console.log('user:', req.user)
    res.json({
        message: 'Hello koders'
    })
})

server.get('/mentors', (req, res) => {
    res.json({
        message: 'Hello mentors'
    })
})

// server.get('/koders', (request, response, next) => {
//     console.log('Middleware a la ruta: GET /koders')
//     next()
// }, (req, res) => {
//     // console.log('user:', req.user)
//     res.json({
//         message: 'Hello koders'
//     })
// })

server.use('/koders', koderRouter)


server.listen(8080, () => {
    console.log('Server running')
})

// Un middleware son funciones
// (request, response, next) => {}

// 3 niveles de middleware
// - Nivel de aplicación o servidor
// - Nivel de Router
// - Nivel de ruta