import CityCardCard, { CountryCard } from "./Card";

function CityCards({ values, onCityClick, match, country, city }) {
  const cards = values.map((value, index) => (
    <CityCardCard
      value={value}
      key={index}
      handleClick={onCityClick}
      match={match}
      country={country}
      city={city}
    />
  ));
  return <div className="side">{cards}</div>;
}

function CountryCards({ values, onCountryClick, match, city, country }) {
  const cards = values.map((value, index) => (
    <CountryCard
      value={value}
      key={index}
      handleClick={onCountryClick}
      match={match}
      city={city}
      country={country}
    />
  ));
  return <div className="side">{cards}</div>;
}

export default function Cards({
  countries,
  cities,
  onCountryClick,
  onCityClick,
  country,
  city,
  match,
}) {
  return (
    <>
      <CountryCards
        values={countries}
        onCountryClick={onCountryClick}
        match={match}
        city={city}
        country={country}
      />
      <CityCards
        values={cities}
        onCityClick={onCityClick}
        match={match}
        country={country}
        city={city}
      />
    </>
  );
}
