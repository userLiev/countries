import { FC } from 'react';
import Preview from '../preview/Preview';

const CountryCardPreview: FC = () => {
  return (
    <div className="country-card">
      <div className="header">
        <Preview height={36} width={48} />
        <div className="header-content">
          <h3><Preview height={24} width={200} /></h3>
          <small><Preview height={17} width={180} /></small>
        </div>
      </div>
      <p><Preview height={20} width={180} /></p>
      <p><Preview height={20} width={180} /></p>
      <p><Preview height={20} width={180} /></p>
      <p><Preview height={20} width={180} /></p>
      <p><Preview height={20} width={220} /></p>
    </div>
  );
};

export default CountryCardPreview;
