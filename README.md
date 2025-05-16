# News & Weather Dashboard
![Project Banner](/Banner.png)
---

## Overview

This project is a **News & Weather Dashboard** web app that combines real-time news fetching and weather display based on the user's current location or search input. The main focus of this project is to **learn how to work with APIs and manipulate the DOM using JavaScript**. This project provides hands-on experience with asynchronous JavaScript (fetch, promises, async/await), event handling, and dynamic HTML updates.

---

## Features

- **Search News**: Users can search for news articles by keywords using a public News API.
- **Current Location Weather**: Automatically detects the user's geographic location and displays current weather info.
- **City Image Display**: Fetches a relevant city image using the Pexels API to enhance the visual experience.
- **Dynamic UI Updates**: News articles and weather info dynamically update without page reloads.
- **Responsive Layout**: Clean and user-friendly interface with sections for weather and news.

---

## APIs Used

### 1. News API  
- Fetches news articles based on search queries and sorting by date.  
- **Get Your Own API Key**:  
  - Visit [NewsAPI](https://newsapi.org/)  
  - Sign up for a free account  
  - Generate your API key on your dashboard  
  - Replace the key in the source code with your own

### 2. Open-Meteo API  
- **Endpoint**: `https://api.open-meteo.com/v1/forecast`  
- Provides current weather data based on latitude and longitude coordinates.  
- No API key required, free and open.

### 3. Pexels API  
- Fetches high-quality stock images related to the city.  
- **Get Your Own API Key**:  
  - Sign up at [Pexels](https://www.pexels.com/api/)  
  - Create an API key  
  - Replace the key in the source code with your own

### 4. OpenStreetMap Nominatim  
- `https://nominatim.openstreetmap.org/reverse`  
- Reverse geocoding to get city and country name from latitude and longitude.  
- Free usage with usage policy, no API key required.
---

## How to Use

1. **Clone the repository:**
   ```bash
   git clone https://github.com/HamzaAlshaheen/Live-news-and-weather-app.git

## Setup

- Open the project in your code editor (e.g. VSCode).
- Replace the API keys in `news.js` and `weather.js` with your own keys.
- Open `index.html` in a browser (preferably via a local server for fetch to work properly, e.g. VSCode Live Server).

## Tools & Technologies Used

- **JavaScript (ES6+)** 
- **HTML5 & CSS3**  
- **Fetch API** 
- **VSCode**  
- **ChatGPT**
- **Browser DevTools**
- **NewsAPI, Weather API, Pexels API**
- **Canva**

---

## License

This project is open source and free to use under the **MIT License**.

---
Feel free to reach out for questions, suggestions, or collaborations!
Thanks for checking out this project! 🚀  
Happy coding! 🎉
