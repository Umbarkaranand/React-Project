# 🔸 Step 1: Create the .env File
1️⃣ In your project root (weatherApp/), create a new file named .env
2️⃣ Add your API key inside the file:

OpenWeather API Key
VITE_WEATHER_API_KEY=your_actual_api_key_here
3️⃣ Save the file.

 Link for openweathermap API https://home.openweathermap.org/api_keys

# 🔸 Step 2: Use Environment Variables in React (Vite)
1️⃣ Open Weather.jsx (or wherever you use the API key).
2️⃣ Import the variable using import.meta.env:


const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
3️⃣ Use API_KEY in your API request:

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

# 🔸 Step 3: Install Dependencies & Run the Project
After setting up everything, run:

Install dependencies (if not installed)
npm install  

Start the development server
npm run dev

# 🔸 Step 4: After Cloning the Repo (For Others or Yourself)
If you (or someone else) clones the repo, do the following:

1️⃣ Install dependencies:
npm install


2️⃣ Open .env and add the actual API key.
3️⃣ Start the project:

npm run dev

 
# ✅ Now your React Weather App is running securely and efficiently! 🚀

#   Output 

