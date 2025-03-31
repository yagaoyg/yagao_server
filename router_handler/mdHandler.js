import fs from 'fs'

// 定义获取md文件的路由处理函数
export const getMd = (req, res) => {
  fs.readFile(`./assets/md/${req.params.id}.md`, (err, data) => {
    if (err) {
      console.log(err)
      return
    } else {
      res.send(data.toString())
    }
  })
}

// 定义获取md文件列表的路由处理函数
export const getMdList = (req, res) => {
  fs.readFile('./data/mdlist.json', (err, data) => {
    if (err) {
      console.log(err)
      return
    } else {
      res.send(JSON.parse(data.toString()))
    }
  })
}