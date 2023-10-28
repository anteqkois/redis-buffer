import fs from 'fs/promises'
import path from 'path'
import { redis } from '../redis'
// import fs from 'fs'

const KEY = {
  CONDITION_1: 'con1',
  CONDITION_2: 'con2',
}

const main = async () => {
  const data = await redis.getBuffer(KEY.CONDITION_1)
  console.log(data)

  if (!data) return
  await fs.writeFile(path.join(__dirname, '../data/con1.bin'), data)

  process.exit(0)
}

main().then().catch(console.log)
