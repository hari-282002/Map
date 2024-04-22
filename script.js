const btn = document.querySelector('#btn');
const country_container = document.querySelector('#country-container');
const map = document.getElementById('map');

function geo()
{
    if('geolocation' in navigator)
{
    // console.log(navigator.geolocation());    //Error: geolocation is not a function
    console.log(navigator.geolocation);         //geolocation is an object
    
    navigator.geolocation.getCurrentPosition(function (position){
        console.log(position); 
        // 'position' is an object. this object is named as 'GeoLocationPosition'

        const lat = position.coords.latitude;
        const long = position.coords.longitude;

        map.innerHTML = `<iframe src="https://maps.google.com/maps?q=${lat},${long}&z=15&output=embed"
        width="100%"
        height="100%"
        frameborder="0"
        style="border:none"
        allowfullscreen
        ></iframe>`
    });
}
}

btn.addEventListener('click',geo);