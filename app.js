import express from 'express'
import { resolve, dirname } from 'path'
import dbClient from './db.js'

const dirPath = resolve(dirname(''))
const app = express()

app.use('/public', express.static(dirPath + '/public'))

app.get('/', (req, res) => {
  res.sendFile(dirPath + '/views/index.html', )
})

app.get('/db', async (req, res) => {
  const { data, error } = await dbClient.from('user').select()
  res.send(data)
})

app.listen(3000, () => {
  console.log('Server online')
})