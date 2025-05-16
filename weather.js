
    const PEXELS_KEY = 'Your_API_KEY_HERE'; //Put your API key here
    function showWeather(lat, lon, cityName) {
      const weatherURL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
      

      fetch(weatherURL)
        .then(res => res.json())
        .then(data => {
          const weather = data.current_weather;
          document.getElementById('weather').innerHTML = `
            <p><strong>Temperature:</strong> ${weather.temperature} °C</p>
            <p><strong>Windspeed:</strong> ${weather.windspeed} km/h</p>
          `;
        });

      document.getElementById('cityName').innerText = cityName;

      
      fetch(`https://api.pexels.com/v1/search?query=${cityName}&per_page=1`, {
        headers: {
          Authorization: PEXELS_KEY
        }
      })
        .then(res => res.json())
        .then(data => {
          const photo = data.photos[0];
          document.getElementById('cityImg').src = photo ? photo.src.landscape : '';
        })
        .catch(err => {
          console.error('Image fetch error:', err);
          document.getElementById('cityImg').alt = "No image found";
        });
    }

    function getCityName(lat, lon) {
      const geoURL = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;

      fetch(geoURL)
        .then(res => res.json())
        .then(data => {
          const city = data.address.city || data.address.town || data.address.village || 'Your City';
          const country = data.address.country || '';
          showWeather(lat, lon, `Current location: ${city}, ${country}`);
        })
        .catch(() => showWeather(lat, lon, 'your city'));
    }

    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;
          getCityName(lat, lon);
        }, () => {
          document.getElementById('cityName').innerText = 'Location permission denied.';
        });
      } else {
        document.getElementById('cityName').innerText = 'Geolocation not supported.';
      }
    }

    window.addEventListener('load', getLocation);