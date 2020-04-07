var prevSearched = [];
var searchURL = "http://api.openweathermap.org/data/2.5/forecast?q=";
const apiKey = "&APPID=7e6a24a68dbf04f8280d98667782c96b"
var weatherData;
$(document).ready(() => {


    // Submit button click listener
    $("#submitButton").click(() => {
        console.log("Submit has been clicked!");

        let returnData = searchCity(weatherData);
        console.log(returnData);
        addPrevSearched();
        getWeatherData(returnData);
    });

    // // Search bar action on 'enter' key
    // $("#searchBar").bind("enterKey", (e) => {
    //     console.log("Enter has been pressed!");

    //     searchCity();
    // });
    // $('#searchBar').keyup((e) => {
    //     if (e.keyCode == 13) {
    //         $(this).trigger("enterKey");
    //     }
    // });

});

// Load list of prevSearched cities from localStorage
    // append to #prevSearched
function loadPrevSearched() {

}

// Search city and get weather data
function searchCity() {
    let searchCity = $("#searchBar").val();
    let data;

    // pass searchCity into an api call
    $.ajax({
        url: searchURL + searchCity + apiKey,
        success: (result) => {
            data = result;

            return data;
        }
    });

    return data;
}

// add to prevSearched
function addPrevSearched() {
    let addToSearched = $("#searchBar").val();

    // append to #prevSearched 
    $("#prevSearched").append(`<li>${addToSearched}</li>`);

    // save prevSearched to localstorage
}
// Get weather data
function getWeatherData(data) {
    let date;
    let iconImage;
    let temperature;
    let humidity;
    let windSpeed;
    let uvIndex;

}
// Display weather data
function displayWeatherData() {

}
