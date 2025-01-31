// backend/routes/userRoutes.js
const express = require('express')
const { signup, login, profile } = require('../controllers/userController')
const router = express.Router()

router.post('/signup', signup)
router.post('/login', login)
router.get('/profile', profile)

module.exports = router
