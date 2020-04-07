var prevSearched = [];
var searchURL = "http://api.openweathermap.org/data/2.5/forecast?q=";
const apiKey = "&APPID=7e6a24a68dbf04f8280d98667782c96b"
$(document.ready(() => {


    // Submit button click listener
    $("#submitButton").click(() => {
        console.log("Submit has been clicked!");
    });

    // Search bar action on 'enter' key
    $("#searchBar").bind("enterKey", (e) => {
        console.log("Enter has been pressed!");

        searchCity();
    });
    $('#searchBar').keyup((e) => {
        if (e.keyCode == 13) {
            $(this).trigger("enterKey");
        }
    });

}))

// Load list of prevSearched cities from localStorage
    // append to #prevSearched
function loadPrevSearched() {

}

// Search city
function searchCity() {
    let searchCity = $("#searchBar").val();
    // pass searchCity into an api call

    $.ajax({
        url: searchURL + searchCity + apiKey,
        success: (result) => {
            console.log(result);
        }
    })
}
// add to prevSearched
function addPrevSearched() {

}
    // append to #prevSearched 
    // save prevSearched to localstorage

// Get weather data
function getWeatherData() {

}
// Display weather data
function displayWeatherData() {

}
