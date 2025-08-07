# 🛒 DashMart – React Admin Dashboard (Frontend Only)

DashMart is a sleek and modern eCommerce dashboard built with **React 19**, **Redux Toolkit**, **React Router v6.23**, and **Tailwind CSS**. The app features essential UI components and logic for a product management dashboard — including authentication pages, protected routes, and table filtering — all implemented purely on the frontend, ready for backend integration.

> 🔐 No backend is connected — you can test the app with any dummy data.

---

## 🚀 Live Demo

Deployed with **Vercel**  
🔗 [https://dashmartMo.vercel.app]

---

## 📁 Project Structure

project-root/

├── node_modules/

├── public/

├── src/

│ ├── assets/ # Static assets (images, icons, etc.)

│ ├── componants/ # Reusable components

│ │ ├── auth/ # Login / Forget Password / Verify / Reset Password

│ │ ├── Layout/ # Header, Sidebar, etc.

│ │ ├── UI/ # Buttons, Modals, Inputs, etc.

│ │ └── hooks/ # Custom React hooks

│ ├── layouts/ # Layout wrappers (e.g. AuthLayout, RootLayout)

│ ├── pages/ # Page views (Dashboard, Tables, Notifications)

│ ├── routes/ # Routing configuration with protected routes

│ ├── store/ # Redux Toolkit store and slices

│ ├── utils/ # Helper functions

│ ├── App.css

│ ├── App.jsx

│ ├── index.css

│ └── main.jsx

├── .gitignore

├── .prettierrc

├── eslint.config.js

├── index.html

├── package-lock.json

└── package.json

---

## ✨ Features

### ✅ Authentication (Frontend Logic Only)

- Login
- Forget Password
- Verify Code
- Reset Password
- Protected Routes using `React Router`

### ✅ Dashboard UI

- Sidebar Layout
- Pages: Home / Tables / Notifications
- Clean and responsive design

### ✅ Table Features

- **Filtering by name or any column**
- Modal popup for row actions (edit/view)
- Status tags (In Stock / Out of Stock)
- Responsive and styled with Tailwind

### ✅ Code Quality

- ESLint for consistent coding standards
- Prettier for auto-formatting
- Modular folder structure

---

## ⚙️ Tech Stack

- **React 19** with Hooks & JSX
- **Redux Toolkit** for state management
- **React Router v6.23** for routing
- **Tailwind CSS** for styling
- **Vite** for lightning-fast development

---

## 🛠️ Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/your-username/dashmart.git
cd dashmart
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **Build for production**

```bash
npm run build
```

☁️ Deploy on Vercel
Push your code to GitHub

Go to vercel.com and connect your GitHub repo

Vercel will detect Vite and auto-configure the build

Enjoy your deployed dashboard 🎉

📌 Notes
This project is frontend only — you can connect it to any backend of your choice (Node, Laravel, Firebase, etc.)

Dummy credentials work — no actual login required.

Filtering works on any test data you input into the Redux store or mock data file.

📄 License
MIT – Feel free to use and modify this project for personal or commercial use.

🙋‍♂️ Author
Made with 💙 by [**Mostafa Kamal**](https://mo-kamal-portfolio.netlify.app)
