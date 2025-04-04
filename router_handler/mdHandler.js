import fs from 'fs'
import path from 'path'

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

// 定义上传md文件的路由处理函数
export const uploadMd = (req, res) => {
  console.log(req)
  console.log(req.file)
  console.log(req.body)
  const { title, abstract, time } = req.body
  const file = req.file

  if (!file || !title || !abstract || !time) {
    return res.status(400).send({ message: '缺少必要的参数或文件' })
  }

  // res.send('已收到')

  // 读取现有的 mdlist.json 文件
  const mdlistPath = './data/mdlist.json'
  fs.readFile(mdlistPath, (err, data) => {
    if (err) {
      console.error(err)
      return res.status(500).send({ message: '读取文章列表失败' })
    }

    const mdList = JSON.parse(data.toString())
    const newId = mdList.length > 0 ? mdList[mdList.length - 1].id + 1 : 0

    console.log(mdList, newId)

    // 将上传的文件保存到指定目录
    const mdFilePath = `./assets/md/${newId}.md`
    fs.writeFile(mdFilePath, file.buffer, (err) => {
      if (err) {
        console.error(err)
        return res.status(500).send({ message: '保存文件失败' })
      }

      // 更新文章列表
      const newArticle = { id: newId, title, abstract, time }
      mdList.push(newArticle)

      fs.writeFile(mdlistPath, JSON.stringify(mdList, null, 2), (err) => {
        if (err) {
          console.error(err)
          return res.status(500).send({ message: '更新文章列表失败' })
        }

        res.send({ message: '上传成功', article: newArticle })
      })
    })
  })
}