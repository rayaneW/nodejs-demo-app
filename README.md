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

---

## 🚀 Development Guide

### Local Development Setup

1. **Clone and Install**
   ```bash
   git clone <repository-url>
   cd nodejs-demo-app
   npm install
   ```

2. **Environment Configuration**
   ```bash
   # Create environment file
   cp .env.example .env
   
   # Edit .env with your settings
   PORT=5000
   NODE_ENV=development
   ```

3. **Start Development Server**
   ```bash
   # Start with auto-reload (recommended for development)
   npm run dev
   
   # Server will be available at http://localhost:5000
   # Swagger documentation at http://localhost:5000/
   ```

4. **Run Tests During Development**
   ```bash
   # Run all tests with coverage
   npm test
   
   # Run tests in watch mode (auto-run on file changes)
   npm run test:watch
   
   # Generate detailed coverage report
   npm test -- --coverage --verbose
   ```

### Development Workflow

- **Code Changes**: Files are auto-reloaded with `nodemon` when using `npm run dev`
- **API Testing**: Use Swagger UI at `http://localhost:5000/` for interactive testing
- **Test-Driven Development**: Use `npm run test:watch` for continuous testing

---

## 🌐 Production Deployment

### Option 1: Node.js Production Server

1. **Prepare Production Environment**
   ```bash
   # Set production environment variables
   export NODE_ENV=production
   export PORT=3000  # or your preferred port
   
   # Install dependencies (production only)
   npm ci --only=production
   ```

2. **Start Production Server**
   ```bash
   # Direct start
   npm start
   
   # Or with PM2 for process management
   npm install -g pm2
   pm2 start src/server.js --name "user-api"
   pm2 save
   pm2 startup
   ```

### Option 2: Docker Deployment

1. **Create Dockerfile**

2. **Build and Run**
   ```bash
   # Build Docker image
   docker build -t user-management-api .
   
   # Run container
   docker run -p 3000:3000 -e NODE_ENV=production user-management-api
   ```

### Option 3: Cloud Platform Deployment

---

## 🔧 Configuration Options

### Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `NODE_ENV` | `development` | Environment mode |
| `PORT` | `5000` | Server port |
| `CORS_ORIGIN` | `*` | CORS allowed origins |

### Production Optimizations

- **In-Memory Storage**: Consider migrating to persistent database (MongoDB, PostgreSQL)
- **Caching**: Add Redis for session management and caching
- **Security**: Implement rate limiting, helmet.js, and input sanitization
- **Monitoring**: Add logging (Winston) and monitoring (New Relic, DataDog)

---