import { Country } from './../country/Country.entity';

export type StringQueryOperatorInput = {
  eq?: string;

  ne?: string;

  in?: string[];

  nin?: string[];

  regex?: string;

  glob?: string;
}

export type CountriesFilterInput = {
  code?: StringQueryOperatorInput;

  currency?: StringQueryOperatorInput;

  continent?: StringQueryOperatorInput;
}

export type CountriesInput = {
  filter?: CountriesFilterInput;
}

export type CountriesOutput = {
  countries: Country[];
}
