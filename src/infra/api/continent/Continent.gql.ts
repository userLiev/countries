import { gql } from '@apollo/client';

export const CONTINENT_GQL = gql`
  query Continent($code: ID!) {
    continent(code: $code) {
      code
      name
    }
  }
`;
