class Weather {
    constructor() {
        this.apiKey = '63017e8b72354ab88fc9bb035b87860b';
        this.city = city;
        this.state = state;
    }


// Fetch weather from API
    async getWeather() {
        const response = await fetch(`http;//api.openweathermap.org/data/2.5/weather?${}`);
    }
}
