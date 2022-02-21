/* Global Variables */
// My API Key 
const abiKey = 'e9a9195ff30cd4fec4ce6c2e0d9e1ad9&units=imperial';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1 +'.'+ d.getDate()+'.'+ d.getFullYear();
// EventsListener for generate botton and async function to get date from abiUrl
document.getElementById('generate').addEventListener('click', async()=>{
    // Get zip code
    let zipCode = document.querySelector('#zip').value;
    // Get feelings
    let feelings = document.querySelector('#feelings').value;
    // Get data from apiUrl
    const abiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${abiKey}&units=imperial`;
    // Use fetch() to get url data response
    let urlResponse = await fetch(abiUrl);
    // Convert data from stream to json
    let jsonResponse = await urlResponse.json();
    // Get temp from data main
    let temp = jsonResponse.main.temp;
    /* Initialize all end point route (client side) */
    // Use fetch() to post data  
    await fetch('/postRoute', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            date: newDate,
            temp: temp,
            feelings: feelings
        })
    });
    updateUI();
});
// Update UI with async await fech to get data 
let updateUI = async () => {
    // Use fetch() to get data
    let getData = await fetch('/getRoute');
    // Convert data from stream to json
    let jsonData = await getData.json();
    console.log(jsonData);
    document.getElementById('date').innerHTML = `Date: ${jsonData.date}`;
    document.getElementById('temp').innerHTML = `Temperatuer: ${jsonData.temp}`;
    document.getElementById('content').innerHTML = `Feeling: ${jsonData.feelings}`;
};








