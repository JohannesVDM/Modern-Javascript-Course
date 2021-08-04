//XMLHttpRequest and Fetch
//jQuery Ajax, Axios and other Http libraries.
//Node.js fs (filesystem) module

//- callbacks
//- promises
//- async/await

//AJAX
// ajax asynchronous javascript & xml
// xml is rarely used with ajax 
//JSON data is rather used

document.getElementById('button').addEventListener('click', loadData);
function loadData() {

  //create XHR Object
  const xhr = new XMLHttpRequest();

  //open 
  xhr.open('GET', 'data.txt', true);

  //optional - used for spinners/loaders
  //xhr.onprogress = function () {
  //  console.log('ReadyState', xhr.readyState);
  //}

  //new
  xhr.onload = function () {
    //console.log('ReadyState', xhr.readyState); 1,2,3,4 runs

    if (this.status === 200) {
      console.log(this.responseText);

      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }

  //error handling 
  xhr.onerror = function () {
    console.log('request error...');
  }

  //old
  // xhr.onreadystatechange = function () {


  //   if (this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // }

  //finalized ajax request 
  xhr.send();

  //HTTP Statuses
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"

  //ReadyState Values
  //0: request not initialized
  //1: server connection established
  //2: request received
  //3: processing request 
  //4: request finished and response is ready


}