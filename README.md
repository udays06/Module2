# Blog App - Node.js, Express.js, MongoDB

## Setup

1. Install backend dependencies:
```bash
cd backend
npm install
```

2. Start MongoDB locally or update `backend/.env` with your MongoDB Atlas URI.

3. Start the server:
```bash
npm start
```

4. Open `frontend/index.html` in your browser.

## APIs

- POST http://localhost:5000/api/auth/register
- POST http://localhost:5000/api/auth/login
- POST http://localhost:5000/api/blogs  (requires Bearer token)
- GET  http://localhost:5000/api/blogs
