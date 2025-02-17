import express from 'express'
import cors from 'cors'

const app = express()

// 配置跨域中间件
app.use(cors())

// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }))

app.listen(3000, () => {
  console.log('API server running on port 3000')
})