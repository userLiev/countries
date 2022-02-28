import { QueryResult, useQuery } from '@apollo/client';
import { CountriesInput, CountriesOutput } from './Countries.entity';
import { COUNTRIES_GQL } from './Countries.gql';

export function useCountries(variables: CountriesInput): QueryResult<CountriesOutput, CountriesInput> {
  return useQuery<CountriesOutput, CountriesInput>(COUNTRIES_GQL, {
    variables,
  });
}
