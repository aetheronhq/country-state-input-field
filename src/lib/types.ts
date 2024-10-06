export interface CountryProps {
    id: number;
    name: string;
    iso3: string;
    iso2: string;
    numeric_code: string;
    phone_code: string;
    capital: string;
    currency: string;
    currency_name: string;
    currency_symbol: string;
    tld: string;
    native: string | null;
    region: string;
    region_id: string | null;
    subregion: string;
    subregion_id: string | null;
    nationality: string;
    timezones: Timezone[] | null;
    translations: { [key: string]: string | undefined };
    latitude: string;
    longitude: string;
    emoji: string;
    emojiU: string;
}

interface Timezone {
    zoneName: string;
    gmtOffset: number;
    gmtOffsetName: string;
    abbreviation: string;
    tzName: string;
}

export interface StateProps {
    id: number;
    name: string;
    country_id: number;
    country_code: string;
    country_name: string;
    state_code: string;
    type: string | null;
    latitude: string;
    longitude: string;
}
