import { FC } from 'react';
import { Country } from '../../../infra/api/country/Country.entity';
import { Data } from '../../../domain/entities/data';
import CountryCard from '../country-card/CountryCard';
import Emoji from '../emoji/Emoji';
import Modal from '../modal/Modal';
import Pressable from '../pressable/Pressable';

type Props = {
  countries?: Country[];

  country: Data<Country>;

  active: boolean;

  onSelect: (value: string) => void;
}

const Countries: FC<Props> = ({
  countries,
  country,
  active,
  onSelect,
}) => {
  if (!countries || countries.length === 0) {
    return null;
  }

  return (
    <section className="countries-section">
      <div className="countries-container">
        {
          countries.map((c) => {
            return (
              <Pressable key={c.code} onClick={() => onSelect(c.code)}>
                <Emoji emoji={c.emoji} />
              </Pressable>
            );
          })
        }
        <Modal active={active} onClose={() => onSelect('')}>
          <CountryCard country={country} />
        </Modal>
      </div>
    </section>
  );
};

export default Countries;
