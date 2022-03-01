import { countryData } from '../country/Country.gql';
import { gql } from '@apollo/client';

export const COUNTRIES_GQL = gql`
  query Countries($filter: CountryFilterInput) {
    countries(filter: $filter) {
      ${countryData}
    }
  }
`;
