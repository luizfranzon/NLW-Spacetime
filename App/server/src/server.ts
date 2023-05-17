import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'
import cors from '@fastify/cors'

const app = fastify()
const port = 3333
app.register(cors, { origin: true })

app.register(memoriesRoutes)

app
  .listen({
    port,
  })
  .then(() => {
    console.log(`🚀 • Servidor iniciado na porta ${port}`)
    console.log(`🌐 • http://localhost:${port}`)
  })
