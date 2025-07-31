# 🌦️ React Weather App

This is a responsive weather application built using **React**. It allows users to search for any city and get real-time weather data using the **OpenWeatherMap API**. The app features a dynamic background, current time, and supports all screen sizes including mobile and tablet.

---

## 🚀 Features

- 🔍 Search by city name
- 🌦 Real-time weather data (temperature, humidity, wind, weather condition)
- 🖼 Dynamic background (GIFs/videos based on weather condition and time)
- 📱 Responsive design for mobile, tablet, and desktop
- 🌐 Backend server (Node.js + Express) to securely proxy API requests
- 🔒 API key hidden in backend (not exposed in frontend)

---

## 🛠 Tech Stack

- Frontend: React (Vite)
- Backend: Node.js, Express
- API: OpenWeatherMap
- Styling: CSS

---

## 📦 Folder Structure

weather-app/
├── src/ # React frontend
│ └── Weather.jsx
├── server/ # Backend Node server
│ ├── server.js
│ └── .env # Not included in repo
├── public/
├── .env # Frontend (optional, no API key here)
├── .gitignore
├── README.md
└── package.json


---

## 📋 Setup Instructions

### 🧑‍💻 1. Clone the Repository

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app

⚙️ 2. Install Dependencies
Frontend:
npm install
npm run dev

Backend (in /server):
cd server
npm install

Create a .env file inside server/:
WEATHER_API_KEY=your_openweathermap_api_key

Run the server:
node server.js

🌐 API Source
Data is powered by OpenWeatherMap

✅ Deployment Plan
Backend: Render
Frontend: Netlify or Vercel

📱 Screenshots

📄 License
This project is open-source and free to use.

🙋‍♂️ Author
Utkarsh Shukla
GitHub: @dev-utkarshcodes