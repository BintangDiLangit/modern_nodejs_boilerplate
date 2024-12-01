const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Example route working!' });
});

router.post('/', (req, res) => {
    res.json({ message: 'POST to example route' });
});

module.exports = router;