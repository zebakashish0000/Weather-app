 // Function to fetch weather data and update HTML elements
async function getData() {
	try {
	  const city = document.getElementById('search').value;
	  const apiKey = "fcc8de7015bbb202209bbf0261babf4c";
	  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
	  const response = await fetch(url);
	  if (!response.ok) throw new Error('Network response was not ok');
	  const data = await response.json();
  
	  // Update HTML elements with weather data
	  document.getElementById('temp').innerHTML = `${Math.round(data.main.temp)} <sup>o</sup>`;
	  document.getElementById('ws').textContent = data.wind.speed;
	  document.getElementById('hmdty').textContent = data.main.humidity;
	} catch (error) {
	  console.error('Error fetching weather data:', error);
	  alert('Error fetching weather data. Please try again later.');
	}
  }
  
  // Event listener for input changes to update weather data
  document.getElementById('search').addEventListener('change', async () => {
	await getData();
  });
  
  // Initial call to populate data on page load
  document.addEventListener('DOMContentLoaded', async () => {
	await getData();
  });


