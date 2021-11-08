const express = require('express')

const { getAll,getUser } = require('../controllers/user')

const router = express.Router()

router
.get('/', getAll)
router.get('/details/:id',getUser)


module.exports = router;