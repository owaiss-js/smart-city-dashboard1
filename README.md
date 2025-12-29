# Polar City Smart Monitor - IoT Dashboard 🏙️

Welcome to our project! This is a **Smart City Infrastructure Monitoring Dashboard** built for the Polar Innovation track. It helps city officials monitor streetlights, water pipes, and more in real-time using IoT simulations.

## 🚀 The Problem
Many cities struggle to keep track of their infrastructure. Streetlights might be broken for weeks before someone notices! Our solution provides a centralized dashboard to:
1.  **Monitor** everything from one place.
2.  **Detect** issues automatically (like a water leak or full bin).
3.  **Predict** when maintenance is needed.
4.  **Connect** citizens with city officials via a complaint portal.

## 🛠️ Tech Stack
This project was made using:
- **React.js & Next.js** (Frontend & Backend API)
- **MongoDB & Mongoose** (Database to store sensor data and complaints)
- **Tailwind CSS** (For the cool, modern look)
- **Recharts** (To visualize sensor trends)
- **Lucide React** (For beautiful icons)

## 📁 Project Structure
- `src/models`: Database schemas (what our data looks like).
- `src/app/api`: Our backend routes for data simulation and storage.
- `src/components`: UI pieces like the Stats cards and Charts.
- `src/lib/mongodb.ts`: The secret sauce that connects our app to MongoDB.

## ⚙️ Setup Instructions (For Beginners)

1.  **Clone the project**:
    ```bash
    git clone [your-repo-link]
    cd orchids-smart-city-dashboard
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Set up MongoDB**:
    - Create a free account on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
    - Get your connection string.
    - Create a `.env.local` file in the root folder and add:
      ```
      MONGODB_URI=your_mongodb_connection_string_here
      ```

4.  **Run the project**:
    ```bash
    npm run dev
    ```
    Open `http://localhost:3000` to see the dashboard!

5.  **Initialize Data**:
    Click the **"Seed Data"** button on the dashboard to populate it with sample infrastructure.

## 🌟 Key Features
- **Real-time IoT Simulation**: Click "Simulate IoT Data" to see statuses update live!
- **Anomaly Detection**: The system highlights critical issues in RED automatically.
- **Citizen Portal**: Anyone can report a problem, and it shows up instantly for officials.
- **Predictive Alerts**: AI-like logic predicts failures before they happen.

---
*Created by a Class 12 Student passionate about IoT and Web Dev.*
*Special thanks to my teachers and seniors for guiding me with Mongoose and Next.js!*
