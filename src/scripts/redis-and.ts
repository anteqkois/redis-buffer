import { fillRedisBit } from '../helpers/fillRedisBits'
import { redis } from '../redis'
import { REDIS_KEY } from './config'

const main = async () => {
  await fillRedisBit(REDIS_KEY.CONDITION_1, 0, 4, 1)
  // await fillRedisBit(REDIS_KEY.CONDITION_1, 5, 8, 1)

  await fillRedisBit(REDIS_KEY.CONDITION_2, 2, 4, 1)
  // await fillRedisBit(REDIS_KEY.CONDITION_2, 5, 8, 1)

  // redis.bitop('AND', REDIS_KEY.CONDITION_1, REDIS_KEY.CONDITION_1, REDIS_KEY.CONDITION_2)
  redis.bitop('AND', REDIS_KEY.RESULT, REDIS_KEY.CONDITION_1, REDIS_KEY.CONDITION_2)

  process.exit(0)
}

main().then().catch(console.log)
