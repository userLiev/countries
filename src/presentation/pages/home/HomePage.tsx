import { FC } from 'react';
import Continents from '../../components/continents/Continents';
import Countries from '../../components/countries/Countries';
import HomeProvider, { useHomeContext } from './HomeProvider';

const CountryPage: FC = () => {
  return (
    <HomeProvider>
      <CountryContent />
    </HomeProvider>
  )
};

const CountryContent: FC = () => {
  const {
    country,
    countries,
    selected,
    continent,
    continentData,
    onSelect,
    onContinent,
  } = useHomeContext();

  return (
    <>
      <Continents
        continent={continent}
        onContinent={onContinent}
        continentData={continentData}
      />
      <Countries
        countries={countries}
        country={country}
        active={selected !== ''}
        onSelect={onSelect}
      />
    </>
  );
}

export default CountryPage;
