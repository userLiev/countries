import { FC } from 'react';
import { Country } from '../../../api/country/Country.entity';
import Emoji from '../emoji/Emoji';

type Props = {
  country?: Country;
}

const CountryCard: FC<Props> = ({ country }) => {
  return (
    <div className="country-card">
      {
        country ? (
          <>
            <div className="header">
              <Emoji emoji={country.emoji} />
              <div className="header-content">
                <h3>{country.name} ({country.code})</h3>
                <small><strong>Capital:</strong> {country.capital}</small>
              </div>
            </div>
            <p><strong>Continent:</strong> {country.continent.name} ({country.continent.code})</p>
            <p><strong>Native:</strong> {country.native}</p>
            <p><strong>Currency:</strong> {country.currency}</p>
            <p><strong>Phone:</strong> {country.phone}</p>
            <p>
              <strong>Languages:</strong>&nbsp;
              {country.languages.map((l, i) => `${i ? ', ' : ''}${l.name}(${l.code})`)}</p>
          </>
        ) : (
          <p>loading...</p>
        )
      }
    </div>
  );
};

export default CountryCard;
