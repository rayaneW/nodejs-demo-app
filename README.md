# 🧩 Node.js User Management API

A lightweight Node.js Express-based REST API for managing users (Create, Read, Update, Delete) with in-memory data storage. Includes auto-seeded user data and interactive Swagger (OpenAPI) documentation served at the root (`/`).

---

## 📦 Features

- ✅ In-memory storage for rapid development and testing  
- 🔄 Full CRUD endpoints: `POST`, `GET`, `PUT`, `DELETE`  
- 🧪 Swagger UI for testing & docs at `/` 
- 🚀 Minimal setup, ready for DevOps CI/CD pipelines  
- 🧰 Easily extendable to use persistent databases (e.g., MongoDB, PostgreSQL)

---

## Getting Started

### Requirements

- Node.js 14+
- npm or yarn

### Installation

```bash
npm install
```

### Run the App

Development mode with auto-reload:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

### Testing
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

Generate coverage report:
```bash
npm test -- --coverage
```

### API Documentation

Once the server is running, visit `http://localhost:5000/` to access the interactive Swagger UI documentation.

### Environment Variables

Copy `.env.example` to `.env` and configure:

- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment (development/production)