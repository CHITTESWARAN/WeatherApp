const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weathericon =document.querySelector(".weathericon");

async function checkWeather(city) {
   try{
   const apiKey = "aac52d4cd426d082fd3ad8a88e14be13";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${city}&appid=${apiKey}`;
   const response = await fetch(apiUrl);
   const data = await response.json();
   console.log(data);
   document.querySelector(".city").innerHTML=data.name;
   document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°C ";
   document.querySelector(".humidity").innerHTML=data.main.humidity+ "%";
   document.querySelector(".Wind").innerHTML=data.wind.speed+"km/hr";
   if(data.weather[0].main ==="Clouds")
   {
       weathericon.src="images/clouds.png";
   }
   else if(data.weather[0].main==="Clear")
   {
       weathericon.src="images/clear.png";
   }
   else if(data.weather[0].main==="Rain")
   {
       weathericon.src="images/rain.png";
   }
   else if(data.weather[0].main==="Drizzle"){
       weathericon.src="images/drizzle.png";
   }
   else if(data.weather[0].main==="Mist"){
       weathericon.src="images/mist.png";
   }
   document.querySelector(".weather").style.display= block;
}
catch(error){
   document.querySelector(".city").innerHTML="City not the found";
   document.querySelector(".temp").innerHTML=" ";
   document.querySelector(".humidity").innerHTML=" ";
   document.querySelector(".Wind").innerHTML=" ";
} }


searchBtn.addEventListener("click",()=>{
checkWeather(searchBox.value);
});