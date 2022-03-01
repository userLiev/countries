import { FC } from 'react';
import { Country } from '../../../infra/api/country/Country.entity';
import { Data } from '../../../domain/entities/data';
import Emoji from '../emoji/Emoji';
import CountryCardPreview from './CountryCardPreview';

type Props = {
  country: Data<Country>;
}

const CountryCard: FC<Props> = ({ country }) => {
  if (country.loading) {
    return <CountryCardPreview />
  }

  if (country.data) {
    return (
      <div className="country-card">
        <div className="header">
          <Emoji emoji={country.data.emoji} />
          <div className="header-content">
            <h3>{country.data.name} ({country.data.code})</h3>
            <small><strong>Capital:</strong> {country.data.capital}</small>
          </div>
        </div>
        <p><strong>Continent:</strong> {country.data.continent.name} ({country.data.continent.code})</p>
        <p><strong>Native:</strong> {country.data.native}</p>
        <p><strong>Currency:</strong> {country.data.currency}</p>
        <p><strong>Phone:</strong> {country.data.phone}</p>
        <p>
          <strong>Languages:</strong>&nbsp;
          {country.data.languages.map((l, i) => `${i ? ', ' : ''}${l.name}(${l.code})`)}
        </p>
      </div>
    );
  }

  return null;
};

export default CountryCard;
