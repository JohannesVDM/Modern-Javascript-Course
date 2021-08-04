class UI {
  constructor() {
    this.location = document.querySelector('#w-location');
    this.desc = document.querySelector('#w-desc');
    this.string = document.querySelector('#w-string');
    this.details = document.querySelector('#w-details');
    this.icon = document.querySelector('#w-icon');
    this.humidity = document.querySelector('#w-humidity');
    this.uv = document.querySelector('#w-uv');
    this.feelsLike = document.querySelector('#w-feels-like');
    this.wind = document.querySelector('#w-wind');
  }

  paint(weather) {
    this.location.textContent = `${weather.location.name} ${weather.location.region}`;
    this.desc.textContent = weather.weather_descriptions;
    this.string.textContent = `${weather.current.temperature} C`;
    this.icon.setAttribute('src', weather.current.weather_icons[0]);
    this.humidity.textContent = `Relative humidity: ${weather.current.humidity}%`;
    this.uv.textContent = `UV Index: ${weather.current.uv_index}`;
    this.feelsLike.textContent = `Feels like: ${weather.current.feelslike} C`;
    this.wind.textContent = `Wind Speed:  ${weather.current.wind_speed} Knots`;
  }
}