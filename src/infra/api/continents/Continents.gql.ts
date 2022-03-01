import { gql } from '@apollo/client';
import { countryData } from '../country/Country.gql';

export const continentData = `
  code
  name
  countries {
    ${countryData}
  }
`;

export const CONTINENTS_GQL = gql`
  query Continents($filter: ContinentFilterInput) {
    continents(filter: $filter) {
      ${continentData}
    }
  }
`;
