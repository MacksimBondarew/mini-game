# 🎮 **Mini-Game: Tic-Tac-Toe Online**
🔗 **Live Demo:** [tik-tak-toe-macksimbondarews-projects.vercel.app](https://tik-tak-toe-macksimbondarews-projects.vercel.app)  

[![Next.js](https://img.shields.io/badge/Next.js-15.1.7-blue)](https://nextjs.org/) 
[![TypeScript](https://img.shields.io/badge/TypeScript-✔️-blue)](https://www.typescriptlang.org/) 
[![Prisma](https://img.shields.io/badge/Prisma-✔️-blue)](https://www.prisma.io/)  

🚀 **Mini-Game** is a multiplayer **Tic-Tac-Toe** game built with Next.js, featuring **real-time updates** using **Server-Sent Events (SSE)** and **RabbitMQ**.  
It supports **authentication**, **player ranking**, and **live game updates**.

---

## 📌 **Core Technologies**
- 🏗 **Frontend**: `Next.js`, `React`, `TailwindCSS`
- ⚡ **Backend**: `Next.js API routes`
- 🗃 **Database**: `PostgreSQL` + `Prisma ORM`
- 📢 **Real-Time**: `Server-Sent Events (SSE)`, `RabbitMQ`
- 🔐 **Authentication**: `Session-based authentication`

---

## 🚀 **Features**
✔️ **Real-time gameplay** with automatic updates  
✔️ **User authentication and session management**  
✔️ **Game results storage**  
✔️ **Live updates using SSE (Server-Sent Events)**  
✔️ **RabbitMQ integration for WebSockets**  

---

## 📦 **Local Setup**
### 1️⃣ **Clone the Repository**
```bash
git clone https://github.com/MacksimBondarew/mini-game.git
cd mini-game
```

### 2️⃣ **Set Up Environment Variables**
Create a `.env` file and add:
```env
DATABASE_URL=postgres://user:password@localhost:5432/mini-game
POSTGRES_URL_NON_POOLING=postgres://user:password@localhost:5432/mini-game
MB_URL=amqp://localhost
NEXTAUTH_SECRET=your_secret
```
✅ *Ensure PostgreSQL and RabbitMQ are running before proceeding.*

### 3️⃣ **Install Dependencies**
```bash
npm install
```

### 4️⃣ **Run Database Migrations**
```bash
npx prisma migrate dev --name init
```

### 5️⃣ **Start the Project**
```bash
npm run dev
```
📌 *Your server will be available at `http://localhost:3000`.*

---

## 🎯 **Project Structure**
```
📁 mini-game
 ┣ 📁 prisma        # Prisma database configuration
 ┣ 📁 src
 ┃ ┣ 📁 entities   # Game-related entities (Game, Player, User)
 ┃ ┣ 📁 features   # Core business logic (authentication, game logic)
 ┃ ┣ 📁 kernel     # Shared types and utilities
 ┃ ┣ 📁 shared     # UI components, API, SSE logic
 ┃ ┗ 📁 app      # Next.js page routes
 ┣ 📄 .env.example # Example .env file
 ┣ 📄 README.md    # This file
 ┗ 📄 next.config.js # Next.js configuration
```

---

## 🔥 **Deploying on Vercel**
🔗 The project is already live at: **[Mini-Game on Vercel](https://tik-tak-toe-macksimbondarews-projects.vercel.app)**  

To deploy your own version:
1️⃣ **Sign up at [Vercel](https://vercel.com/)**  
2️⃣ **Set environment variables** in Vercel (`DATABASE_URL`, `MB_URL`, `NEXTAUTH_SECRET`)  
3️⃣ **Deploy with the command**:
```bash
vercel --prod
```
✅ **Deployment is complete!**

---

## 🤝 **Contributing**
If you want to contribute:
1. Fork the repository
2. Create a new branch `git checkout -b feature-name`
3. Make changes and commit `git commit -m "Added feature"`
4. Submit a PR to `main` 🚀

---

## 🔗 **Resources**
- **Live Project** → [tik-tak-toe-macksimbondarews-projects.vercel.app](https://tik-tak-toe-macksimbondarews-projects.vercel.app)  
- **Next.js Docs** → [nextjs.org](https://nextjs.org/)  
- **Prisma Docs** → [prisma.io](https://www.prisma.io/)  
- **Tailwind CSS Docs** → [tailwindcss.com](https://tailwindcss.com/)  
- **RabbitMQ Docs** → [rabbitmq.com](https://www.rabbitmq.com/)  

💙 Thank you for playing Mini-Game! 🎮 🚀
