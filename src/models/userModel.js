// In-memory user storage
const users = new Map();
let nextId = 1;

const createUser = (userData) => {
  const user = {
    id: nextId,
    ...userData
  };
  users.set(nextId, user);
  nextId++;
  return user;
};

const getAllUsers = () => {
  return Array.from(users.values());
};

const getUserById = (id) => {
  return users.get(id);
};

const updateUser = (id, updates) => {
  const user = users.get(id);
  if (!user) return null;
  
  const updatedUser = {
    ...user,
    ...updates,
    id: user.id // Ensure ID doesn't change
  };
  
  users.set(id, updatedUser);
  return updatedUser;
};

const deleteUser = (id) => {
  return users.delete(id);
};

const clearAllUsers = () => {
  users.clear();
  nextId = 1;
};

const resetUsers = (initialUsers) => {
  clearAllUsers();
  initialUsers.forEach(user => {
    users.set(user.id, user);
    if (user.id >= nextId) {
      nextId = user.id + 1;
    }
  });
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  clearAllUsers,
  resetUsers
};