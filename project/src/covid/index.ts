interface Country {
  Country: string;
  CountryCode: string;
  Date: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecoverd: number;
  Premium: any;
  Slug: string;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecoverd: number;
}

interface Global {
  NewConfiremd: number;
  NewDeaths: number,
  NewRecovered: number;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecoverd: number;
}
export interface CovidSummaryResponse {
  Countries: Country[];
  Date: string;
  Global: Global;
  Message: string;
}

interface CountrySummaryInfo {
  Cases: number;
  City: string;
  CityCode: string;
  CountryCode: string;
  Date: string;
  Lat: string;
  Lon: string;
  Province: string;
  Status: string;
}

export type CountrySummaryResponse = CountrySummaryInfo[];