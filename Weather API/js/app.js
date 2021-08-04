const weather = new Weather('New York');

const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
  weather.getWeather()
    .then(a => {
      ui.paint(a);
      console.log(a);
    })
    .catch(err => {
      console.log(err)
    });
}