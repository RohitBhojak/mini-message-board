# 📨 Mini Message Board

A stylish, functional web application built with **Node.js**, **Express**, and **EJS**. This project allows users to view a live feed of messages and contribute their own in real-time.

<img width="1470" height="956" alt="Screenshot 2026-03-29 at 9 54 49 PM" src="https://github.com/user-attachments/assets/e3a9719b-3d9c-46f7-815f-374d7350424a" />

---


## ✨ Features

* **Live Message Feed:** View messages from users with dynamic, persistent profile colors (Google-style).
* **Real-time Interaction:** Add new messages via a clean, user-friendly form.
* **Responsive Design:** Beautiful, mobile-friendly UI with a soft pastel aesthetic.
* **Smart Formatting:** Dates are elegantly formatted using **Day.js**.
* **Custom Error Handling:** Robust 404 and 500 error pages to keep the experience seamless.
* **MVC Architecture:** Cleanly organized into Models, Views, and Controllers.

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Frontend:** EJS (Embedded JavaScript Templates), CSS3
* **Utilities:** Day.js (Date formatting), HSL Color Hashing

---

## 🚀 Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/en/) (v14 or higher)
* npm (comes with Node)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/YOUR_USERNAME/mini-message-board.git
    cd mini-message-board
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```
    
3.  **Create a .env file in the root directory and add the code snippet:**
    ```code snippet
    PORT=8080
    ```

4.  **Start the server:**
    ```bash
    npm run start
    ```

5.  **Open your browser:**
    Navigate to `http://localhost:8080`

---

## 📁 Project Structure

```text
├── controllers/      # Logic for routing and data handling
├── public/           # Static files (CSS)
├── routes/           # URL path definitions
├── utils/            # Helper functions (Color generation, etc.)
├── views/            # EJS Templates
│   ├── index.ejs     # Main board view
│   ├── form.ejs      # New message view
│   └── error.ejs     # Error page
└── app.js            # Main entry point
