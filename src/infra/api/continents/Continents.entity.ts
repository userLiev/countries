import { StringQueryOperatorInput } from '../countries/Countries.entity';
import { Country } from '../country/Country.entity';

export type Continent = {
  code: string;
  name: string;
  countries: Country[];
}

export type ContinentFilterInput = {
  code?: StringQueryOperatorInput;
}

export type ContinentsInput = {
  filter?: ContinentFilterInput;
}

export type ContinentsOutput = {
  continents: Continent[];
}
