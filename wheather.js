async function getWeather(city) {
  try {
    const response = await fetch(
      'https://weather-proxy.freecodecamp.rocks/api/city/' + encodeURIComponent(city)
    );
    if (!response.ok) {
      throw new Error('Request failed with status ' + response.status);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

async function showWeather(city) {
  const statusEl = document.getElementById('status');
  const readingEl = document.getElementById('reading');

  statusEl.textContent = 'Taking a reading\u2026';

  const data = await getWeather(city);

  if (!data) {
    statusEl.textContent = '';
    alert('Something went wrong, please try again later');
    return;
  }

  const weatherInfo = (data.weather && data.weather[0]) || {};
  const main = data.main || {};
  const wind = data.wind || {};

  const iconEl = document.getElementById('weather-icon');
  if (weatherInfo.icon != null) {
    iconEl.src = weatherInfo.icon;
    iconEl.alt = weatherInfo.description != null ? weatherInfo.description : '';
    iconEl.hidden = false;
  } else {
    iconEl.removeAttribute('src');
    iconEl.alt = '';
    iconEl.hidden = true;
  }

  const setText = (id, value, suffix = '') => {
    const el = document.getElementById(id);
    el.textContent = value != null ? value + suffix : 'N/A';
  };

  setText('main-temperature', main.temp, '\u00b0C');
  setText('feels-like', main.feels_like, '\u00b0C');
  setText('humidity', main.humidity, '%');
  setText('wind', wind.speed, ' m/s');
  setText('wind-gust', wind.gust, ' m/s');
  setText('weather-main', weatherInfo.main);
  setText('location', data.name);

  statusEl.textContent = '';
  readingEl.hidden = false;
}

document.getElementById('get-weather-btn').addEventListener('click', () => {
  const select = document.getElementById('city-select');
  if (!select.value) return;
  showWeather(select.value);
});async function getWeather(city) {
  try {
    const response = await fetch(
      'https://weather-proxy.freecodecamp.rocks/api/city/' + encodeURIComponent(city)
    );
    if (!response.ok) {
      throw new Error('Request failed with status ' + response.status);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

async function showWeather(city) {
  const statusEl = document.getElementById('status');
  const readingEl = document.getElementById('reading');

  statusEl.textContent = 'Taking a reading\u2026';

  const data = await getWeather(city);

  if (!data) {
    statusEl.textContent = '';
    alert('Something went wrong, please try again later');
    return;
  }

  const weatherInfo = (data.weather && data.weather[0]) || {};
  const main = data.main || {};
  const wind = data.wind || {};

  const iconEl = document.getElementById('weather-icon');
  if (weatherInfo.icon != null) {
    iconEl.src = weatherInfo.icon;
    iconEl.alt = weatherInfo.description != null ? weatherInfo.description : '';
    iconEl.hidden = false;
  } else {
    iconEl.removeAttribute('src');
    iconEl.alt = '';
    iconEl.hidden = true;
  }

  const setText = (id, value, suffix = '') => {
    const el = document.getElementById(id);
    el.textContent = value != null ? value + suffix : 'N/A';
  };

  setText('main-temperature', main.temp, '\u00b0C');
  setText('feels-like', main.feels_like, '\u00b0C');
  setText('humidity', main.humidity, '%');
  setText('wind', wind.speed, ' m/s');
  setText('wind-gust', wind.gust, ' m/s');
  setText('weather-main', weatherInfo.main);
  setText('location', data.name);

  statusEl.textContent = '';
  readingEl.hidden = false;
}

document.getElementById('get-weather-btn').addEventListener('click', () => {
  const select = document.getElementById('city-select');
  if (!select.value) return;
  showWeather(select.value);
});
