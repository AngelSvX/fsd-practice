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

export type Region = "America" | "Africa" | "Europe" | "Asia" | "Oceania"

export interface CountriesState {
  countrieList: Countrie[];
  selectedRegion: Region
  selectedCountrie: Countrie | null;
  filteredCountries: Countrie[] | null;
  isFilterCountries: boolean
  loading: boolean;
  error: string | null;
}

