export interface Places {
  results: Result[];
}

export interface Result {
  formatted_address: string;
  geometry: Geometry;
}

export interface Geometry {
  location: Location;
  viewport: Viewport;
}

export interface Location {
  lat: number;
  lng: number;
}

export interface Viewport {
  northeast: Location;
  southwest: Location;
}
