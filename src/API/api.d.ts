export function getCountries(): Promise<ApiResponse>;
export function searchGeo(query?: string): Promise<ApiResponse>;
export function startSearchPrices(countryID: string): Promise<ApiResponse>;
export function getSearchPrices(token: string): Promise<ApiResponse>;
export function stopSearchPrices(token: string): Promise<ApiResponse>;
export function getHotels(countryID: string): Promise<ApiResponse>;
export function getHotel(hotelId: number | string): Promise<ApiResponse>;
export function getPrice(priceId: string): Promise<ApiResponse>;
