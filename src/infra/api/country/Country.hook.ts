import { COUNTRY_GQL } from './Country.gql';
import { CountryInput, CountryOutput } from './Country.entity';
import {
  QueryResult, useQuery,
} from '@apollo/client';

export function useCountry(code: string): QueryResult<CountryOutput, CountryInput> {
  return useQuery<CountryOutput, CountryInput>(COUNTRY_GQL, {
    variables: {
      code,
    },
    skip: code === '',
  });
}
