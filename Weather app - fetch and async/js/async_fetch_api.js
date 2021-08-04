async function showNasaDailyIMG() {
  //wait for response to return
  const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=1R9MZ1iBuqWCp9kPcd7WIwreEx9EvRhtsPF3rWe3');

  const nasaApi = await response.json();

  const nasaImg = nasaApi.hdurl;


  uiIMG = document.getElementById('nasaIMG');

  uiIMG.src = nasaImg;
  console.log(nasaImg);


}

showNasaDailyIMG();



//https://api.stlouisfed.org/fred/series/observations?series_id=GDPCA&frequency=a&observation_start=1999-04-15&observation_end=2021-01-01&file_type=json&api_key=5ccd6b3e3243bc74e43206c4dd85ba1e

//THIS SHOULD BE HIDDEN IN NODE JS
//const key = '5ccd6b3e3243bc74e43206c4dd85ba1e';


//https://api.nasa.gov/planetary/apod?api_key=1R9MZ1iBuqWCp9kPcd7WIwreEx9EvRhtsPF3rWe3

// fetch('https://api.nasa.gov/planetary/apod?api_key=1R9MZ1iBuqWCp9kPcd7WIwreEx9EvRhtsPF3rWe3')

//   .then(response => response.json())
//   .then(data => uiNasaIMG.src = data.url)

// const uiNasaIMG = document.getElementById('nasaIMG');




