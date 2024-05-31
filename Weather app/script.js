const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");
const searchInput = document.querySelector("[data-searchInput]");

const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const erroscreen=document.querySelector(".error-container");
const userInfoContainer = document.querySelector(".user-info-container");
let grantAccessButton=document.querySelector("[data-grantAccess]");
grantAccessButton.addEventListener("click",getlocation);



const apikey="554978f101763d8586a21a3b1e14bc9e";
let currentTab = userTab;
currentTab.classList.add("current-tab");
getlocalsessionstorage();



function switchTab(clickedTab) {
    if (clickedTab != currentTab) {
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");

        if (currentTab === userTab) {
            searchForm.classList.remove('active');
            userInfoContainer.classList.remove('active');
            grantAccessContainer.classList.remove('active');
            getlocalsessionstorage();
        } else {
            searchForm.classList.add('active');
            userInfoContainer.classList.remove('active');
            grantAccessContainer.classList.remove('active');
        }
    }
}
userTab.addEventListener("click",()=>{
    switchTab(userTab);

});
searchTab.addEventListener("click",()=>{
    switchTab(searchTab);
})



searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    let cityname=searchInput.value;
if(cityname==''){
    erroscreen.classList.add('active');
    setTimeout(()=>{
        erroscreen.classList.remove('active');
    },2000);
}
else{
    fetchweatherbycity(cityname);
}
});











function renderweather(info){

    let cityname = document.querySelector("[data-cityName]");
    let countryIcon = document.querySelector("[data-countryIcon]");
    let weatherdesc = document.querySelector("[data-weatherDesc]");
    let weathericon = document.querySelector("[data-weatherIcon]");
    let temp = document.querySelector("[data-temp]");
    const windspeed = document.querySelector("[data-windspeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");
    console.log(info);
 
        cityname.textContent=info?.name;
        countryIcon.src=`https://flagcdn.com/144x108/${info?.sys?.country.toLowerCase()}.png`;
        weatherdesc.textContent=info?.weather[0]?.description;
        weathericon.src=`http://openweathermap.org/img/w/${info?.weather?.[0]?.icon}.png`;
        temp.textContent=`${info?.main?.temp.toFixed(2)} °C`;
        windspeed.textContent=`${info?.wind?.speed} m/s`;
        humidity.textContent=`${info?.main?.humidity}%`;
        cloudiness.textContent=`${info?.clouds?.all}%`;
        
   
  

}
function getlocalsessionstorage(){
    let localData = sessionStorage.getItem('weatherData');
    if (!localData) {
        grantAccessContainer.classList.add('active');
    } else {
        let coordinates = JSON.parse(localData);
        getCustomWeather(coordinates);
    }
}

async function fetchweatherbycity(city){
    loadingScreen.classList.add('active');
    userInfoContainer.classList.remove('active');
    grantAccessContainer.classList.remove('active');
    try{
        var url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
        var response=await fetch(url);
        var data=await response.json();
        console.log('Weather Data:',data);
        loadingScreen.classList.remove('active');
        userInfoContainer.classList.add('active');
        renderweather(data);


    }
    catch(err){
        console.log('Error:',err);
        erroscreen.classList.add('active');
        setTimeout(()=>{
            erroscreen.classList.remove('active');
        },2000);
        loadingScreen.classList.remove('active');
        userInfoContainer.classList.remove('active');
        
    }
}




async function getcustomweather(coordinates){
let {lat,long}=coordinates;
loadingScreen.classList.add('active');
grantAccessContainer.classList.remove('active');
try{
    var url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apikey}&units=metric`;
    var response=await fetch(url);
    var data=await response.json();
    console.log('Weather Data:',data);
    userInfoContainer.classList.add('active');
    loadingScreen.classList.remove('active');
    renderweather(data);

}
catch(err){
    console.log('Error:',err);
    erroscreen.classList.add('active');
        setTimeout(()=>{
            erroscreen.classList.remove('active');
        },2000);
        loadingScreen.classList.remove('active');
        userInfoContainer.classList.remove('active');
    
}


}
 function getlocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showposition);
    }
    else{
        alert('Geolocation is not supported by this browser');

    }
 }
 function showposition(position){
    let usercords={
        lat: position.coords.latitude,
        long: position.coords.longitude


 }
 sessionStorage.setItem('weatherData',JSON.stringify(usercords));
 getcustomweather(usercords);


}