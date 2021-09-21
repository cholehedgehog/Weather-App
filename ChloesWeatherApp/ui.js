
class UI {
    constructor() {
        this.uiContainer = $('#weatherResult');
        this.city;
        this.defaultCity = "London";
    }

    populateUI(data) {

        let valNumMax = parseFloat(data.main.temp_max);
        let valNumMin = parseFloat(data.main.temp_min);
        const convertFar = function(degree) {
            let newFar = ((degree-273.15)*1.8)+32;
            return newFar.toFixed(1);
        };


        //add them to inner HTML
        this.uiContainer.html(`        
            <div class="card mx-auto mt-5" style="width: 18rem;">
                <h5 class="card-title">${data.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Highs of ${convertFar(valNumMax)}. Lows of ${convertFar(valNumMin)}</h6>
                <p class="card-text ">Weather conditions are described as: ${data.weather[0].description}</p>
                <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png">
            </div>        
            `);
    }
}