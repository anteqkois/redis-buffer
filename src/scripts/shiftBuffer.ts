import { leftShift } from 'bitwise-buffer'
import fs from 'fs/promises'
import path from 'path'
import { REDIS_KEY } from './config'

const main = async () => {
  const con1data = await fs.readFile(path.join(__dirname, `../data/${REDIS_KEY.CONDITION_1}.bin`))

  const bufferOne = Buffer.from(con1data)
  console.log(bufferOne)
  
  leftShift.mut(bufferOne, 4)
  console.log(bufferOne)
  
  await fs.writeFile(path.join(__dirname, '../data/con1-shift.bin'), bufferOne)
  
  process.exit(0)
}

main().catch(console.log)
