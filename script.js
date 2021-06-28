//Solving problem using array functions on rest countries data using index.html and script.js file
//(using rest countries api)
var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    console.log(data);

    //1. Get all the countries from asia continent/region using filter function
    var countries=data.filter((ele)=>ele.region==="Asia");
    console.log(countries);

    //2. print the sum of the total population of the countries using reduce function
    var res = data.reduce(function foo(acc,ele){
     return acc+ele.population;
    },0);
    console.log(res);

    //3. Get all the countries with population of less than 2 lacs using Filter function
    var population=data.filter((ele)=>ele.population<200000);
    console.log(population);

    //4. Get the country name,capital,flag by using forEach
    data.forEach(element=>{
        console.log(element.name+" "+element.capital+" "+element.flag);
    })

    //5. print the country which use US Dollars as currency
    let curr=data.filter((ele)=>{
        for(var i in ele.currencies){
            if(ele.currencies[i].code==='USD'){
                return true;
            }
        }
    }).map(ele=>console.log(ele.name));   
}