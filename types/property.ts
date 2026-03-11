export interface Facility {
  title: string;
  iconSvg: string;
}

export interface FloorPlan {
  title: string;
  size: string;
  price: string;
  image: string;
}

export interface MasterPlan {
  image: string;
  features: string[];
}

export interface NearestDestination {
  image?: string
  mapEmbed?: string
  mapLink?: string
  locations: string[]
}
export interface LifestyleFeature {
  title: string;
  image: string;
}

export interface Property {

  badge?: 'Featured' | 'Premium' | 'New' | string; 
  priceunit?: string;
  distanceFromTemple?: number | string;
  sqft?: number | string;
  bedrooms?: number | string;
  bathrooms?: number | string;
  // ------------------------------------------------
  id:string
  title: string
  image: string
  mobileImage?: string
  location?: string
  year?: number
  size?: string
  apartments?: string
  status?: string
  floors?: string
  towers?: string
  description: string

  nearestDestination?: NearestDestination

  masterPlan?: {
    image: string
    features: string[]
  }

  floorPlans?: {
    title: string
    size: string
    price: string
    image: string
  }[]

  facilities?: {
    title: string
    iconSvg: string
  }[]

  lifestyleFeatures?: {
    title: string
    image: string
  }[]

  gallery?: {
    description?: string
    images: {
      src: string
      description?: string
    }[]
  }
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
