import { fillRedisBit } from '../helpers/fillRedisBits'
import { redis } from '../redis'
import { REDIS_KEY } from './config'

const main = async () => {
  await fillRedisBit(REDIS_KEY.CONDITION_1, 0, 5, 0)
  await fillRedisBit(REDIS_KEY.CONDITION_1, 5, 10, 1)
  await fillRedisBit(REDIS_KEY.CONDITION_1, 10, 15, 0)

  // redis.bitop('NOT', REDIS_KEY.CONDITION_1, REDIS_KEY.CONDITION_1)

  process.exit(0)
}

main().then().catch(console.log)
