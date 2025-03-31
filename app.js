import express from 'express'
import cors from 'cors'
import mdRouter from './router/md.js'

const app = express()

// 配置跨域中间件
app.use(cors())

// 配置解析表单数据的中间件 只能解析 application/x-www-form-urlencoded 格式的表单数据
app.use(express.urlencoded({ extended: false }))

// 开启assets目录下的静态资源托管
app.use(express.static('assets'))

app.use('/api', mdRouter)

app.listen(3000, () => {
  console.log('API server running on port 3000')
})