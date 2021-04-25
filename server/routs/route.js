const express = require('express')
const { getInfo, addInfo } = require('../controllers/info.js')

const router = express.Router()

router.get('/', getInfo)

//Add Info
router.post('/', addInfo)

module.exports = router;