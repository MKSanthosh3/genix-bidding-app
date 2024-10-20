const db = require('../config/database');

exports.placeBid = (req, res) => {
  const auctionId = req.params.id;
  const { userId, bidAmount } = req.body;
  const query = `INSERT INTO bids (auction_id, user_id, bid_amount) VALUES (?, ?, ?)`;
  db.query(query, [auctionId, userId, bidAmount], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to place bid.' });
    }
    const updateQuery = `UPDATE auctions SET current_bid = ? WHERE id = ?`;
    db.query(updateQuery, [bidAmount, auctionId], (updateErr) => {
      if (updateErr) {
        return res.status(500).json({ error: 'Failed to update current bid.' });
      }
      res.status(201).json({ message: 'Bid placed successfully.' });
    });
  });
};

