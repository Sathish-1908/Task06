var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
  var res = JSON.parse(request.response);
  console.log(res);

  var con = res.filter((ele) => ele.continents == "Asia");

  var cname = con.map(function (num) {
    return `country name is ${num.name.common} and region is ${num.region}`;
  });
  //Get all the countries from Asia continent /region using Filter function
  console.log(cname);

  var pop = res.filter((ele) => ele.population < 200000);
  var name = pop.map((ele) => {
    return `country name which have population less than 2 lakhs is ${ele.name.common}`;
  });
  //Get all the countries with a population of less than 2 lakhs using Filter function
  console.log(name);

  var popu = res.map((ele) => ele.population);
  var total = popu.reduce((acc, cv) => acc + cv, 0);
  //Print the total population of countries using reduce function

  console.log(`Total population of all countries is ${total}`);
};
