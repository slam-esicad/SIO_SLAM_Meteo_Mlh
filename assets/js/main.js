import Element from "./Element.js";
async function weather(city, units) {
    let req = await fetch('https://api.openweathermap.org/data/2.5/weather?lat= '+ city +'" &appid=fed205b19d98bebe6acc15698579dc1e"')
    return await req.json()
}