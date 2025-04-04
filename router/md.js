import express from "express"
import { getMd, getMdList, uploadMd } from "../router_handler/mdHandler.js"

const router = express.Router()

router.get('/md/:id', (req, res) => getMd(req, res))

router.get('/md', (req, res) => getMdList(req, res))

router.post('/md/upload', (req, res) => uploadMd(req, res)) // 新增

export default router