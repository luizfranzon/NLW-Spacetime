import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'

const app = fastify()
const port = 3333

const prisma = new PrismaClient()

app.get('/hello', async () => {
  const users = await prisma.user.findMany()

  return users
})

app
  .listen({
    port,
  })
  .then(() => {
    console.log(`🚀 • Servidor iniciado na porta ${port}`)
    console.log(`🌐 • http://localhost:${port}`)
  })
