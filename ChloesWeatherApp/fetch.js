class Fetch {
    async getCurrent(input) {
      const myKey = "8a7e5b656cc7d438b6f5351762076e99";

      //make request to url  
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
      );
  
      const data = await response.json();  
      console.log(data);  
      return data;
    }
  }