export interface Facility {
  title: string;
  iconSvg: string;
}

export interface Property {
  id: number;
  title: string;
  location: string;
  price?: number;
  sqft?: number;
  size?: string;
  apartments?: string;
  status?: string;
  bedrooms?: number;
  bathrooms?: number;
  distanceFromTemple?: number;
  badge?: "Featured" | "Premium" | "New" | string;
  image: string;
  mobileImage?: string;
  features?: string[];
  facilities?: Facility[];
  description: string;
  propertyType?: 'Villa' | 'Apartment' | 'Plot' | 'Duplex' | 'Haveli' | 'Township' | string;
  year?: number;
}

export interface SearchFilters {
  propertyType: string;
  location: string;
  budget: string;
}

export interface SiteVisitForm {
  name: string;
  phone: string;
  email?: string;
  property?: string;
  date?: string;
  message?: string;
}
