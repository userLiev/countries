import { Data } from './../../../domain/entities/data';
import { Country } from '../../../infra/api/country/Country.entity';

export enum ContinentsEnum {
  EU = 'EU',
  AF = 'AF',
  NA = 'NA',
  SA = 'SA',
  AS = 'AS',
  OC = 'OC',
  AN = 'AN'
}

export type HomeProviderInterface = {
  country: Data<Country>;

  countries?: Country[];

  errorMsg?: string;

  loading: boolean;

  selected: string;

  continent: ContinentsEnum | '';

  continentData?: {
    code: string;
    name: string;
  };

  onSelect: (value: string) => void;

  onContinent: (value: ContinentsEnum) => void;
}
