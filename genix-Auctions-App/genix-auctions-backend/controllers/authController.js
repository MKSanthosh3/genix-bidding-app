const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/database'); // This should now export the connection pool

exports.registerUser = async (req, res) => {
  const { firstName, lastName, email, password, receiveEmails, rememberMe } = req.body;
  try {
    console.log('Registering user with email:', email);

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Password hashed successfully');

    // Insert the new user into the database
    const query = `INSERT INTO users (first_name, last_name, email, password, receive_emails, remember_me) VALUES (?, ?, ?, ?, ?, ?)`;
    await db.execute(query, [firstName, lastName, email, hashedPassword, receiveEmails, rememberMe]);
    console.log('User inserted into database successfully');

    res.status(201).json({ message: 'User registered successfully.' });
  } catch (err) {
    console.error('Error registering user:', err);
    res.status(500).json({ error: 'Failed to register user.' });
  }
};




exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  const query = `SELECT * FROM users WHERE email = ?`;

  try {
    console.log('Logging in user with email:', email);

    // Execute the query using the connection pool
    const [rows] = await db.execute(query, [email]);
    console.log('Database query results:', rows);

    // Check if the user exists
    if (!rows || rows.length === 0) {
      console.warn('No user found with the provided email');
      return res.status(400).json({ error: 'Invalid email or password.' });
    }

    const user = rows[0];

    // Compare the provided password with the hashed password in the database
    const validPassword = await bcrypt.compare(password, user.password);
    console.log('Password validation result:', validPassword);

    if (!validPassword) {
      console.warn('Invalid password provided');
      return res.status(400).json({ error: 'Invalid email or password.' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log('JWT token generated successfully');

    // Send user details along with token
    res.json({
      message: 'Login successful',
      user: {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        receiveEmails: user.receive_emails,
        rememberMe: user.remember_me,
        createdAt: user.created_at,
        updatedAt: user.updated_at,
      },
      token,
    });
  } catch (err) {
    console.error('Error logging in user:', err);
    res.status(500).json({ error: 'An error occurred while logging in.' });
  }
};

exports.logoutUser = (req, res) => {
  try {
    // Since the JWT token is stateless, we simply return a success message.
    // Optionally, implement a token blacklist system here for greater security.
    res.status(200).json({ message: 'Logout successful' });
  } catch (err) {
    console.error('Error during logout:', err);
    res.status(500).json({ error: 'Failed to logout' });
  }
};