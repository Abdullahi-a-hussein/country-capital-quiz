export default function CityCard({ value, handleClick, match, country, city }) {
  return (
    <button
      className={`card ${
        match && city === value
          ? "match"
          : city === value && country
          ? "wrong"
          : city === value && !country
          ? "selected"
          : ""
      }`}
      onClick={() => handleClick(value)}
    >
      {value}
    </button>
  );
}

export function CountryCard({ value, handleClick, match, country, city }) {
  return (
    <button
      className={`card ${
        match && country === value
          ? "match"
          : country === value && city
          ? "wrong"
          : country === value && !city
          ? "selected"
          : ""
      }`}
      onClick={() => handleClick(value)}
    >
      {value}
    </button>
  );
}
