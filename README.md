# Polar City Smart Monitor

### Track: Polar Innovation - IoT, Automation & Smart Systems
### Hackathon Submission

---

## About This Project

**Polar City Smart Monitor** is a centralized web dashboard that simulates smart city infrastructure monitoring. It demonstrates how IoT sensors can help city officials monitor health, detect anomalies, and respond to citizen complaints in real-time.

### The Problem We're Solving

Municipal infrastructure (streetlights, water pipes, waste bins, traffic signals) often operates with minimal real-time monitoring. This leads to:
- **Energy Waste**: Streetlights staying on when broken
- **Maintenance Delays**: Issues only discovered after citizen complaints
- **Reactive Management**: Fixing things only after they break

### Our Solution

A **proactive monitoring system** that uses simulated IoT data to:
1. Predict failures before they happen
2. Visualize city health on an interactive map
3. Let citizens easily report issues
4. Help city officials schedule maintenance

---

## How to Run (Easy Setup for Beginners)

### Step-by-Step Instructions

**Step 1: Download the Project**
```bash
git clone <your-repo-url>
cd smart-city-dashboard
```

**Step 2: Install Dependencies**
```bash
npm install
```

**Step 3: Set Up Environment Variables**

Create a file called `.env.local` in the root folder and add:
```env
MONGODB_URI=your_mongodb_connection_string_here
```

> **How to get your MongoDB URI:**
> 1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
> 2. Create a free cluster
> 3. Click "Connect" > "Connect your application"
> 4. Copy the connection string
> 5. Replace `<password>` with your actual password

**Step 4: Start the Project**
```bash
npm run dev
```

**Step 5: Open in Browser**
Go to: `http://localhost:3000`

**Step 6: Initialize Sample Data**
Click the **"Reset Data"** button on the dashboard to load sample infrastructure.

**Step 7: Start the IoT Simulation**
Click **"Broadcast IoT Data"** to simulate sensor readings!

---

## Environment Variables Template

```env
# MongoDB Connection String
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database

# Optional: For deployment
NODE_ENV=production
```

---

## Deployment Guide

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Add environment variables in Vercel dashboard
5. Click Deploy!

---

**Made with dedication for the Polar Innovation Hackathon**
