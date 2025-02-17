import express from "express"
import fs from "fs"

const router = express.Router()

router.get('/md/:id', (req, res) => {
  // console.log(req.params.id)
  // res.send(req.params)
  fs.readFile(`./assets/md/${req.params.id}.md`, (err, data) => {
    if (err) {
      console.log(err)
      return
    } else {
      // console.log(data.toString())
      res.send(data.toString())
    }
  })
})

export default router