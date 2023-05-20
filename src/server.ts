import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

app.get('/', async (request, reply) => {
  return { hello: 'world' }
})

app.get('/hello', async () => {
  const users = await prisma.user.findMany()

  return users
})

app
  .listen({
    port: 3000,
  })
  .then(() => {
    console.log('Server listening on port 3000')
  })
