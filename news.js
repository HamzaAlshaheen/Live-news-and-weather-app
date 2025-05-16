function FetchData() {
      const query = document.getElementById('searchInput').value.trim();
      if (!query) {
        alert('Please enter a search term');
        return;
      }

      fetch(`https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&from=2025-04-15&sortBy=publishedAt&apiKey=YOUR_API_KEY_HERE`) //Fetch your API key 
        .then(response => response.json())
        .then(data => {
          let container = document.getElementById('card');
          container.innerHTML = '';

          if (!data.articles.length) {
            container.innerHTML = 'No articles found';
            return;
          }

          data.articles.forEach(article => {
            const newsHTML = `
              <div class="news-item">
                ${article.urlToImage ? `<img src="${article.urlToImage}" alt="News Image">` : ''}
                <h2>${article.title}</h2>
                <p>${article.description || 'No description available.'}</p>
                <a href="${article.url}" target="_blank">Read more</a>
              </div>
            `;
            container.innerHTML += newsHTML;
          });
        })
        .catch(err => {
          document.getElementById('card').innerText = 'Failed to fetch news.';
          console.error(err);
        });
    }

window.addEventListener('load', () => {
  const defQuery = 'New';  
  document.getElementById('searchInput').value = defQuery;
  FetchData(defQuery);        
});