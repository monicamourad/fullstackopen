const Country = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>
        <p className="countryDetail">Capital {country.capital[0]}</p>
        <p className="countryDetail">Area {country.area}</p>
      </div>
      <h2>Languages</h2>
      <ul>
        {Object.values(country.languages).map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
      <img src={country.flags.png} />
    </div>
  );
};
export default Country;
