# 🌦️ React Weather App

A responsive weather application built with **React** and **Node.js**. Search any city and get real-time weather updates from the **OpenWeatherMap API**. Dynamic backgrounds, clock, and full mobile/tablet support included.

---

## 🚀 Features

- 🔍 Search by city name
- 🌦 Real-time weather data (temperature, humidity, wind, condition)
- 🖼 Dynamic background (GIFs/videos based on weather + time)
- 📱 Responsive layout (mobile/tablet/desktop)
- 🌐 Node.js backend proxy to protect API key
- 🔒 API key never exposed in frontend code

---

## 🛠 Tech Stack

- **Frontend**: React (Vite)
- **Backend**: Node.js + Express
- **API**: OpenWeatherMap
- **Styling**: Plain CSS

---

## 📁 Folder Structure

weather-app/
├── frontend/ # React app
│ ├── src/
│ │ └── Weather.jsx
│ ├── public/
│ ├── vite.config.js
│ └── .env # Optional (no API key)
├── backend/ # Node.js Express server
│ ├── server.js
│ └── .env # Contains API key (not pushed to GitHub)
├── .gitignore
├── README.md
└── package.json


---

## 📋 Setup Instructions

### 🔧 1. Clone the Repository

```bash
git clone git https://github.com/dev-utkarshcodes/weather-app.git
cd weather-app

###🌐 2. Set Up Backend
cd backend
npm install

Create a .env file in the backend folder:
WEATHER_API_KEY=your_openweathermap_api_key

Start the backend server:
node server.js

By default it runs on: http://localhost:5000

###⚛️ 3. Set Up Frontend
cd ../frontend
npm install
npm run dev

###🔁 4. Proxy Setup (Optional but Recommended)
Edit frontend/vite.config.js to add a proxy:
server: {
  proxy: {
    '/api': 'http://localhost:5000',
  }
}
Now in your frontend code you can fetch like this:
fetch(`/api/weather?city=${city}`)

Instead of calling the full backend URL.

/

##🚀 Deployment Plan
Frontend: Netlify or Vercel

Backend: Render

Be sure to set the backend’s WEATHER_API_KEY in Render's Environment Variables section.

##🧹 .gitignore Notes
Make sure .gitignore includes:
node_modules/
.env
frontend/.env
backend/.env

##📄 License
This project is open-source and free to use for learning, portfolio, and personal use.

##🙋‍♂️ Author
Utkarsh Shukla
GitHub: @dev-utkarshcodes