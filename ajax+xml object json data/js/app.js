//accessing an external api
document.getElementById('getJokes').addEventListener('click', getJokes);

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;

  //xhr request
  const xhr = new XMLHttpRequest;
  xhr.open('GET', `https://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);

      let output = '';
      console.log(response.type);
      if (response.type === 'success') {
        response.value.forEach(function (joke) {
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += `<li>Something went wrong</li>`;
      }
      document.querySelector('#jokes').innerHTML = output;
    }
  }

  //finalize
  xhr.send();

  e.preventDefault();
}