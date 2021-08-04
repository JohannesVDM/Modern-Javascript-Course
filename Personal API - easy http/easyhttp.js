//ES5 library (AJAX ~ xhr)

function easyHTTP() {
  //usually xhr
  this.http = new XMLHttpRequest();
}


//make an http get request
easyHTTP.prototype.get = function (url, callback) {
  this.http.open('GET', url, true);
  let self = this;

  this.http.onload = function () {
    if (self.http.status === 200) {
      //this pertains to a function and wont work
      //console.log(self.http.responseText);
      callback(null, self.http.responseText);
    } else {
      callback(`Error: ${self.http.status}`);
    }
  }
  this.http.send();
}


console.log(easyHTTP);

//make an http post request
easyHTTP.prototype.post = function (url, data, callback) {
  this.http.open('POST', url, true);

  this.http.setRequestHeader('Content-type', 'application/json')

  let self = this;

  this.http.onload = function () {
    callback(null, self.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}

//make an http put request
easyHTTP.prototype.put = function (url, data, callback) {
  this.http.open('PUT', url, true);

  this.http.setRequestHeader('Content-type', 'application/json')

  let self = this;

  this.http.onload = function () {
    callback(null, self.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}


//make an http get request
easyHTTP.prototype.get = function (url, callback) {
  this.http.open('GET', url, true);
  let self = this;

  this.http.onload = function () {
    if (self.http.status === 200) {
      //this pertains to a function and wont work
      //console.log(self.http.responseText);
      callback(null, self.http.responseText);
    } else {
      callback(`Error: ${self.http.status}`);
    }
  }
  this.http.send();
}

//make an http delete request
