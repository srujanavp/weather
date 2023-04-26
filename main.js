function getInfo() {
    var newName=document.getElementById("cityInput");
    var cityName=document.getElementById("cityName");
    cityName.innerHTML= "Weather in " +newName.value;


fetch("https://api.openweathermap.org/data/2.5/forecast?q="+newName.value+"&appid=e64f4b51ceddad8341374af484d92a7a")
.then(response => response.json())
.then(data =>{
    for(i=0;i<5;i++){
    document.getElementById("day"+(i+1)+"Min").innerHTML="Min:" +Number(data.list[i].main.temp_min -306).toFixed(1)+"°";
}
for(i=0;i<5;i++){
    document.getElementById("day"+(i+1)+"Max").innerHTML="Max:" +Number(data.list[i].main.temp_max -306).toFixed(1)+"°";
}
// for(i=0;i<5;i++){
//     document.getElementById("img"+(i+1)).src="https://openweathermap.org/img/wn"+data.list[i].weather[0].icon+".png";
// }

for(i = 0; i<5; i++){
    document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
    data.list[i].weather[0].icon
    +".png";
}

console.log(data)
})

.catch(err => alert("Something went wrong"))
}
function defaultscreen(){
    document.getElementById("cityInput").defaultValue="Chitradurga";
    getInfo();
}
var d=new Date();
var weekday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function checkDay(day) {
    if(day +d.getDay()>6){
        return day +d.getDay()-7;
    }
    else{
        return day +d.getDay();
    }
}

for(i=0;i<5;i++){
    document.getElementById("day"+(i+1)).innerHTML=weekday[checkDay(i)];
}