import { CONTINENTS_GQL } from './Continents.gql';
import { ContinentsOutput, ContinentFilterInput, ContinentsInput } from './Continents.entity';
import { useQuery, QueryResult } from '@apollo/client';

export function useContinents(filter?: ContinentFilterInput): QueryResult<ContinentsOutput, ContinentsInput> {
  return useQuery<ContinentsOutput, ContinentsInput>(CONTINENTS_GQL, {
    variables: {
      filter,
    },
  });
}
