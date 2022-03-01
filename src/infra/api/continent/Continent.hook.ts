import { CONTINENT_GQL } from './Continent.gql';
import { QueryResult, useQuery } from '@apollo/client';
import { ContinentOutput, ContinentInput } from './Continent.entity';

export function useContinent(code: string): QueryResult<ContinentOutput, ContinentInput> {
  return useQuery<ContinentOutput, ContinentInput>(CONTINENT_GQL, {
    variables: {
      code,
    },
    skip: code === '',
  });
}
