export interface CountryOption {
    value: string;
    label: string;
    flag: string;
    region: string;
}

export const countries: CountryOption[] = [
    // Europe
    { value: 'AL', label: 'Albania', flag: '🇦🇱', region: 'Europe' },
    { value: 'AD', label: 'Andorra', flag: '🇦🇩', region: 'Europe' },
    { value: 'AT', label: 'Austria', flag: '🇦🇹', region: 'Europe' },
    { value: 'BY', label: 'Belarus', flag: '🇧🇾', region: 'Europe' },
    { value: 'BE', label: 'Belgium', flag: '🇧🇪', region: 'Europe' },
    { value: 'BA', label: 'Bosnia and Herzegovina', flag: '🇧🇦', region: 'Europe' },
    { value: 'BG', label: 'Bulgaria', flag: '🇧🇬', region: 'Europe' },
    { value: 'HR', label: 'Croatia', flag: '🇭🇷', region: 'Europe' },
    { value: 'CY', label: 'Cyprus', flag: '🇨🇾', region: 'Europe' },
    { value: 'CZ', label: 'Czech Republic', flag: '🇨🇿', region: 'Europe' },
    { value: 'DK', label: 'Denmark', flag: '🇩🇰', region: 'Europe' },
    { value: 'EE', label: 'Estonia', flag: '🇪🇪', region: 'Europe' },
    { value: 'FI', label: 'Finland', flag: '🇫🇮', region: 'Europe' },
    { value: 'FR', label: 'France', flag: '🇫🇷', region: 'Europe' },
    { value: 'DE', label: 'Germany', flag: '🇩🇪', region: 'Europe' },
    { value: 'GE', label: 'Georgia', flag: '🇬🇪', region: 'Europe' },
    { value: 'GR', label: 'Greece', flag: '🇬🇷', region: 'Europe' },
    { value: 'HU', label: 'Hungary', flag: '🇭🇺', region: 'Europe' },
    { value: 'IS', label: 'Iceland', flag: '🇮🇸', region: 'Europe' },
    { value: 'IE', label: 'Ireland', flag: '🇮🇪', region: 'Europe' },
    { value: 'IT', label: 'Italy', flag: '🇮🇹', region: 'Europe' },
    { value: 'LV', label: 'Latvia', flag: '🇱🇻', region: 'Europe' },
    { value: 'LI', label: 'Liechtenstein', flag: '🇱🇮', region: 'Europe' },
    { value: 'LT', label: 'Lithuania', flag: '🇱🇹', region: 'Europe' },
    { value: 'LU', label: 'Luxembourg', flag: '🇱🇺', region: 'Europe' },
    { value: 'MT', label: 'Malta', flag: '🇲🇹', region: 'Europe' },
    { value: 'MD', label: 'Moldova', flag: '🇲🇩', region: 'Europe' },
    { value: 'MC', label: 'Monaco', flag: '🇲🇨', region: 'Europe' },
    { value: 'ME', label: 'Montenegro', flag: '🇲🇪', region: 'Europe' },
    { value: 'NL', label: 'Netherlands', flag: '🇳🇱', region: 'Europe' },
    { value: 'MK', label: 'North Macedonia', flag: '🇲🇰', region: 'Europe' },
    { value: 'NO', label: 'Norway', flag: '🇳🇴', region: 'Europe' },
    { value: 'PL', label: 'Poland', flag: '🇵🇱', region: 'Europe' },
    { value: 'PT', label: 'Portugal', flag: '🇵🇹', region: 'Europe' },
    { value: 'RO', label: 'Romania', flag: '🇷🇴', region: 'Europe' },
    { value: 'RU', label: 'Russia', flag: '🇷🇺', region: 'Europe' },
    { value: 'SM', label: 'San Marino', flag: '🇸🇲', region: 'Europe' },
    { value: 'RS', label: 'Serbia', flag: '🇷🇸', region: 'Europe' },
    { value: 'SK', label: 'Slovakia', flag: '🇸🇰', region: 'Europe' },
    { value: 'SI', label: 'Slovenia', flag: '🇸🇮', region: 'Europe' },
    { value: 'ES', label: 'Spain', flag: '🇪🇸', region: 'Europe' },
    { value: 'SE', label: 'Sweden', flag: '🇸🇪', region: 'Europe' },
    { value: 'CH', label: 'Switzerland', flag: '🇨🇭', region: 'Europe' },
    { value: 'UA', label: 'Ukraine', flag: '🇺🇦', region: 'Europe' },
    { value: 'GB', label: 'United Kingdom', flag: '🇬🇧', region: 'Europe' },
    { value: 'VA', label: 'Vatican City', flag: '🇻🇦', region: 'Europe' },

    // North America
    { value: 'CA', label: 'Canada', flag: '🇨🇦', region: 'North America' },
    { value: 'US', label: 'United States', flag: '🇺🇸', region: 'North America' },
    { value: 'MX', label: 'Mexico', flag: '🇲🇽', region: 'North America' },

    // GCC & Middle East
    { value: 'QA', label: 'Qatar', flag: '🇶🇦', region: 'GCC' },
    { value: 'SA', label: 'Saudi Arabia', flag: '🇸🇦', region: 'GCC' },
    { value: 'AE', label: 'United Arab Emirates', flag: '🇦🇪', region: 'GCC' },
    { value: 'OM', label: 'Oman', flag: '🇴🇲', region: 'GCC' },
    { value: 'KW', label: 'Kuwait', flag: '🇰🇼', region: 'GCC' },
    { value: 'BH', label: 'Bahrain', flag: '🇧🇭', region: 'GCC' },
    { value: 'TR', label: 'Turkey', flag: '🇹🇷', region: 'Middle East' },

    // Asia / Oceania
    { value: 'AU', label: 'Australia', flag: '🇦🇺', region: 'Oceania' },
    { value: 'NZ', label: 'New Zealand', flag: '🇳🇿', region: 'Oceania' },
    { value: 'CN', label: 'China', flag: '🇨🇳', region: 'Asia' },
    { value: 'JP', label: 'Japan', flag: '🇯🇵', region: 'Asia' },
    { value: 'KR', label: 'South Korea', flag: '🇰🇷', region: 'Asia' },
    { value: 'PK', label: 'Pakistan', flag: '🇵🇰', region: 'Asia' },
    { value: 'MY', label: 'Malaysia', flag: '🇲🇾', region: 'Asia' },
    { value: 'SG', label: 'Singapore', flag: '🇸🇬', region: 'Asia' },
    { value: 'TH', label: 'Thailand', flag: '🇹🇭', region: 'Asia' },
];

export const groupedCountries = [
    {
        label: 'Popular Regions',
        options: countries.filter(c => ['CA', 'US', 'GB', 'AU', 'QA', 'SA', 'AE'].includes(c.value))
    },
    {
        label: 'Europe',
        options: countries.filter(c => c.region === 'Europe')
    },
    {
        label: 'North America',
        options: countries.filter(c => c.region === 'North America')
    },
    {
        label: 'GCC',
        options: countries.filter(c => c.region === 'GCC')
    },
    {
        label: 'Other Regions',
        options: countries.filter(c => !['Europe', 'North America', 'GCC'].includes(c.region))
    }
];
