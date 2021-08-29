const fastify = require('fastify')({logger: true})
const PORT = 3000

fastify.get('/',async()=>{
    return { Test: "Hello World"}
})

const serve = async() => {
    try {
        await fastify.listen(PORT)
        fastify.log.info(`Server listening to PORT ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

serve()