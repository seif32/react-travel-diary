import { useCities } from "../context/CitiesContext";
import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";

function CountryList() {
  const { isLoading, cities } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message
        message={`Adding your first city by choosing it on the map! 🗺`}
      />
    );

  const countries = [...new Set(cities.map((city) => city.country))];
  return (
    <div>
      <ul className={styles.countryList}>
        {countries.map((country, index) => (
          <CountryItem country={country} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default CountryList;
