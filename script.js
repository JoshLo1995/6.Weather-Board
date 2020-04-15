var prevSearched = [];
var searchURL = "http://api.openweathermap.org/data/2.5/forecast?q=";
const apiKey = "&APPID=7e6a24a68dbf04f8280d98667782c96b"
//var weatherData;
var date;
var iconImage;
var temperature;
var humidity;
var windSpeed;
var uvIndex;
const storeage = window.localStorage;

// Set to 0 for the first time that the program runs
// var counter = 0;
var prevSearchedCities = [];

$(document).ready(() => {
    var counter;
    counter = loadPrevSearched(counter);

    // Submit button click listener
    $("#submitButton").click(() => {
        console.log("Submit has been clicked!");

        getWeatherData();
        addPrevSearched(counter);
        clearSearchField();
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
function loadPrevSearched(counter) {
    if (localStorage.getItem('counter') == null) {
        counter = 0;
        console.log('Running null code');
        return counter;
    } else {
        console.log("Not running null code");
        counter = localStorage.getItem('counter');
    
        for (let i = 0; i <= counter; i++) {
            prevCity = localStorage.getItem(`searchedCity${i}`);
            prevSearchedCities.push(prevCity);
            $("#prevSearched").append(`<li>${prevCity}</li>`);
        }
    }

    return counter;
}

// Search city and get weather data
function getWeatherData() {
    let searchCity = $("#searchBar").val();

    // pass searchCity into an api call
    $.ajax({
        url: searchURL + searchCity + apiKey,
        success: (result) => {
            let data = result.list;
            console.log(data);
            
            for (let i = 0; i < 6; i++) {
                // Assign variables to results and then call display weather
                date = data[i].dt_txt;
                iconImage = data[i].weather[0].icon;
                temperature = `${Math.floor((data[i].main.temp - 273.15) * (9/5) + 32)}F`; // Freedom unit conversion
                humidity = `${data[i].main.humidity}%`;
                windSpeed = `${data[i].wind.speed} miles/hr`;
    
                $("#weatherDisplay" + i).empty();

                displayWeatherData(date, iconImage, temperature, humidity, windSpeed, i, searchCity);
            }
        }
    });
}

// add to prevSearched
function addPrevSearched(counter) {
    let searched = false;
    let addToSearched = $("#searchBar").val();

    // Check to see if addToSearched is in previouslySearched
    if (addToSearched in prevSearchedCities) {
        // if addtosearched is in prevsearched, don't add
        searched = true;

    }
    if (!searched) {
        // append to #prevSearched 
        $("#prevSearched").append(`<li>${addToSearched}</li>`);

        // save prevSearched to localstorage
        counter++;
        localStorage.setItem(`searchedCity${counter}`, addToSearched);
        localStorage.setItem('counter', counter);
        console.log(counter);
        return counter;
    }   
}

// Get weather data
// Display weather data
function displayWeatherData(date, iconImage, temperature, humidity, windSpeed, i, searchCity) {
    iconURL = `http://openweathermap.org/img/w/${iconImage}.png`;
    // Load today's weather in main block
    // Then load weather into the rest of the blocks

    if (i == 0) {
        $("#weatherDisplay" + i).append(`${searchCity} ${moment().format('MMMM Do')}`);
        appendGeneric();
    } else {
        $("#weatherDisplay" + i).append(`<div>${moment().format('MMMM Do')}</div>`);
        appendGeneric();
    }

    if (i == 0) {
        $("#weatherDisplay" + i).append(`<div>Wind Speed: ${windSpeed}</div>`);
    } 

    function appendGeneric() {

        $("#weatherDisplay" + i).append(`<img src = ${iconURL}>`);
        $("#weatherDisplay" + i).append(`<div>Temp: ${temperature}</div>`);
        $("#weatherDisplay" + i).append(`<div>Humidity: ${humidity}</div>`);
    }
    
}

function clearSearchField() {
    
}
