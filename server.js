import { fastify } from 'fastify'
import { databaseMemory} from './database-memory.js'
import { title } from 'node:process'

const server = fastify()
const database = new databaseMemory()

server.post('/videos', (request, response) => {
    const body = request.body
    console.log(body)
    database.create({
        title: body.title,
        description: body.description,
        duration: body.duration
    })
    console.log(database.list())
    return response.status(201).send()
})

server.get('/videos', () => {
    return database.list()
})

server.put('/videos/:id', () => {
    return 'Olá'
})
server.delete('/videos/:id', () => {
    return 'Olá'
})
server.listen({
    port: 3333
})