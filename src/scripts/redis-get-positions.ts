import { fillRedisBit } from '../helpers/fillRedisBits'
import { redis } from '../redis'
import { REDIS_KEY } from './config'

const getBitPosition = async (key: string, offset: number) => {
  return redis.bitpos(key, 1, offset, -1, 'BIT')
}

const getAllBitPosition = async (key: string, results: number[], offset: number = 0): Promise<number[]> => {
  const res = await getBitPosition(key, offset)
  if (res === -1) return results
  results.push(res)
  return await getAllBitPosition(key, results, res + 1)
}

const main = async () => {
  await fillRedisBit(REDIS_KEY.CONDITION_1, 4, 4, 1)
  await fillRedisBit(REDIS_KEY.CONDITION_1, 10, 10, 1)
  await fillRedisBit(REDIS_KEY.CONDITION_1, 17, 17, 1)
  await fillRedisBit(REDIS_KEY.CONDITION_1, 786, 786, 1)
  await fillRedisBit(REDIS_KEY.CONDITION_1, 2012, 2012, 1)

  // console.log(await getBitPosition(REDIS_KEY.CONDITION_1, 0))
  const result: number[] = []
  console.log(await getAllBitPosition(REDIS_KEY.CONDITION_1, result))

  process.exit(0)
}

main().then().catch(console.log)
