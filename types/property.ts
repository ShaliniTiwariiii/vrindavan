export interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  sqft: number;
  bedrooms?: number;
  bathrooms?: number;
  distanceFromTemple: number;
  badge?: "Featured" | "Premium" | "New" | string;
  image: string;
  features: string[];
  description: string;
  propertyType: 'Villa' | 'Apartment' | 'Plot' | 'Duplex' | 'Haveli';
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
