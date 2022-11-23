function getCountriesWithAsia(countries) {
    countries.filter(getCountry)

    function getCountry(country){
        return country.continent = asia
    }
}

function getCountriesWithPopulation(countries) {
    countries.filter(getCountry)

    function getCountry(country){
        return country.population > 2
    }
}

function getDetails(countries) {
    countries.array.forEach(element => {
        console.log("Name:"+element.name +" Capital:"+ element.capital +" Flag:"+ element.flag)
    });
}
 
function getTotalPopulation(countries) {
    countries.reduce(getTotal,0) 

    function getTotal(sum,num) {
        return sum+num
    }
}

function getCountriesWithCurrency(countries) {
    countries.map( country => {
        country.currency === "US Dollay" && console.log(country.name)
    })
}