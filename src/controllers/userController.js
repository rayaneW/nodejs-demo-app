const userModel = require('../models/userModel');

const createUser = (req, res) => {
  const { name, email } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const user = userModel.createUser({ name, email });
  res.status(201).json(user);
};

const getUsers = (req, res) => {
  const users = userModel.getAllUsers();
  res.json(users);
};

const getUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const user = userModel.getUserById(userId);
  
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  res.json(user);
};

const updateUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const updates = req.body;
  
  if (!updates || Object.keys(updates).length === 0) {
    return res.status(400).json({ error: 'No data provided' });
  }

  const user = userModel.updateUser(userId, updates);
  
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  res.json(user);
};

const deleteUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const success = userModel.deleteUser(userId);
  
  if (!success) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  res.json({ message: 'User deleted' });
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser
};