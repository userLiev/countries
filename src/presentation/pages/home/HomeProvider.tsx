import { CountryProviderInterface } from './Home';
import { FC, createContext, useMemo, useContext, useState, useCallback } from 'react';
import { useCountry } from '../../../api/country/Country.hook';
import { useCountries } from '../../../api/countries/Countries.hook';

const CountryContext = createContext<CountryProviderInterface>({} as CountryProviderInterface);

export function useCountryContext(): CountryProviderInterface {
  return useContext(CountryContext);
};

const CountryProvider: FC = ({ children }) => {
  const [selected, setSelected] = useState('');

  const countryQuery = useCountry(selected);
  const countriesQuery = useCountries({});

  const country = useMemo(() => {
    return countryQuery.data?.country;
  }, [countryQuery.data?.country]);

  const countries = useMemo(() => {
    return countriesQuery.data?.countries;
  }, [countriesQuery.data?.countries]);

  const onSelect = useCallback((value: string) => {
    setSelected(value);
  }, [])

  return (
    <CountryContext.Provider
      value={{
        country,
        countries,
        error: countryQuery.error,
        loading: countryQuery.loading,
        selected,
        onSelect,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export default CountryProvider;
