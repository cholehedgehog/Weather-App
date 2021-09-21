
const weather = new Fetch();
const ui = new UI();

const locationPick = $('#locationName');
const submit = $('#submit');



locationPick.keyup(function(event) {
    if (event.keyCode === 13) {
        submit.click();
    }
});

submit.on("click", function() {
    console.log(locationPick.val());
    const currentVal = locationPick.val();
    weather.getCurrent(currentVal).then((data) => {
        
        //call a UI method//
        ui.populateUI(data);
        //call saveToLS
        //ui.saveToLS(data);
        });
});