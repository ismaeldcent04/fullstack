export const CountryList = ({ countries }) => {
  return (
    <section>
      {countries.length <= 10 ? (
        countries.length == 1 ? (
          <>
            {countries.map((country) => {
              return (
                <div key={country.name.common}>
                  <h2>{country.name.common}</h2>
                  <p>Capital {country.capital[0]}</p>
                  <p>Area {country.area}</p>
                  {/* <h3>Languages:</h3>
                  <ul>
                    {country.languages.map((language) => (
                      <li key={language}>{language}</li>
                    ))}
                  </ul> */}
                  <img src={country.flags["png"]} />
                </div>
              );
            })}
          </>
        ) : (
          <div>
            {countries.map((country) => (
              <p key={country.name.common}>{country.name.common}</p>
            ))}
          </div>
        )
      ) : (
        <p>Too many matches, specify another filter</p>
      )}
    </section>
  );
};
