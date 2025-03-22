🚀 Steps to Clone & Set Up the News App from GitHub
## 1️⃣ Clone the Repository
Open Terminal / Command Prompt and run:

git clone https://github.com/Umbarkaranand/React-Project.git
👉 This will download the repository to your computer.

## 2️⃣ Navigate to the Project Folder
cd React-Project

## 3️⃣ Install Dependencies
Make sure you have Node.js installed. Then run:

npm install
👉 This installs all required packages from package.json.

## 4️⃣ Add Your .env File (For API Key)
Since your project uses an API key for GNews, create a .env file in the root directory:

touch .env
Open .env and add your API key:

VITE_GNEWS_API_KEY=your_actual_api_key
⚠️ Important:

Replace your_actual_api_key with your real GNews API Key from [gnews.io.](https://gnews.io/dashboard)

Ensure .env is not committed by adding it to .gitignore:

echo ".env" >> .gitignore

## 5️⃣ Start the Development Server
Run the project in development mode:

npm run dev
👉 This will start the app at: http://localhost:5173 (for Vite projects)
👉 Open it in your browser.
