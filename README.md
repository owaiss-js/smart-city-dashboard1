# Polar City Smart Monitor 🚀
### Track: Polar Innovation - IoT, Automation & Smart Systems

Welcome to **Polar City Smart Monitor**, a centralized web dashboard designed to bridge the gap between digital data and physical municipal infrastructure. This project was built for the hackathon to demonstrate how IoT sensors can help city officials monitor health, detect anomalies, and respond to citizen complaints in real-time.

## 🌟 The Problem Statement
Municipal infrastructure (streetlights, water pipes, waste bins) often operates with minimal real-time monitoring. This leads to:
- **Energy Waste**: Streetlights staying on when not needed.
- **Maintenance Delays**: Leaks or faults only discovered after citizen complaints.
- **Reactive Management**: Fixing things only after they break.

**Our Solution:** A proactive monitoring system that uses simulated IoT data to predict failures and visualize city health.

## 🛠️ Tech Stack
- **Frontend:** React.js (Next.js 15) with Tailwind CSS
- **Backend:** Node.js & Express (Next.js API Routes)
- **Database:** MongoDB (using Mongoose)
- **Visualization:** Recharts (Charts) & Leaflet.js (Interactive Maps)
- **Animations:** Framer Motion & Lucide Icons

## ✨ Key Features
1. **Real-time IoT Simulation**: A backend engine that simulates live sensor data (pressure, fill levels, brightness).
2. **Geographic Visualization**: An interactive map showing exactly where infrastructure is located and its current health status.
3. **Anomaly Detection**: Threshold-based algorithms that automatically flag "Critical" or "Warning" status based on incoming data.
4. **Predictive Maintenance Alerts**: UI section that highlights units likely to fail based on health score trends.
5. **Citizen Complaint Portal**: Residents can report issues, which are automatically GPS-tagged and logged in the system.
6. **Live Analytics**: Time-series charts showing historical trends of city metrics.

## 🚀 How to Run (For Beginners)

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your computer.
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account (or a local MongoDB instance).

### Setup Instructions
1. **Clone the project** or download the zip.
2. **Install Dependencies**:
   Open your terminal in the project folder and run:
   ```bash
   npm install
   ```
3. **Environment Variables**:
   Create a file named `.env.local` in the root folder and add your MongoDB connection string:
   ```env
   MONGODB_URI=your_mongodb_connection_string_here
   ```
4. **Start the Project**:
   Run the following command:
   ```bash
   npm run dev
   ```
5. **Initialize Data**:
   Once the dashboard opens (usually at `http://localhost:3000`), click the **"Reset Data"** button to populate the database with sample infrastructure units.
6. **Simulate IoT**:
   Click **"Broadcast IoT Data"** to start the simulation engine!

## 📁 Project Structure
- `src/models`: Database schemas for Infrastructure, Sensors, and Complaints.
- `src/app/api`: Backend routes for simulation, data retrieval, and citizen reports.
- `src/components`: UI components like the Map, Charts, and Infrastructure Cards.
- `src/lib/mongodb.ts`: Helper to connect to the database.

## 📝 Developer Notes (Class 12 Student Perspective)
*This project was built using Next.js for its powerful routing and React for the interactive UI. We used Leaflet for the maps because it's open-source and very beginner-friendly. The most challenging part was designing the simulation logic to make the data look "real" on the charts!*

---
**Team:** Polar Innovators
**License:** MIT
