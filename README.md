# 🛠️ Job Finder Bot

## 📖 Project Description
A Real-Time Job Finder Bot built using React.js, integrated with the JSearch API to fetch and display job listings. The application allows users to search for jobs, view job details, and apply directly through provided links. It features a dynamic user interface with reusable components and API integration to fetch real-time job data.

## 🖥️ Features
Real-time job search functionality.
Responsive design for desktop and mobile devices.
Dynamic job cards with details such as title, company, description, and apply link.
Easy-to-use interface with search and filter options.

## ⚙️ Technologies Used
- React.js
- Axios
- JSearch API
- HTML5, CSS3

🚀 Steps to Run the Project Locally
1. Clone the Repository
git clone https://github.com/yourusername/JobFinderBot.git
2. Navigate to the Project Directory
:cd JobFinderBot
3. Install Dependencies
Run the following command to install all the required packages:npm install
4. Set Environment Variables
Create a .env file in the root directory to store your API key securely.
REACT_APP_API_KEY=your_api_key_here
5. Start the Server
Run the following command to start the React development server:npm start

📄 Usage
Open the application in your browser.
Enter a job title or keyword in the search bar.
Click the Search button to view job listings.
Click on Apply Now links to apply for jobs directly.
Use Swagger UI to test API endpoints (http://localhost:8000/api-doc).

📚 API Documentation
The project uses the JSearch API from RapidAPI to fetch job listings in real-time.

Endpoint:
https://jsearch.p.rapidapi.com/search

Headers:{
  "X-RapidAPI-Key": "your_api_key_here",
  "X-RapidAPI-Host": "jsearch.p.rapidapi.com"
}
Query Parameters:

query: Job title or keyword (e.g., "Software Engineer").
num_pages: Number of pages to return (default: 1).

