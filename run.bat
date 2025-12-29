@echo off
setlocal
echo ==========================================
echo   Smart City Dashboard - Starter Script
echo ==========================================
echo.

:: Check if the current folder is correct
if not exist package.json (
    echo [ERROR] package.json not found!
    echo Please make sure you are running this from the project folder:
    echo C:\Users\oejaz\Desktop\file-main\file-main
    echo.
    pause
    exit /b
)

:: Check if node_modules exists
if not exist node_modules (
    echo [INFO] Installing dependencies (this may take a minute)...
    call npm install
)

:: Run the development server
echo [INFO] Launching Smart City Monitor...
echo.
echo TIP: Once started, open http://localhost:3000 in your browser.
echo.
npm run dev

pause
