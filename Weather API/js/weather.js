class Weather {
  constructor(city) {
    this.key = 'dc43671ece1b9a6caad73585a1db9b38';
    this.city = city;
  }

  async getWeather() {
    //NOTE KEY 
    // const response = await fetch(`http://api.weatherstack.com/current?access_key=${this.key}&query=${this.city}`);
    //NOTE NOKEY
    const response = await fetch('example.json');
    const responseData = await response.json();
    // console.log(responseData.current);
    return responseData;

  }

  changeLocation(city) {
    this.city = city;
  }
}

