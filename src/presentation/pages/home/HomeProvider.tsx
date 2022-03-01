import { ContinentsEnum, HomeProviderInterface } from './Home';
import { FC, createContext, useMemo, useContext, useState, useCallback } from 'react';
import { useCountry } from '../../../infra/api/country/Country.hook';
import { useCountries } from '../../../infra/api/countries/Countries.hook';
import { useContinent } from '../../../infra/api/continent/Continent.hook';

const HomeContext = createContext<HomeProviderInterface>({} as HomeProviderInterface);

export function useHomeContext(): HomeProviderInterface {
  return useContext(HomeContext);
};

const HomeProvider: FC = ({ children }) => {
  const [continent, setContinent] = useState<ContinentsEnum | ''>('');

  const [selected, setSelected] = useState('');

  const countryQuery = useCountry(selected);

  const countriesQuery = useCountries({});

  const continentQuery = useContinent(continent);

  const country = useMemo(() => {
    return {
      data: countryQuery.data?.country,
      loading: countryQuery.loading,
      errorMsg: countryQuery.error?.message,
    };
  }, [countryQuery.data?.country, countryQuery.error?.message, countryQuery.loading]);

  const continentData = useMemo(() => {
    return continentQuery.data?.continent;
  }, [continentQuery.data?.continent]);

  const countries = useMemo(() => {
    return countriesQuery.data?.countries.filter((c) => {
      return c.continent.code === continent;
    });
  }, [continent, countriesQuery.data?.countries]);

  const onSelect = useCallback((value: string) => {
    setSelected(value);
  }, [])

  const onContinent = useCallback((value: ContinentsEnum) => {
    setContinent((old) => {
      if (old === value) {
        return '';
      }
      return value
    });
  }, []);

  return (
    <HomeContext.Provider
      value={{
        country,
        countries,
        errorMsg: countryQuery.error?.message,
        loading: countryQuery.loading,
        selected,
        continent,
        continentData,
        onSelect,
        onContinent,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export default HomeProvider;
