import { FC } from 'react';
import Continents from '../../components/continents/Continents';
import Countries from '../../components/countries/Countries';
import Pressable from '../../components/pressable/Pressable';
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
    onSelect,
  } = useHomeContext();

  return (
    <>
      <Continents />
      <Pressable className="europe-aux" />
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
