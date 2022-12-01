//              full stack development day 7 task ( JS )

// 1. a ) all the countries from the asia continent region using filter function 

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function()
{
    var data = request.response
    var result = JSON.parse(data)
    var asia = result.filter((ele)=>ele.region =="Asia" && ele.continents == "Asia")
    var result1 = asia.map((ele)=>{console.log("country name :",ele.name.common)})
}

// ______________________________________________________________________________________________________________________________


// 1. b) all the countries with a population of less than 2 lakhs

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function()
{
    var data = request.response
    var result = JSON.parse(data)
    var num_pop = result.filter((ele)=>ele.population<200000)
    var result1 = num_pop.map((ele)=>console.log(ele.name.common +" : "+ele.population))
}

// ______________________________________________________________________________________________________________________________

// 1. c) details of name, captial, flag using forEach function

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send()
 request.onload=function(){
    var data = request.response
    var result = JSON.parse(data)
    var res = result.forEach((ele)=>{console.log(`country name : ${ele.name.common}, capital : ${ele.capital}, flag : ${ele.flag}`)})
    }

// ______________________________________________________________________________________________________________________________


// 1. d ) total population of countries using reduse function

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function()
{
    var data = request.response
    var result = JSON.parse(data)
    var total_pop = result.reduce((acc,cv)=>acc + cv.population,0)
    console.log(total_pop);
}

// ______________________________________________________________________________________________________________________________

// 1. e ) which countries use US dollar

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all")
request.send()
request.onload = function()
{
    var data = request.response
    var result = JSON.parse(data)
    var result1 = result.filter((ele)=>{
    for(var i in ele.currencies)
    {
        if(ele.currencies[i].code=="USD")
        {
            console.log(ele.name);
        }
    }
})

}

// ______________________________________________________________________________________________________________________________