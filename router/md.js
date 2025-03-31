import express from "express"
import { getMd, getMdList } from "../router_handler/mdHandler.js"

const router = express.Router()

router.get('/md/:id', (req, res) => getMd(req, res))

router.get('/md', (req, res) => getMdList(req, res))

export default router