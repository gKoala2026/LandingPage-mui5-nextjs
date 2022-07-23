const express = require('express')
const router = express.Router()
const mainController = require('../controllers/MainController')

router.get('/main/companies', mainController.getList)

module.exports = router;