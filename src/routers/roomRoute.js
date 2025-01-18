import express from "express";
import { createRoom, deleteRoom, listRoom, pageCreateRoom, pageDeleteRoom, pageEditRoom, trashRoom, updateRoom, retoreRoom } from "../controllers/roomController.js";

const router = express.Router()

router.get('/', listRoom)

router.get('/create', pageCreateRoom)
router.post('/create', createRoom)

router.get('/update/:code', pageEditRoom)
router.post('/update/:code', updateRoom)

router.get('/delete/:code', pageDeleteRoom)
router.post('/delete/:code', deleteRoom)

router.get('/trash', trashRoom)
router.post('/restore/:code', retoreRoom)

export default router