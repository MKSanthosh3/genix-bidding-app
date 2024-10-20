const db = require('../config/database');

exports.getAllAuctions = async (req, res) => {
  const query = `SELECT * FROM auctions`;
  try {
    const [results] = await db.execute(query);
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch auctions.' });
  }
};

exports.createAuction = async (req, res) => {
  const { title, description, startingBid, bidEndDate, createdBy } = req.body;
  const query = `INSERT INTO auctions (title, description, starting_bid, bid_end_date, created_by) VALUES (?, ?, ?, ?, ?)`;
  try {
    await db.execute(query, [title, description, startingBid, bidEndDate, createdBy]);
    res.status(201).json({ message: 'Auction created successfully.' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create auction.' });
  }
};
