const express = require('express');
const router = express.Router();
const auctionController = require('../controllers/auctionController');

router.get('/', auctionController.getAllAuctions);
router.post('/', auctionController.createAuction);

module.exports = router;
