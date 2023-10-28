import { redis } from "../redis"

export const fillRedisBit = async (key: string, from: number, to: number, value: 0 | 1) => {
  const redisBatch = redis.multi()

  for (; from <= to; ) {
    if (to - from > 64) {
      redisBatch.bitfield(key, 'SET', 'i64', from, -1)
      from += 64
    } else {
      redisBatch.setbit(key, from++, value)
    }
  }

  return redisBatch.exec()
}
