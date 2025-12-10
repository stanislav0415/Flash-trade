# 🔫 Flash-Trade

Flash-Trade is a CS2 skin marketplace where users can browse skins, like them, sell their own skins, and purchase skins using a dummy payment system.  
Built with **React**, customizable for any backend, and structured for easy expansion.

---

## 📚 Table of Contents
1. [✨ Features](#-features)
2. [🛠 Tech Stack](#-tech-stack)
3. [🎮 Core Functionality](#-core-functionality)
4. [🚀 Future Improvements](#-future-improvements)
5. [🤝 Contributing](#-contributing)
6. [📄 License](#-license)

---

## ✨ Features

### 🎨 Skin Listings
- View all CS2 skins
- View detailed info for each skin
- Display images, price, float, ext.

### ❤️ Likes
- Like or unlike any skin

### 📝 Skin Management
- Create a skin listing
- Upload an image
- Edit your own listings
- Delete your own listings

### 💳 Dummy Payments
- Simple fake credit card checkout
- Simulated purchase success/failure
- No real payment processing

### 👤 Lightweight Authentication
- Frontend-only demo login
- Author-based permissions

---

## 🛠 Tech Stack

### Frontend
- **React** (JavaScript)
- **React Router**
- **CSS / Tailwind**
- **LocalStorage**

### Backend 
- Node.js + Express

## 🎮 Core Functionality

### 🔍 Browsing
Users can browse all available skins displayed in responsive card format.

### ❤️ Liking Skins
Each skin includes a heart icon that toggles likes.

### 📝 Create, Edit, Delete
Logged-in users can:
- Create a skin listing
- Edit their own listings
- Delete their own listings

### 💳 Fake Checkout
The Buy button opens a dummy checkout form:
- Enter a fake card number
- App simulates a successful purchase

---

## 🚀 Future Improvements
- Real Stripe / PayPal payments
- Full authentication (JWT, Firebase Auth)
- User profiles with avatars and details
- Admin moderation panel
- Real database integration
- Advanced filters & sorting
- Notification system
- Chat between buyers and sellers

---

## 🤝 Contributing

Contributions are always welcome!

### How to contribute:
1. Fork this repository
2. Clone your fork:
   ```bash
   git clone https://github.com/stanislav0415/flash-trade.git
