import fs from 'fs/promises'
import path from 'path'
import { REDIS_KEY } from './config'

const main = async () => {
  const data = await fs.readFile(path.join(__dirname, `../data/${REDIS_KEY.CONDITION_1}.bin`))

  const bufferOne = Buffer.from(data)
  console.log(bufferOne)
  process.exit(0)
}

main().catch(console.log)
