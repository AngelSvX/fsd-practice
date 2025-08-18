export interface Countrie {
 name: {
  common: string,
  official: string,
  nativeName: {
    [lang: string]: {
      official: string,
      common: string
    }
  }
 },
 independent: boolean
 currencies: {
  [code: string]: {
    symbol: string,
    name: string
  }
 },
 capital: string[],
 region: string,
 subregion: string,
 languages: {
  [code: string] : string
 },
 borders: string[],
 flags: {
  png: string,
  svg: string,
  alt: string
 }
}

export interface CountriesState {
  countrieList: Countrie[];
  selectedCountrie: Countrie | null;
  loading: boolean;
  error: string | null;
}
