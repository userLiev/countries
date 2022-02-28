import { FC } from 'react';
import CountryCard from '../../components/country-card/CountryCard';
import Emoji from '../../components/emoji/Emoji';
import Modal from '../../components/modal/Modal';
import Pressable from '../../components/pressable/Pressable';
import CountryProvider, { useCountryContext } from './HomeProvider';

const CountryPage: FC = () => {
  return (
    <CountryProvider>
      <CountryContent />
    </CountryProvider>
  )
};

const CountryContent: FC = () => {
  const {
    country,
    countries,
    selected,
    onSelect,
  } = useCountryContext();

  return (
    <div className="countries-container">
      {
        countries?.map((c) => {
          return (
            <Pressable key={c.code} onClick={() => onSelect(c.code)}>
              <Emoji emoji={c.emoji} />
            </Pressable>
          );
        })
      }
      <Modal active={selected !== ''} onClose={() => onSelect('')}>
        <CountryCard country={country} />
      </Modal>
    </div>
  );
}

export default CountryPage;
