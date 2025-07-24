const userModel = require('../models/userModel');

const seedUsers = () => {
  const initialUsers = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' }
  ];
  
  userModel.resetUsers(initialUsers);
  console.log('Seeded initial users:', initialUsers.length);
};

module.exports = {
  seedUsers
};