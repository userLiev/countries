import { ApolloError } from '@apollo/client';
import { Country } from '../../../api/country/Country.entity';

export type CountryProviderInterface = {
  country?: Country;

  countries?: Country[];

  error?: ApolloError;

  loading: boolean;

  selected: string;

  onSelect: (value: string) => void;
}
