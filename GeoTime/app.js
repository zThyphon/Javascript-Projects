const url="http://worldtimeapi.org/api/timezone";

var locations = document.querySelector(".locations");
var time_text = document.querySelector(".time-text");
var time = document.querySelector(".time");
var button = document.querySelector("button");
let html;

async function getLocations()
{
    await axios.get(url).then(response=>{
        response.data.forEach(location=>{
            html+="<option>"+location+"</option>"
        });
        locations.innerHTML+=html;
        
    });
}

getLocations();

async function getTime(location)
{
    await axios.get(url+"/"+location).then(response=>{
        time_text.innerHTML=moment(response.data.datetime).format('MM.YYYY - h:mm:ss a');
        time.style.display="block";
    });
}

button.addEventListener("click",function(){
    let location = locations.options[locations.selectedIndex].value;

    if(location != "Select Locations"){
        getTime(location);
    }
    else
    {
        alert("Select a location !");
    }

});