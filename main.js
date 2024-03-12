let searchBtn = document.getElementById("search-btn");
let searchInput = document.getElementById("inpt-country");
let result = document.getElementById("result");

// lets add an event listener
searchBtn.addEventListener("click", () => {
  let countryName = searchInput.value;
  let countryURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(countryURL);
  fetch(countryURL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0]);
      console.log(data[0].capital[0]);
      console.log(data[0].flags.svg);
      console.log(data[0].name.common);
      console.log(data[0].continents[0]);
      console.log(Object.keys(data[0].currencies)[0]);
      console.log(data[0].currencies[Object.keys(data[0].currencies)[0]].name);
      console.log(
        Object.values(data[0].languages).toString().split(",").join(",")
      );

      result.innerHTML = `
      <img src="${data[0].flags.svg}" class="flag-img">
      <h2>${data[0].name.common}</h2>
      <div class="con-details">
        <div class="con-data">
          <h4>Capital:</h4>
          <span> ${data[0].capital[0]}</span>
        </div>
      </div>
      <div class="con-details">
        <div class="con-data">
          <h4>Continent:</h4>
          <span> ${data[0].continents[0]}</span>
        </div>
      </div>
      <div class="con-details">
        <div class="con-data">
          <h4>Currencies:</h4>
          <span> ${Object.keys(data[0].currencies)[0]}</span>
        </div>
      </div>
      <div class="con-details">
        <div class="con-data">
          <h4>Common Languages:</h4>
          <span> ${Object.values(data[0].languages).toString().split(",").join(",")}</span>
        </div>
      </div>
      <div class="con-details">
        <div class="con-data">
          <h4>Population:</h4>
          <span> ${data[0].population}</span>
        </div>
      </div>
      `;
    })
  .catch(() => {
    if(countryName == 0){
      result.innerHTML = `<h3>Please fill In the Input field...</h2>`;
    }else{
      result.innerHTML = `<h3>Please endter valid country...<h3>`;
    }
  })
});


