//Set Api Key
const api_key = "3QR0XBknGFfXeJaICV9PXxWzDvpZ8NTj"; 


//Get City Information from Api
async function getCity(location)
{   
    //Set Url
    const url = "http://dataservice.accuweather.com/locations/v1/cities/search";
    //Set Query
    const query = "?apikey="+api_key+"&q="+location;
    //Set Request
    request = url+query;
    //Send Requet to Api
    const response = await fetch(request);
    //Take Response from Api

    //Take data set as json
    const data = await response.json();

    //Return corresponding data from dataset 
    return data[0];
}

async function getWeatherInfo(id)
{
    //Set Url
    const url = "http://dataservice.accuweather.com/currentconditions/v1/";
    //Set Query
    const query = id+"?apikey="+api_key;
    //Set Request
    const request = url+query;
    
    //Send Requet to Api
    const response = await fetch(request);
    //Take Response from Api

    //Take data set as json
    const data = await response.json();
    

    //Return corresponding data from dataset 
    return data[0];
}

