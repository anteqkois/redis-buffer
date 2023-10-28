import 'dotenv/config'
import Redis from 'ioredis'

export const redis = new Redis({
  host: process.env.REDIS_HOST || 'redis',
  port: 6379,
  maxRetriesPerRequest: null,
  password: process.env.REDIS_PASSWORD,
})

redis.on('error', (error: Error) => {
  console.error(error)
})
