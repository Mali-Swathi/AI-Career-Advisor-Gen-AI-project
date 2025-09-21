// backend/routes/testRoutes.js
const express = require('express');
const { getTestQuestions } = require('../controllers/testController');

const router = express.Router();

router.get('/questions', getTestQuestions);

module.exports = router;