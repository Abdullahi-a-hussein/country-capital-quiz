import pickedCountries from "./lib/country";
import { useState, useEffect } from "react";
import Cards from "./components/Cards";
import shuffleArray from "./lib/shuffler";

const selectedCountries = pickedCountries();

function App() {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  const countriesArray = shuffleArray(
    selectedCountries.map((value) => value.country)
  );
  const citiesArray = shuffleArray(
    selectedCountries.map((value) => value.capital)
  );
  const [cities, setCities] = useState(citiesArray);
  const [countries, setCountries] = useState(countriesArray);

  const match = () => {
    if (selectedCountry && selectedCity) {
      console.log("Selected Country:", selectedCountry);
      console.log("Selected City:", selectedCity);
      const matchingCountry = selectedCountries.filter(
        (value) => value.country === selectedCountry
      );
      console.log("Matching Country:", matchingCountry);
      return (
        matchingCountry.length > 0 &&
        matchingCountry[0].capital === selectedCity
      );
    }
    return false;
  };

  const handleReset = () => {
    setCountries(countriesArray);
    setCities(citiesArray);
    setSelectedCity("");
    setSelectedCountry("");
  };
  // const handlePlay = () => {

  // };
  useEffect(() => {
    if (countries.length === 0) {
      console.log("Game Over!");
    }
    // const match = () => {
    //   if (selectedCountry && selectedCity) {
    //     const matchingCountry = selectedCountries.filter(
    //       (value) => value.country === selectedCountry
    //     );
    //     return (
    //       matchingCountry.length > 0 &&
    //       matchingCountry[0].capital === selectedCity
    //     );
    //   }
    //   return false;
    // };
    const matched = match();
    if (cities.length === 0 || countries.length === 0) {
      return;
    } else if (matched) {
      setTimeout(() => {
        const prevCities = cities.filter((city) => city !== selectedCity);
        const prevCountries = countries.filter(
          (country) => country !== selectedCountry
        );
        setCities(prevCities);
        setCountries(prevCountries);
        setSelectedCity("");
        setSelectedCountry("");
      }, 1000);
    } else {
      if (selectedCity && selectedCountry) {
        setTimeout(() => {
          setSelectedCity("");
          setSelectedCountry("");
        }, 1000);
      }
    }
  }, [countries, cities, selectedCity, selectedCountry]);
  return (
    <div className="App">
      <header>
        <h1>Match coutry and it's capital city</h1>
        <button className="reset" onClick={handleReset}>
          Reset
        </button>
      </header>
      <div className="cards-container">
        <Cards
          countries={countries}
          cities={cities}
          onCityClick={(city) => setSelectedCity(city)}
          onCountryClick={(country) => setSelectedCountry(country)}
          country={selectedCountry}
          city={selectedCity}
          match={match()}
        />
      </div>
    </div>
  );
}

export default App;
