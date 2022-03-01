import { Continent } from '../continents/Continents.entity';
import { Language } from './Language.entity';

export type Country = {
  code: string;
  name: string;
  native: string;
  phone: string;
  continent: Continent;
  capital?: string;
  currency?: string;
  languages: Language[];
  emoji: string;
  emojiU: string;

}

export type CountryInput = {
  code: string;
}

export type CountryOutput = {
  country: Country;
}
